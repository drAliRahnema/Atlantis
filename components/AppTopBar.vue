<template>
  <div class="layout-topbar">
    <div class="layout-topbar-left">
      <a href="#" class="topbar-menu-button" @click="onMenuButtonClick($event)">
        <i class="pi pi-bars"></i>
      </a>

      <a href="#" class="logo">
        <img
          :src="
            '/layout/images/logo-' +
            (colorScheme === 'light' ? 'dark' : 'light') +
            '.png'
          "
        />
      </a>

      <a href="#">
        <img
          :src="
            '/layout/images/appname-' +
            (colorScheme === 'light' ? 'dark' : 'light') +
            '.png'
          "
          class="app-name"
        />
      </a>
    </div>

    <AppMenu
      :model="items"
      :menuMode="menuMode"
      :colorScheme="colorScheme"
      :menuActive="menuActive"
      :activeInlineProfile="activeInlineProfile"
      @sidebar-mouse-over="onSidebarMouseOver"
      @sidebar-mouse-leave="onSidebarMouseLeave"
      @toggle-menu="onToggleMenu"
      @change-inlinemenu="onChangeActiveInlineMenu"
      @menu-click="onMenuClick"
      @root-menuitem-click="onRootMenuItemClick"
      @menuitem-click="onMenuItemClick"
    />

    <div class="layout-topbar-right">
      <ul class="layout-topbar-right-items">
        <li
          id="profile"
          class="profile-item"
          :class="{ 'active-topmenuitem': topbarMenuActive }"
        >
          <a href="#" @click="onTopbarItemClick($event, 'profile')">
            <img src="/layout/images/profile-image.png" class="border-round" />
          </a>

          <ul class="fadeInDown">
            <li role="menuitem">
              <a href="#" @click="onTopbarSubItemClick($event)">
                <i class="pi pi-fw pi-user"></i>
                <span>{{ $t("user.profile") }}</span>
              </a>
            </li>
            <li role="menuitem">
              <a href="#" @click="onTopbarSubItemClick($event)">
                <i class="pi pi-fw pi-cog"></i>
                <span>{{ $t("user.settings") }}</span>
              </a>
            </li>
            <li role="menuitem">
              <a href="#" @click="onTopbarSubItemClick($event)">
                <i class="pi pi-fw pi-sign-out"></i>
                <span>{{ $t("user.logout") }}</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i class="topbar-icon pi pi-fw pi-bell"></i>
            <span class="topbar-badge">2</span>
            <span class="topbar-item-name">Notifications</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="topbar-icon pi pi-fw pi-comment"></i>
            <span class="topbar-badge">5</span>
            <span class="topbar-item-name">Messages</span>
          </a>
        </li>
        <li>
          <i class="topbar-icon pi pi-fw pi-language"></i>
          <ClientOnly>
            <!-- <FloatLabel class="w-full md:w-14rem"> -->
              <Dropdown
                v-model="currentLang"
                editable
                checkmark
                :options="langs"
                optionLabel="name"
                class="flex-auto"
                @change="changeLang"
              />
              <!-- <label for="dd-city">{{ $i18n.t("lang") }}</label>
            </FloatLabel> -->
          </ClientOnly>

          <!-- <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
                    <NuxtLink :to="switchLocalePath('fa')">farsi</NuxtLink>     -->
        </li>
        <li>
          <i class="topbar-icon pi pi-fw pi-moon"></i>
          <InputSwitch v-model="darkMode" @change="changeColorSchema" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $i18n } = useNuxtApp();
import FloatLabel from 'primevue/floatlabel';

const appConfig = useAppStore();

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
// props
interface Props {
  items: [];
  menuMode: string;
  colorScheme: string;
  topbarMenuActive: boolean;
  menuActive: boolean;
  activeInlineProfile: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  topbarMenuActive: false,
  menuActive: false,
  activeInlineProfile: false
});

// emits
const emit = defineEmits([
  "menu-click",
  "menuitem-click",
  "root-menuitem-click",
  "menubutton-click",
  "sidebar-mouse-over",
  "sidebar-mouse-leave",
  "toggle-menu",
  "change-inlinemenu",
  "topbar-item-click",
  "change-direction",
  "change-color-scheme"
]);

const darkMode = ref(true);
const currentLang = ref(appConfig.layout.lang);
const langs = ref(appConfig.params.constants.languages);

// methods
const onMenuClick = (event: any): void => {
  emit("menu-click", event);
};
const onMenuItemClick = (event: any): void => {
  emit("menuitem-click", event);
};
const onRootMenuItemClick = (event: any): void => {
  emit("root-menuitem-click", event);
};
const onMenuButtonClick = (event: any): void => {
  emit("menubutton-click", event);
};
const onTopbarItemClick = (
  event: { preventDefault: () => void },
  item: any
): void => {
  emit("topbar-item-click", event, item);
  event.preventDefault();
};
const onTopbarSubItemClick = (event: { preventDefault: () => void }): void => {
  event.preventDefault();
};
const onSidebarMouseOver = (): void => {
  emit("sidebar-mouse-over");
};
const onSidebarMouseLeave = (): void => {
  emit("sidebar-mouse-leave");
};
const onToggleMenu = (event: any): void => {
  emit("toggle-menu", event);
};
const onChangeActiveInlineMenu = (): void => {
  emit("change-inlinemenu");
};

const changeLang = (event: { value: { code: string; dir: any } }): void => {
  // console.log("on changeLang (APPTopBar)", event.value)

  // change locale
  locale.value = event.value.code;
  // setLocale(event.value.code);//locale.code

  // change direction
  emit("change-direction", event.value.dir);

  navigateTo(switchLocalePath(locale.value)); // current page with locale
};
const changeColorSchema = (): void => {
  // console.log("on changeColorSchema (APPTopBar)", darkMode.value)

  emit("change-color-scheme", darkMode.value ? "dark" : "light");
};
</script>

<style lang="scss">
::v-deep(.p-dropdown-label ) {
    width: 50px !important;
}
.p-dropdown-label {
    width: 55px !important;
    padding: 5px 5px !important;
}
::v-deep(.p-dropdown-item ) {
    width: 100% !important;
    justify-content: space-between !important;
}
.p-dropdown-item {
    width: 100% !important;
    justify-content: space-between !important;
}
</style>
