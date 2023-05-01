<template>
  <div id="layout-config">
    <a
      id="layout-config-button"
      class="layout-config-button"
      @click="onConfigButtonClick($event)"
    >
      <i class="pi pi-cog"></i>
    </a>
    <div
      class="layout-config"
      :class="{ 'layout-config-active': configActive }"
      @click="onConfigClick"
    >
      <h5>Menu Type</h5>
      <div class="field-radiobutton">
        <RadioButton
          name="menuMode"
          value="static"
          v-model="d_menuMode"
          id="mode1"
          @change="changeMenuMode('static')"
        ></RadioButton>
        <label for="mode1">Static</label>
      </div>
      <div class="field-radiobutton">
        <RadioButton
          name="menuMode"
          value="overlay"
          v-model="d_menuMode"
          id="mode2"
          @change="changeMenuMode('overlay')"
        ></RadioButton>
        <label for="mode2">Overlay</label>
      </div>
      <div class="field-radiobutton">
        <RadioButton
          name="menuMode"
          value="slim"
          v-model="d_menuMode"
          id="mode3"
          @change="changeMenuMode('slim')"
        ></RadioButton>
        <label for="mode3">Slim</label>
      </div>
      <div class="field-radiobutton">
        <RadioButton
          name="menuMode"
          value="horizontal"
          v-model="d_menuMode"
          id="mode4"
          @change="changeMenuMode('horizontal')"
        ></RadioButton>
        <label for="mode4">Horizontal</label>
      </div>
      <div class="field-radiobutton">
        <RadioButton
          name="menuMode"
          value="sidebar"
          v-model="d_menuMode"
          id="mode5"
          @change="changeMenuMode('sidebar')"
        ></RadioButton>
        <label for="mode5">Sidebar</label>
      </div>
      <hr />
      <h5>Direction</h5>
      <div class="field-radiobutton">
        <RadioButton
          name="dir"
          value="rtl"
          v-model="d_dir"
          id="theme1"
          @change="changeDirection('rtl')"
        ></RadioButton>
        <label for="theme1">RTL</label>
        <RadioButton
          name="dir"
          value="ltr"
          v-model="d_dir"
          id="theme2"
          @change="changeDirection('ltr')"
        ></RadioButton>
        <label for="theme2">LTR</label>
      </div>

      <hr />
      <h5>Color Scheme</h5>
      <div class="field-radiobutton">
        <RadioButton
          name="colorScheme"
          value="light"
          v-model="appConfig.layout.colorScheme"
          id="theme1"
          @change="changeColorScheme('light')"
        ></RadioButton>
        <label for="theme1">Light</label>
        <RadioButton
          name="colorScheme"
          value="dark"
          v-model="appConfig.layout.colorScheme"
          id="theme2"
          @change="changeColorScheme('dark')"
        ></RadioButton>
        <label for="theme2">Dark</label>
      </div>

      <hr />

      <h5>Ripple Effect</h5>
      <InputSwitch
        :modelValue="rippleActive"
        @update:modelValue="onRippleChange"
      />
      <hr />

      <h5>Layouts</h5>
      <div class="layout-themes">
        <div v-for="t in themes" :key="t.name">
          <a
            style="cursor: pointer"
            @click="changeTheme(t.name)"
            :title="t.name"
            :style="{ 'background-color': t.color }"
          >
            <i class="pi pi-check" v-if="theme === t.name"></i>
          </a>
        </div>
      </div>
      <hr />

      <h5>Themes</h5>
      <div class="layout-themes">
        <div v-for="theme in componentThemes" :key="theme.name">
          <a
            style="cursor: pointer"
            @click="changeComponentTheme(theme.name)"
            :title="theme.name"
            :style="{ 'background-color': theme.color }"
          >
            <i class="pi pi-check" v-if="componentTheme === theme.name"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { useAppStore } from "@/stores/app";
const appConfig = useAppStore();

const emit = defineEmits([
  "config-button-click",
  "config-click",
  "change-color-scheme",
  "change-direction",
  "change-menu-theme",
  "change-component-theme",
  "change-menu-mode",
]);

// props
interface Props {
  configActive?: boolean | null,
  configClick?: boolean | null,
  colorScheme?: string,
  dir?: string,
  theme?: string,
  componentTheme?: string,
  menuMode?: string,
}


const props = withDefaults(defineProps<Props>(), {
  configActive: null,
  configClick: null
});

// vars

const themes = ref([
  { name: "blue", color: "#0F8BFD" },
  // { name: "green", color: "#0BD18A" },
  // { name: "magenta", color: "#EC4DBC" },
  // { name: "orange", color: "#FD9214" },
  // { name: "purple", color: "#873EFE" },
  // { name: "red", color: "#FC6161" },
  // { name: "teal", color: "#00D0DE" },
  // { name: "yellow", color: "#EEE500" },
]);

const componentThemes = ref([
  { name: "blue", color: "#0F8BFD" },
  // { name: "green", color: "#0BD18A" },
  // { name: "magenta", color: "#EC4DBC" },
  // { name: "orange", color: "#FD9214" },
  // { name: "purple", color: "#873EFE" },
  // { name: "red", color: "#FC6161" },
  // { name: "teal", color: "#00D0DE" },
  // { name: "yellow", color: "#EEE500" },
]);

const d_colorScheme = ref(appConfig.layout.colorScheme);
const d_dir = ref(appConfig.layout.direction);
const d_menuMode = ref(appConfig.layout.menuMode);

const rippleActive = computed(() => {
  return appConfig.layout.ripple;
});


// methods

const changeTheme = (theme: any): void => {
  // console.log(theme);
  emit("change-menu-theme", theme);
};
const changeComponentTheme = (theme: any): void => {
  emit("change-component-theme", theme);
};
const changeColorScheme = (scheme: any): void => {
  emit("change-color-scheme", scheme);
};
const changeDirection = (dir: any): void => {
  emit("change-direction", dir);
};
const onConfigButtonClick = (event: { preventDefault: () => void; }): void => {
  emit("config-button-click", event);
  event.preventDefault();
};
const onConfigClick = (event: any): void => {
  emit("config-click", event);
};
const changeMenuMode = (mode: any): void => {
  emit("change-menu-mode", mode);
};
const onRippleChange = (value: boolean): void => {
  appConfig.changeRipple(value);
};

// computed

// vue

</script>
