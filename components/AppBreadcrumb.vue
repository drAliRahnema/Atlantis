<template>
	<div class="layout-breadcrumb-container">
		<div class="layout-breadcrumb-left-items">
			<a href="#" class="menu-button" @click="onMenuButtonClick($event)" v-if="isStatic()">
				<i class="pi pi-bars"></i>
			</a>

			<!-- <Breadcrumb :model="items" class="layout-breadcrumb"></Breadcrumb> -->
		</div>
		<div class="layout-breadcrumb-right-items">
			<a tabindex="0" class="search-icon" @click="breadcrumbClick">
				<i class="pi pi-search"></i>
			</a>

			<div class="search-wrapper" :class="{ 'active-search-wrapper': searchActive }">
				<span class="p-input-icon-left">
					<i class="pi pi-search"></i>
					<InputText placeholder="Search..." v-model="search" @click="inputClick" />
				</span>
			</div>

			<span class="layout-rightmenu-button-desktop">
				<Button label="Today" icon="pi pi-bookmark" class="layout-rightmenu-button"
					@click="onRightMenuButtonClick()"></Button>
			</span>

			<span class="layout-rightmenu-button-mobile">
				<Button icon="pi pi-bookmark" class="layout-rightmenu-button" @click="onRightMenuButtonClick()"></Button>
			</span>
		</div>
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
	menuMode?: string,
	searchActive: boolean,
	searchClick: boolean
}


const props = withDefaults(defineProps<Props>(), {
	searchActive: false,
	searchClick: false
});


// emits
const emit = defineEmits(['menubutton-click', 'rightmenu-button-click',
	'update:searchActive', 'update:searchClick'])

// vars
const items = ref<any[]>([]);
const search = ref<string>('');

// methods
const watchRouter = (): void => {
	if (router.currentRoute.value.meta.breadcrumb) {
		items.value = [];
		const bc = router.currentRoute.value.meta.breadcrumb;
		for (let pro in bc) {
			items.value.push({ label: bc[pro] });
		}
	}
}
const onMenuButtonClick = (event: any): void => {
	emit('menubutton-click', event);
}
const onRightMenuButtonClick = (): void {
	emit('rightmenu-button-click');
}
const inputClick = (): void {
	emit('update:searchClick', true);
}
const breadcrumbClick = (): void {
	emit('update:searchActive', true);
	emit('update:searchClick', true);
}
const isStatic = (): boolean {
	return props.menuMode === 'static';
}

// computed

// vue
onMounted(() => {
	watchRouter();
});
// Watch for changes to the route object
watch(
	() => route,
	(to, from) => {
		// console.log('Route changed from', from.fullPath, 'to', to.fullPath)
		// Do something else, like update data based on the route change
		watchRouter();
	}
)
</script>


<style scoped>
::v-deep(.p-breadcrumb > ul > li.p-breadcrumb-chevron:first-of-type) {
	display: none;
}
</style>