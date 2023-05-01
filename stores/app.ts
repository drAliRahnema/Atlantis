import constants from '~/content/const'
export const useAppStore = defineStore("app", () => {
  // vars
  const layout = reactive({
    lang: 'English',//constants.languages.find(item=>item.code == 'en'),
    theme: "blue",
    colorScheme: "dark",
    direction: "ltr",
    
    componentTheme: "blue",
    topbarTheme: "blue",
    menuMode: "overlay",//"sidebar",//"horizontal",//"static",//"slim",//"overlay",
    ripple: true,
  });
  const loading = reactive({
    app: true,
    file: false,
  });

  const app = reactive<any>({
    // title: "AppName",
    // version: "1"
  });
  const params = reactive({
    displayDialog: false,
    constants,
  });
  const count = ref(0);

  // methods
  const changeDirection = (dir: string) => {
    layout.direction = dir;
  };
  const changeColorScheme = (scheme: string) => {
    layout.colorScheme = scheme;
  };
  const changeMenuMode = (menuMode: string) => {
    layout.menuMode = menuMode;
  };
  const changeRipple = (value: boolean) => {
    layout.ripple = value;
  };
  const changeMenuTheme = (theme: string) => {
    layout.theme = theme;
  };
  const changeComponentTheme = (theme: string) => {
    layout.componentTheme = theme;
  };

  // # dialogs
  // ## module
  const openDialog = () => {
    params.displayDialog = true;
  };
  const closeDialog = () => {
    params.displayDialog = false;
  };

  // helper functions

  return {
    layout,
    loading,
    app,
    params,
    count,

    changeDirection,
    changeColorScheme,
    changeMenuTheme,
    changeComponentTheme,
    changeMenuMode,
    changeRipple,
    openDialog,
    closeDialog,
  };
});
