<template>
	<div class="layout-footer">
        <div class="footer-logo-container">
            <img id="footer-logo" :src="'layout/images/logo-'+ (colorScheme === 'light' ? 'dark' : 'light') + '.png'" :alt="`${config.Title}`"/>
            <span class="app-name">{{config.Title}}</span>
        </div>
        <span class="copyright">&#169; {{ config.Title }} - {{ appConfig.app.version }}</span>
    </div>
</template>

<script setup lang="ts">

import { useAppStore } from "@/stores/app";
const appConfig = useAppStore();
const config = useAppConfig();

// props
interface Props {
    colorScheme?: string
}


const props = withDefaults(defineProps<Props>(), {
});

// emits
const emit = defineEmits([])

// vars

// methods

// computed

// vue

</script>

