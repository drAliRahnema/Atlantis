<template>
  <div :class="{ [config.Title]: true }">
    <!-- <AppLoader v-if="appConfig.loading.app" />  -->
    <div :class="layoutContainerClass" @click="onDocumentClick">
      <div class="layout-main">
        <AppTopBar :items="menu" :menuMode="appConfig.layout.menuMode" :colorScheme="appConfig.layout.colorScheme"
          :menuActive="menuActive" :topbarMenuActive="topbarMenuActive" :activeInlineProfile="activeInlineProfile"
          @topbar-item-click="onTopbarItemClick" @menubutton-click="onMenuButtonClick"
          @sidebar-mouse-over="onSidebarMouseOver" @sidebar-mouse-leave="onSidebarMouseLeave" @toggle-menu="onToggleMenu"
          @change-inlinemenu="onChangeActiveInlineMenu" @menu-click="onMenuClick" @menuitem-click="onMenuItemClick"
          @root-menuitem-click="onRootMenuItemClick" @change-direction="onChangeDirection($event)"
          @change-color-scheme="onChangeColorScheme" />

        <AppMenu :model="menu" :menuMode="appConfig.layout.menuMode" :colorScheme="appConfig.layout.colorScheme"
          :menuActive="menuActive" :sidebarActive="sidebarActive" :sidebarStatic="sidebarStatic" :pinActive="pinActive"
          :activeInlineProfile="activeInlineProfile" @sidebar-mouse-over="onSidebarMouseOver"
          @sidebar-mouse-leave="onSidebarMouseLeave" @toggle-menu="onToggleMenu"
          @change-inlinemenu="onChangeActiveInlineMenu" @menu-click="onMenuClick" @menuitem-click="onMenuItemClick"
          @root-menuitem-click="onRootMenuItemClick" />

        <!-- <AppBreadcrumb
          :menuMode="appConfig.layout.menuMode"
          v-model:searchActive="searchActive"
          v-model:searchClick="searchClick"
          @menubutton-click="onMenuButtonClick"
          @rightmenu-button-click="onRightMenuButtonClick"
        /> -->

        <div class="layout-main-content py-0 px-3">
          <slot />
        </div>

        <AppFooter :colorScheme="appConfig.layout.colorScheme" />
      </div>

      <AppRightMenu
        :rightMenuActive="rightMenuActive"
        @rightmenu-click="onRightMenuClick"
        @rightmenu-active="onChangeRightMenuActive"
      />

      <AppConfig
        v-model:menuMode="appConfig.layout.menuMode"
        :theme="appConfig.layout.theme"
        :componentTheme="appConfig.layout.componentTheme"
        :colorScheme="appConfig.layout.colorScheme"
        :dir="appConfig.layout.direction"
        :configActive="configActive"
        :configClick="configClick"
        @config-button-click="onConfigButtonClick"
        @config-click="onConfigClick"
        @change-direction="onChangeDirection"
        @change-color-scheme="onChangeColorScheme"
        @change-component-theme="onChangeComponentTheme"
        @change-menu-theme="onChangeMenuTheme"
        @change-menu-mode="onChangeMenuMode"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import { useAppStore } from "@/stores/app";
const appConfig = useAppStore();
const config = useAppConfig();

import { useI18n } from "vue-i18n";
const { locale,setLocale, t } = useI18n();


// let name = t('pages.home');
// console.log("==================",locale.value, t('pages.home'),"===================");


useHead({
  // bodyAttrs: {
  //   "dir" : appConfig.layout.direction
  // },
  script: [
    // {
    //   src: '',
    //   integrity: "",
    //   crossorigin:"anonymous",
    //   body: true
    // }
  ],
  link: [
    // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    // {
    //   rel: "stylesheet",
    //   href:
    //     "/theme/" +
    //     appConfig.layout.componentTheme +
    //     "/theme-" +
    //     appConfig.layout.colorScheme +
    //     "-" +
    //     appConfig.layout.direction +
    //     ".css",
    //   type: "text/css",
    //   id: "theme-css",
    // },
    {
      rel: "stylesheet",
      href:
        `${config.Base_URL}theme/${appConfig.layout.direction}/${appConfig.layout.theme}/bootstrap4-${appConfig.layout.colorScheme}.css`,
      type: "text/css",
      id: "theme-css",
    },
    {
      rel: "stylesheet",
      href: `${config.Base_URL}layout/css/${appConfig.layout.direction}/${appConfig.layout.theme}/layout-${appConfig.layout.colorScheme}.css`,
      type: "text/css",
      id: "layout-css",
    },
  ],
});

onUpdated(()=>{
  // alert("wah") 
});
onMounted(() => {
  // setTimeout(() => {
  //   appConfig.loading.app = false;
  // }, 1500);

  // fix on route lang locale change
  const currentLang = appConfig.params.constants.languages.find(item => item.code == locale.value)
  if (currentLang) {
    // alert(currentLang.code);

    appConfig.layout.lang = currentLang.name;
    appConfig.layout.direction = currentLang.dir;

    onChangeDirection(currentLang.dir);
  }
  

});

watch(locale, (newLocale) => {
  // console.log(`(main.vue) watch Locale changed to ${newLocale}`);
})


const search = ref(false);
const searchClick = ref(false);
const searchActive = ref(false);
const menuActive = ref(false);
const activeInlineProfile = ref(false);
const inlineMenuClick = ref(false);
const overlayMenuActive = ref(false);
const topbarMenuActive = ref(false);
const menuClick = ref(false);
const topbarItemClick = ref(false);
const sidebarActive = ref(false);
const sidebarStatic = ref(false);
const pinActive = ref(false);
const staticMenuDesktopInactive = ref(false);
const staticMenuMobileActive = ref(false);
const rightMenuClick = ref(false);
const rightMenuActive = ref(false);
const configActive = ref(false);
const configClick = ref(false);
const menu = ref([
  {
    label: config.Title,
    icon: "pi pi-fw pi-home",
    items: [{ label: t('pages.home'), icon: "pi pi-fw pi-home", to: config.Base_URL }],
  }
]);

const onDocumentClick = () => {
  if (!searchClick.value && searchActive.value) {
    onSearchHide();
  }

  if (!topbarItemClick.value) {
    topbarMenuActive.value = false;
  }

  if (!menuClick.value) {
    if (isHorizontal() || isSlim()) {
      menuActive.value = false;
      // EventBus.emit("reset-active-index");
    }

    if (overlayMenuActive.value || staticMenuMobileActive.value) {
      overlayMenuActive.value = false;
      staticMenuMobileActive.value = false;
    }

    hideOverlayMenu();
    unblockBodyScroll();
  }

  if (!rightMenuClick.value) {
    rightMenuActive.value = false;
  }

  if (configActive.value && !configClick.value) {
    configActive.value = false;
  }

  topbarItemClick.value = false;
  menuClick.value = false;
  configClick.value = false;
  rightMenuClick.value = false;
  searchClick.value = false;
  inlineMenuClick.value = false;
};

const onSearchHide = () => {
  searchActive.value = false;
  searchClick.value = false;
};

const onSidebarMouseOver = () => {
  if (appConfig.layout.menuMode === "sidebar" && !sidebarStatic.value) {
    sidebarActive.value = isDesktop();
    setTimeout(() => {
      pinActive.value = isDesktop();
    }, 200);
  }
};

const onSidebarMouseLeave = () => {
  if (appConfig.layout.menuMode === "sidebar" && !sidebarStatic.value) {
    setTimeout(() => {
      sidebarActive.value = false;
      pinActive.value = false;
    }, 250);
  }
};

const hideOverlayMenu = () => {
  overlayMenuActive.value = false;
  staticMenuMobileActive.value = false;
};

const onMenuButtonClick = (event: { preventDefault: () => void; }) => {
  menuClick.value = true;

  if (isOverlay()) {
    overlayMenuActive.value = !overlayMenuActive.value;
  }

  if (isDesktop()) {
    staticMenuDesktopInactive.value = !staticMenuDesktopInactive.value;
  } else {
    staticMenuMobileActive.value = !staticMenuMobileActive.value;
  }

  event.preventDefault();
};

const onTopbarItemClick = (event: { preventDefault: () => void; }) => {
  topbarItemClick.value = true;
  topbarMenuActive.value = !topbarMenuActive.value;
  hideOverlayMenu();
  event.preventDefault();
};

const onRightMenuButtonClick = () => {
  rightMenuClick.value = true;
  rightMenuActive.value = true;
};

const onRightMenuClick = () => {
  rightMenuClick.value = true;
};

const onMenuClick = () => {
  menuClick.value = true;
};

const onRootMenuItemClick = () => {
  menuActive.value = !menuActive.value;
};

const onMenuItemClick = (event: { item: { items: any; }; }) => {
  if (!event.item.items) {
    hideOverlayMenu();
    // EventBus.emit("reset-active-index");
  }

  if (!event.item.items && (isHorizontal() || isSlim())) {
    menuActive.value = false;
  }
};

const onChangeMenuMode = (menuMode: string) => {
  console.log(menuMode)
  appConfig.changeMenuMode(menuMode);
  appConfig.layout.menuMode = menuMode;
  overlayMenuActive.value = false;
};

const onConfigClick = () => {
  configClick.value = true;
};

const onConfigButtonClick = (event: { preventDefault: () => void; }) => {
  configActive.value = !configActive.value;
  configClick.value = true;
  event.preventDefault();
};

const onChangeRightMenuActive = (active: boolean) => {
  rightMenuActive.value = active;
};

const onToggleMenu = (event: { preventDefault: () => void; }) => {
  menuClick.value = true;

  if (overlayMenuActive.value) {
    overlayMenuActive.value = false;
  }

  if (sidebarActive.value) {
    sidebarStatic.value = !sidebarStatic.value;
  }

  event.preventDefault();
};

const onChangeActiveInlineMenu = () => {
  activeInlineProfile.value = !activeInlineProfile.value;
};

const blockBodyScroll = () => {
  if (document.body.classList) {
    document.body.classList.add("blocked-scroll");
  } else {
    document.body.className += " blocked-scroll";
  }
};

const unblockBodyScroll = () => {
  if (document.body.classList) {
    document.body.classList.remove("blocked-scroll");
  } else {
    document.body.className = document.body.className.replace(
      new RegExp("(^|\\b)" + "blocked-scroll".split(" ").join("|") + "(\\b|$)", "gi"),
      " "
    );
  }
};

const isHorizontal = () => {
  return appConfig.layout.menuMode === "horizontal";
};

const isSlim = () => {
  return appConfig.layout.menuMode === "slim";
};

const isOverlay = () => {
  return appConfig.layout.menuMode === "overlay";
};

const isStatic = () => {
  return appConfig.layout.menuMode === "static";
};

const isSidebar = () => {
  return appConfig.layout.menuMode === "sidebar";
};

const isDesktop = () => {
  return window.innerWidth > 991;
};

const isMobile = () => {
  return window.innerWidth <= 991;
};

const onChangeDirection = (dir: string) => {
  // console.log("onChangeDirection (main)", dir)

  appConfig.changeDirection(dir);

  document.body.style.direction = dir;

  const theme = appConfig.layout.theme;
  const colorScheme = appConfig.layout.colorScheme;
  changeStyleSheetUrl("layout-css", dir, theme, colorScheme, "layout");
  changeStyleSheetUrl("theme-css", dir, theme, colorScheme, "bootstrap4");
};
const onChangeColorScheme = (colorScheme: string) => {
  // console.log("onChangeColorScheme (main)", colorScheme)

  appConfig.changeColorScheme(colorScheme);
  const dir = appConfig.layout.direction;
  const theme = appConfig.layout.theme;
  changeStyleSheetUrl("layout-css", dir, theme, colorScheme, "layout");
  changeStyleSheetUrl("theme-css", dir, theme, colorScheme, "bootstrap4");
};
const onChangeMenuTheme = (theme: string) => {
  appConfig.changeMenuTheme(theme);
  
  const dir = appConfig.layout.direction;
  const colorScheme = appConfig.layout.colorScheme;
  changeStyleSheetUrl("layout-css", dir, theme, colorScheme, "layout");
};
const onChangeComponentTheme = (theme: string) => {
  appConfig.changeComponentTheme(theme);
  const dir = appConfig.layout.direction;
  const colorScheme = appConfig.layout.colorScheme;
  changeStyleSheetUrl("theme-css", dir, theme, colorScheme, "bootstrap4");
};
const changeStyleSheetUrl = (id: string, dir: string, theme: string, colorScheme: string, name: string): void => {
  // console.log("changeStyleSheetUrl (main.vue):",dir,theme,colorScheme,name);
  
  const element = document.getElementById(id);
  if (element) {
    const urlTokens = element.getAttribute("href").split("/");

    urlTokens[urlTokens.length - 1] = `${name}-${colorScheme}.css`;
    urlTokens[urlTokens.length - 2] = `${theme}`;
    urlTokens[urlTokens.length - 3] = `${dir}`;

    const newURL = urlTokens.join("/");

    setTimeout(() => {
      replaceLink(element, newURL);
    });
  }

};

const replaceLink = (linkElement: HTMLElement, href: string, callback: (() => void) | undefined = undefined): void => {
  const id = linkElement.getAttribute("id");
  const cloneLinkElement = linkElement.cloneNode(true);

  cloneLinkElement.setAttribute("href", href);
  cloneLinkElement.setAttribute("id", id + "-clone");

  linkElement?.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

  cloneLinkElement.addEventListener("load", () => {
    linkElement.remove();
    cloneLinkElement.setAttribute("id", id);

    if (callback) {
      callback();
    }
  });
};

// watch(() => route.value, () => {
//   menuActive.value = false;
//   $toast.value.removeAllGroups();
// })

const layoutContainerClass = computed(() => {
  return [
    "layout-wrapper",
    {
      "layout-static": appConfig.layout.menuMode === "static",
      "layout-overlay": appConfig.layout.menuMode === "overlay",
      "layout-overlay-active": overlayMenuActive.value,
      "layout-slim": appConfig.layout.menuMode === "slim",
      "layout-horizontal": appConfig.layout.menuMode === "horizontal",
      "layout-active": menuActive.value,
      "layout-mobile-active": staticMenuMobileActive.value,
      "layout-sidebar": appConfig.layout.menuMode === "sidebar",
      "layout-sidebar-static":
        appConfig.layout.menuMode === "sidebar" && sidebarStatic.value,
      "layout-static-inactive":
        staticMenuDesktopInactive.value && appConfig.layout.menuMode === "static",
      "p-ripple-disabled": appConfig.layout.ripple,
    },
  ];
});
</script>

<style scoped></style>
