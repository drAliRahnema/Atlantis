<template>
    <div class="">
      <NuxtLayout :name="layout">
        <div class="exception-body error">
          <div class="exception-panel">
            <h1>ERROR</h1>
            <h2>😱 something's went wrong 😱</h2>
            <span>{{ error?.message }}</span>

            <!-- <router-link to="/">
          <Button type="button" label="Go back to home"></Button>
        </router-link> -->
            <br />
            <Button @click="handleError">Clear error</Button>
            <br />
            <NuxtLink to="/"> Navigate home </NuxtLink>
          </div>
          <div class="exception-footer">
            <img :src="'/layout/images/logo-' + color + '.png'" class="exception-logo" />
            <img :src="'/layout/images/appname-' + color + '.png'" class="exception-appname" />
          </div>
        </div>
      </NuxtLayout>


      <!-- <Toast /> -->
    </div>
</template>

<script setup lang="ts">
import './App.scss';

import { useAppStore } from "@/stores/app";
const appConfig = useAppStore();
const config = useAppConfig();

const error = useError();

// defineProps({
//   error: Object,
// });

// useHead({
//   title: config.Title,
//   // or, instead:
//   // titleTemplate: (title) => `My App - ${title}`,
//   viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
//   charset: 'utf-8',
//   meta: [
//     { name: 'description', content: 'EaZy Network Attack Framework' },
//     { name: 'viewport', content: 'width=device-width,initial-scale=1' },
//     { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
//   ],
//   bodyAttrs: {
//     class: config.Title
//   },
//   script: [
//     // {
//     //   src: 'https://third-party-script.com',
//     //   body: true
//     // }
//   ],
//   link: [
//     { rel: 'icon', type: 'image/x-icon', href: './assets/favicon.ico' },
//     { rel: 'stylesheet', href: './assets/theme/blue/theme-' + appConfig.layout.colorScheme + '-' + appConfig.layout.direction + '.css', type: "text/css", id: 'theme-css' },
//     { rel: 'stylesheet', href: './assets/layout/css/blue/layout-' + appConfig.layout.colorScheme + '-' + appConfig.layout.direction + '.css', type: "text/css", id: 'layout-css' },
//   ]
// })

// // You might choose this based on an API call or logged-in status
const layout = "main";
// // function enableCustomLayout() {
// //   setPageLayout("custom");
// // }
// // definePageMeta({
// //   layout: false,
// // });


const handleError = () => clearError({ redirect: "/" });

const color = computed(() => {
  if (appConfig.layout.colorScheme === "light") return "dark";
  return "light";
});
</script>

<style scoped></style>
