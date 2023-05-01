
<script setup lang="ts">
    import { useAppStore } from '@/stores/app'

    const appConfig = useAppStore()

	const color = ()=> {
		if (appConfig.layout.colorScheme === 'light') return 'dark';
		return 'light';
	}
</script>

<template>
	<div class="exception-body notfound">
		<div class="exception-panel">
			<h1>404</h1>
			<h3>not found</h3>
			<p>The page that you are looking for does not exist</p>
			<router-link to="/">
				<Button type="button" label="Go back to home"></Button>
			</router-link>
		</div>
		<div class="exception-footer">
			<img :src="'layout/images/logo-'+ color + '.png'" class="exception-logo"/>
			<img :src="'layout/images/appname-'+ color + '.png'" class="exception-appname"/>
		</div>
	</div>
</template>



<style scoped>

</style>
