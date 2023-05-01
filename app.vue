<template>
  <div class="">
    <!-- <AppLoader/> -->

    <NuxtLayout :name="layout">
      <NuxtErrorBoundary>
        <NuxtPage />
        <template #error="{error}">
        <div class="text-center">
          <p>
            Oh no, something broke!
          </p>
          <code>{{ error }}</code>
          <Button @click="resetError(error)">Reset</Button>
        </div>
        </template>
      </NuxtErrorBoundary>

    </NuxtLayout>


    <Toast />
  </div>
</template>

<script setup lang="ts">
// import "primeflex/primeflex.css";
import './App.scss';

import { useAppStore } from "@/stores/app";
import error from './plugins/error';
const route = useRoute();
const appState = useAppStore();

// You might choose this based on an API call or logged-in status
const layout = ref<any>(route.name != "report" ? "main" : false);
// function enableCustomLayout() {
//   setPageLayout("custom");
// }

// definePageMeta({
//   layout: layout.value,
//   // pageTransition: false
//   // layoutTransition: false
//   pageTransition: {
//     // name: 'rotate'
//     // name: 'slide-in'
//     name: "bounce",
//     mode: "out-in", // default
//     onBeforeEnter: (el) => {
//       console.log("Before enter...");
//     },
//     onEnter: (el, done) => {},
//     onAfterEnter: (el) => {},
//     // middleware (to, from) {
//     //   to.meta.pageTransition.name = +to.params.id > +from.params.id ? 'slide-left' : 'slide-right'
//     // }
//   },
// });

const resetError = async(error: { value: null; }) =>{
  // await navigateTo("/");
  // error.value = null;

  throw createError({
    // statusCode: 500,
    fatal: true,
    message: `FatalError: ${error}`
  })
}

// Watch for changes to the route object
watch(
	() => route,
	(to, from) => {
		// console.log('Route changed from', from.fullPath, 'to', to.fullPath)
    
		// Do something else, like update data based on the route change
    // ...
	}
)

watch(appState.app, () => {
  // console.warn("===========================");
  console.info({ ...appState.app });
  // console.error("===========================");
});

</script>

<style lang="scss"></style>
