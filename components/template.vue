<template>
    <div>
        
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