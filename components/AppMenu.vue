<template>
  <div class="layout-menu-wrapper" :class="{ 'layout-sidebar-active': sidebarActive }" @click="onMenuClick"
    @mouseover="onSidebarMouseOver" @mouseleave="onSidebarMouseLeave">
    <div class="menu-logo">
      <a href="#" class="logo">
        <img :src="'layout/images/logo-' + (colorScheme === 'light' ? 'dark' : 'light') + '.png'
          " />
      </a>

      <a href="#" class="app-name">
        <img :src="'layout/images/appname-' +
          (colorScheme === 'light' ? 'dark' : 'light') +
          '.png'
          " />
      </a>
      <a href="#" class="menu-pin" @click="onToggleMenu">
        <span v-if="isOverlay()" class="pi pi-times"></span>
        <span v-if="isSidebar() && !sidebarStatic && pinActive" class="pi pi-unlock"></span>
        <span v-if="isSidebar() && sidebarStatic && pinActive" class="pi pi-lock"></span>
      </a>
    </div>

    <div class="layout-menu-container">
      <AppSubmenu class="layout-menu" :items="model" :menuMode="menuMode" :menuActive="menuActive" :root="true"
        :parentMenuItemActive="true" @menu-click="onMenuClick" @menuitem-click="onMenuItemClick"
        @root-menuitem-click="onRootMenuItemClick" />
    </div>

    <AppInlineMenu :menuMode="menuMode" :activeInlineProfile="activeInlineProfile"
      @change-inlinemenu="onChangeActiveInlineMenu"></AppInlineMenu>
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
  model?: any[],
  menuMode?: string,
  colorScheme?: string,
  menuActive?: boolean,
  activeInlineProfile?: boolean,
  sidebarActive?: boolean
  sidebarStatic?: boolean,
  pinActive?: boolean
}


const props = withDefaults(defineProps<Props>(), {
  menuActive: false,
  activeInlineProfile: false,
  sidebarActive: false,
  sidebarStatic: false,
  pinActive: false,
});


// emits
const emit = defineEmits([
  "menu-click",
  "menuitem-click",
  "root-menuitem-click",
  "sidebar-mouse-over",
  "sidebar-mouse-leave",
  "toggle-menu",
  "change-inlinemenu",])

// vars
const menu = ref<any[]>([
  {
    label: "Favorites",
    icon: "pi pi-fw pi-home",
    items: [{ label: "Dashboard Sales", icon: "pi pi-fw pi-home", to: "/" }],
  }
])

// methods

const onSidebarMouseOver = (): void => {
  emit("sidebar-mouse-over");
}
const onSidebarMouseLeave = (): void => {
  emit("sidebar-mouse-leave");
}
const onMenuClick = (event: any): void => {
  emit("menu-click", event);
}
const onMenuItemClick = (event: any): void => {
  emit("menuitem-click", event);
}
const onRootMenuItemClick = (event: any): void => {
  emit("root-menuitem-click", event);
}
const onToggleMenu = (event: any): void => {
  emit("toggle-menu", event);
}
const onChangeActiveInlineMenu = (): void => {
  emit("change-inlinemenu");
}
const isHorizontal = (): boolean => {
  return props.menuMode === "horizontal";
}
const isSlim = (): boolean => {
  return props.menuMode === "slim";
}
const isOverlay = (): boolean => {
  return props.menuMode === "overlay";
}
const isStatic = (): boolean => {
  return props.menuMode === "static";
}
const isSidebar = (): boolean => {
  return props.menuMode === "sidebar";
}
const isDesktop = (): boolean => {
  return window.innerWidth > 991;
}
const isMobile = (): boolean => {
  return window.innerWidth <= 991;
}

// computed

// vue

</script>


<style scoped></style>
