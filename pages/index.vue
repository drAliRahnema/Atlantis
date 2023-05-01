<script setup lang="ts">
import { useToast } from "primevue/usetoast";
import { useAppStore } from '@/stores/app'

const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const text = ref();
const toast = useToast();
const greet = () => {
  toast.add({ severity: "info", summary: "Hello " + text.value });
};

const appConfig = useAppStore()

</script>
<template>
  
  <div class="container">
    <!-- <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
    <NuxtLink :to="switchLocalePath('fa')">fa</NuxtLink> -->
    <div>
      <p>{{ $t('welcome') }}</p>
    </div>

    <div>
      <img alt="Vue logo" src="../assets/img/primevue-logo.png" />


      <div>
        <form @submit.prevent="greet">
          <InputText type="text" v-model="text" />
          <Button type="submit" label="Submit" />
        </form>
      </div>

      <div class="">
        <!-- {{appConfig.count}} -->
      </div>
    </div>
  </div>
</template>
