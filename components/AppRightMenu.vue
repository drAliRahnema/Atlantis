<template>
	<div class="layout-rightmenu" :class="{ 'layout-rightmenu-active': rightMenuActive }" @click="onRightMenuClick($event)">
		<a href="#" @click="onChangeRightMenuActive" class="layout-rightmenu-close">
			<i class="pi pi-times"></i>
		</a>
		<div class="user-detail-wrapper">
			<div class="user-detail-content">
				<img src="/layout/images/dashboard/gene.png" :alt="`${config.Title}`" class="user-image">
				<span class="user-name">Gene Russell</span>
				<span class="user-number">(406) 555-0120</span>
			</div>
			<div class="user-tasks">
				<div class="user-tasks-item in-progress">
					<a class="task-number">23</a>
					<span class="task-name">Progress</span>
				</div>
				<div class="user-tasks-item">
					<a class="task-number">6</a>
					<span class="task-name">Overdue</span>
				</div>
				<div class="user-tasks-item">
					<a class="task-number">38</a>
					<span class="task-name">All deals</span>
				</div>
			</div>
		</div>
		<div>
			<!-- <Calendar v-model="date" :inline="true"></Calendar> -->
		</div>
		<div class="daily-plan-wrapper">
			<span class="today-date">14 Sunday, Jun 2020</span>
			<ul>
				<li>
					<span class="event-time">1:00 PM - 2:00 PM</span>
					<span class="event-topic">Meeting with Alfredo Rhiel Madsen</span>
				</li>
				<li>
					<span class="event-time">2:00 PM - 3:00 PM</span>
					<span class="event-topic">Team Sync</span>
				</li>
				<li>
					<span class="event-time">5:00 PM - 6:00 PM</span>
					<span class="event-topic">Team Sync</span>
				</li>
				<li>
					<span class="event-time">7:00 PM - 7:30 PM</span>
					<span class="event-topic">Meeting with Engineering managers</span>
				</li>
			</ul>
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
	rightMenuActive: boolean
}


const props = withDefaults(defineProps<Props>(), {
	rightMenuActive: false
});


// emits
const emit = defineEmits(['rightmenu-active', 'rightmenu-click'])

// vars
const date = ref<any>(null)

// methods
const onChangeRightMenuActive = (): void => {
	emit('rightmenu-active', false);
}
const onRightMenuClick = (): void => {
	emit('rightmenu-click');
}

// computed

// vue

</script>