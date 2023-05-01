<template>
    <div :class="['layout-inline-menu', { 'layout-inline-menu-active': activeInlineProfile }]"
        v-if="!isMobile() && (isStatic() || isSlim() || isSidebar())">
        <a class="layout-inline-menu-action" @click="onChangeActiveInlineMenu">
            <img src="/layout/images/profile-image.png" alt="avatar" style="width: 44px; height: 44px;">
            <span class="layout-inline-menu-text">Gene Russell</span>
            <i class="layout-inline-menu-icon pi pi-angle-down"></i>
        </a>

        <transition name="layout-inline-menu-action-panel">
            <ul v-show="activeInlineProfile" class="layout-inline-menu-action-panel">
                <li class="layout-inline-menu-action-item">
                    <a>
                        <i class="pi pi-power-off pi-fw"></i>
                        <span>Logout</span>
                    </a>
                </li>
                <li class="layout-inline-menu-action-item">
                    <a>
                        <i class="pi pi-cog pi-fw"></i>
                        <span>Settings</span>
                    </a>
                </li>
                <li class="layout-inline-menu-action-item">
                    <a>
                        <i class="pi pi-user pi-fw"></i>
                        <span>Profile</span>
                    </a>
                </li>
            </ul>
        </transition>
    </div>
</template>

<script setup lang="ts">

import { useAppStore } from "@/stores/app";

const appConfig = useAppStore();
const config = useAppConfig();
const router = useRouter()
const route = useRoute()

// props
interface Props {
    menuMode?: string,
    activeInlineProfile: boolean
}


const props = withDefaults(defineProps<Props>(), {
    activeInlineProfile: false
});


// emits
const emit = defineEmits(['change-inlinemenu'])

// vars

// methods
const onChangeActiveInlineMenu = (event: any)=> {
    emit('change-inlinemenu', event);
    event.preventDefault();
}
const isHorizontal = (): boolean => {
    return props.menuMode === 'horizontal';
}
const isSlim = (): boolean => {
    return props.menuMode === 'slim';
}
const isOverlay = (): boolean => {
    return props.menuMode === 'overlay';
}
const isStatic = (): boolean => {
    return props.menuMode === 'static';
}
const isSidebar = (): boolean => {
    return props.menuMode === 'sidebar';
}
const isDesktop = (): boolean => {
    if (process.client) {
        return window.innerWidth > 991;
    }
    return true;
}
const isMobile = (): boolean => {
    if (process.client) {
        return window.innerWidth <= 991;
    }
    return false;
}

// computed

// vue

</script>



<style scoped></style>
