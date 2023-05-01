<template>
    <ul v-if="items" role="menu">
        <template v-for="(item, i) of items">
            <li v-if="visible(item) && !item.separator" :key="item.label || i"
                :class="[{ 'layout-root-menuitem': root, 'active-menuitem': activeIndex === i && !item.to && !item.disabled }]"
                role="menuitem">
                <div v-if="root && isStatic()" class="layout-menuitem-text">{{ item.label }}</div>
                <router-link v-if="item.to" :to="item.to" :style="item.style"
                    :class="[item.class, 'p-ripple', { 'p-disabled': item.disabled }]" active-class="active-route"
                    :target="item.target" exact @click="onMenuItemClick($event, item, i)"
                    @mouseenter="onMenuItemMouseEnter(i)" ripple>
                    <i :class="['layout-menuitem-icon', item.icon]"></i>
                    <span class="layout-menuitem-text">{{ item.label }}</span>
                    <i v-if="item.items" class="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
                    <Badge v-if="item.badge" :value="item.badge" severity="success"></Badge>
                </router-link>
                <a v-if="!item.to" :href="item.url || '#'" :style="item.style"
                    :class="[item.class, 'p-ripple', { 'p-disabled': item.disabled }]" :target="item.target"
                    @click="onMenuItemClick($event, item, i)" @mouseenter="onMenuItemMouseEnter(i)" role="menuitem" ripple>
                    <i :class="['layout-menuitem-icon', item.icon]"></i>
                    <span class="layout-menuitem-text">{{ item.label }}</span>
                    <i v-if="item.items" class="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
                    <Badge v-if="item.badge" :value="item.badge" severity="success"></Badge>
                </a>
                <transition name="layout-menu">
                    <AppSubmenu v-show="item.items && root && isStatic() ? true : activeIndex === i"
                        :items="visible(item) && item.items" :menuActive="menuActive" :menuMode="menuMode"
                        :parentMenuItemActive="activeIndex === i" @menuitem-click="emit('menuitem-click', $event)">
                    </AppSubmenu>
                </transition>
            </li>
        </template>
    </ul>
</template>

<script setup lang="ts">
import EventBus from './EventBus';

import { useAppStore } from "@/stores/app";

const appConfig = useAppStore();
const config = useAppConfig();
const router = useRouter()
const route = useRoute()

// props
interface Props {
    items?: any[],
    menuMode?: string,
    menuActive?: boolean,
    root?: boolean,
    parentMenuItemActive?: boolean
}


const props = withDefaults(defineProps<Props>(), {
    menuActive: false,
    root: false,
    parentMenuItemActive: false
});


// emits
const emit = defineEmits(['root-menuitem-click', 'menuitem-click'])

// vars
const activeIndex = ref<any>(null);


// methods

const onMenuItemClick = (event: { preventDefault: () => void; currentTarget: any; }, item: { disabled: any; command: (arg0: { originalEvent: any; item: any; }) => void; items: any; }, index: any): void => {

    if (item.disabled) {
        event.preventDefault();
        return;
    }
    //execute command
    if (item.command) {
        item.command({ originalEvent: event, item: item });
        event.preventDefault();
    }
    if (item.items) {
        event.preventDefault();
    }
    if (props.root) {
        emit('root-menuitem-click', {
            originalEvent: event,
        });
    }
    if (item.items) {
        activeIndex.value = index === activeIndex ? null : index;
    }
    else {
        activeIndex.value = index;

        if (props.menuMode !== 'sidebar') {
            const ink = getInk(event.currentTarget);
            if (ink) {
                removeClass(ink, 'p-ink-active');
            }
        }
    }
    emit('menuitem-click', {
        originalEvent: event,
        item: item,
    });
}
const onMenuItemMouseEnter = (index: any): void => {
    if (props.root && props.menuActive && (isHorizontal() || isSlim()) && !isMobile()) {
        activeIndex.value = index;
    }
}
const visible = (item: { visible: boolean | (() => any); }) => {
    return typeof item.visible === 'function' ? item.visible() : item.visible !== false;
}
const isMobile = () => {
    return window.innerWidth <= 991;
}
const isStatic = () => {
    return props.menuMode === 'static';
}
const isSlim = () => {
    return props.menuMode === 'slim';
}
const isHorizontal = () => {
    return props.menuMode === 'horizontal';
}
const getInk = (el: { children: string | any[]; }) => {
    for (let i = 0; i < el.children.length; i++) {
        if (typeof el.children[i].className === 'string' && el.children[i].className.indexOf('p-ink') !== -1) {
            return el.children[i];
        }
    }
    return null;
}
const removeClass = (element: { classList: { remove: (arg0: any) => void; }; className: string; }, className: string) => {
    if (element.classList)
        element.classList.remove(className);
    else
        element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}


// computed

// vue
onMounted(() => {
    EventBus.on('reset-active-index', () => {
        if (isSlim() || isHorizontal()) {
            activeIndex.value = null;
        }
    });
});

</script>