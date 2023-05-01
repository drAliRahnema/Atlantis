import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Card from "primevue/card";
import Dialog from "primevue/dialog";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import Divider from "primevue/divider";
import Listbox from "primevue/listbox";
import Tooltip from "primevue/tooltip";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; //optional for column grouping
import Row from "primevue/row"; //optional for row
import OverlayPanel from "primevue/overlaypanel";
import SelectButton from "primevue/selectbutton";
import Dropdown from "primevue/dropdown";
import FileUpload from "primevue/fileupload";
import InputMask from "primevue/inputmask";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import ProgressSpinner from "primevue/progressspinner";
import Skeleton from "primevue/skeleton";
import Badge from "primevue/badge";
import BadgeDirective from 'primevue/badgedirective';
import Fieldset from "primevue/fieldset";
import Chip from "primevue/chip";
import Sidebar from "primevue/sidebar";
import InputNumber from "primevue/inputnumber";
import Checkbox from "primevue/checkbox";
import ScrollPanel from "primevue/scrollpanel";
import Chart from "primevue/chart";
import ConfirmPopup from "primevue/confirmpopup";
import ConfirmationService from "primevue/confirmationservice";
import InputSwitch from "primevue/inputswitch";
import ContextMenu from "primevue/contextmenu";
import MultiSelect from "primevue/multiselect";
import Tree from "primevue/tree";
import TreeTable from "primevue/treetable";
import Toolbar from "primevue/toolbar";
import Knob from "primevue/knob";
import ToggleButton from "primevue/togglebutton";
import ProgressBar from "primevue/progressbar";
import Slider from "primevue/slider";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Password from "primevue/password";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Ripple from "primevue/ripple";

import Terminal from "primevue/terminal";
import TerminalService from "primevue/terminalservice";
import Panel from "primevue/panel";
import RadioButton from "primevue/radiobutton";
import Menubar from "primevue/menubar";
import Dock from "primevue/dock";
import Galleria from "primevue/galleria";

// import locale from "../content/const";
import en from '../locales/en_US'
import fa from '../locales/fa_IR'

// import { useAppStore } from "@/stores/app";
// const appConfig = useAppStore();



export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {
    ripple: true, //appConfig.layout.ripple,
    inputStyle: "filled",
    zIndex: {
      modal: 1100, //dialog, sidebar
      overlay: 1000, //dropdown, overlaypanel
      menu: 1000, //overlay menus
      tooltip: 1100, //tooltip
    },
    locale: nuxtApp.vueApp.$nuxt.$i18n.locale == "en" ? en.primeVue: fa.primeVue,// locale
  });
  nuxtApp.vueApp.directive("ripple", Ripple);
  nuxtApp.vueApp.directive("tooltip", Tooltip);
  nuxtApp.vueApp.directive('badge', BadgeDirective);
  nuxtApp.vueApp.use(ToastService);
  nuxtApp.vueApp.use(ConfirmationService);
  nuxtApp.vueApp.component("Splitter", Splitter);
  nuxtApp.vueApp.component("SplitterPanel", SplitterPanel);
  nuxtApp.vueApp.component("Card", Card);
  nuxtApp.vueApp.component("Divider", Divider);
  nuxtApp.vueApp.component("Listbox", Listbox);
  nuxtApp.vueApp.component("DataTable", DataTable);
  nuxtApp.vueApp.component("Column", Column);
  nuxtApp.vueApp.component("ColumnGroup", ColumnGroup);
  nuxtApp.vueApp.component("Row", Row);
  nuxtApp.vueApp.component("OverlayPanel", OverlayPanel);
  nuxtApp.vueApp.component("SelectButton", SelectButton);
  nuxtApp.vueApp.component("Dropdown", Dropdown);
  nuxtApp.vueApp.component("Toast", Toast);
  nuxtApp.vueApp.component("ToastService", ToastService);
  nuxtApp.vueApp.component("FileUpload", FileUpload);
  nuxtApp.vueApp.component("InputMask", InputMask);
  nuxtApp.vueApp.component("TabView", TabView);
  nuxtApp.vueApp.component("TabPanel", TabPanel);
  nuxtApp.vueApp.component("ProgressSpinner", ProgressSpinner);
  nuxtApp.vueApp.component("Skeleton", Skeleton);
  nuxtApp.vueApp.component("Badge", Badge);
  nuxtApp.vueApp.component("Fieldset", Fieldset);
  nuxtApp.vueApp.component("Chip", Chip);
  nuxtApp.vueApp.component("Sidebar", Sidebar);
  nuxtApp.vueApp.component("InputNumber", InputNumber);
  nuxtApp.vueApp.component("Checkbox", Checkbox);
  nuxtApp.vueApp.component("ScrollPanel", ScrollPanel);
  nuxtApp.vueApp.component("Chart", Chart);
  nuxtApp.vueApp.component("ConfirmPopup", ConfirmPopup);
  nuxtApp.vueApp.component("InputSwitch", InputSwitch);
  nuxtApp.vueApp.component("ContextMenu", ContextMenu);
  nuxtApp.vueApp.component("MultiSelect", MultiSelect);
  nuxtApp.vueApp.component("TreeTable", TreeTable);
  nuxtApp.vueApp.component("Toolbar", Toolbar);
  nuxtApp.vueApp.component("Knob", Knob);
  nuxtApp.vueApp.component("ToggleButton", ToggleButton);
  nuxtApp.vueApp.component("ProgressBar", ProgressBar);
  nuxtApp.vueApp.component("Slider", Slider);
  nuxtApp.vueApp.component("Accordion", Accordion);
  nuxtApp.vueApp.component("AccordionTab", AccordionTab);
  nuxtApp.vueApp.component("Password", Password);

  nuxtApp.vueApp.component("Panel", Panel);
  nuxtApp.vueApp.component("Terminal", Terminal);
  nuxtApp.vueApp.component("RadioButton", RadioButton);
  nuxtApp.vueApp.component("Dialog", Dialog);
  nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("Dock", Dock);
  nuxtApp.vueApp.component("Tree", Tree);
  nuxtApp.vueApp.component("Menubar", Menubar);
  nuxtApp.vueApp.component("Galleria", Galleria);
});
