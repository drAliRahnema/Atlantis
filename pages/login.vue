<script setup lang="ts">
    import { useAppStore } from '@/stores/app'

    const appConfig = useAppStore();
    const config = useAppConfig();

    // const email = ref<String>('');
    // const password= ref<String>('');

	const color = ()=> {
		if (appConfig.layout.colorScheme === 'light') return 'dark';
		return 'light';
    }
	const loginColor = ()=> {
		if (appConfig.layout.colorScheme === 'light') return 'ondark';
		return 'onlight';
	}
</script>

<template>
    <div class="login-body">
        <div class="login-image">
            <img :src="'/layout/images/pages/login-'+ loginColor + '.png'" :alt="config.Title">
        </div>
        <div class="login-panel p-fluid">
            <div class="flex flex-column">
                <div class="flex align-items-center mb-6 logo-container">
                    <img :src="'/layout/images/logo-'+ color + '.png'" class="login-logo"/>
                    <img :src="'/layout/images/appname-'+ color + '.png'" class="login-appname"/>
                </div>
                <div class="form-container">
                    <span class="p-input-icon-left">
                        <i class="pi pi-envelope"></i>
                        <InputText value="email" type="text" placeholder="Email" />
                    </span>
                    <span class="p-input-icon-left">
                        <i class="pi pi-key"></i>
                        <InputText value="password" type="password" placeholder="Password" />
                    </span>
                    <a href="#" class="flex">Forgot your password?</a>
                </div>
                <div class="button-container">
                    <router-link to="/">
                        <Button type="button" label="Login"></Button>
                    </router-link>
                    <span>Don’t have an account?<a>Sign-up here</a></span>
                </div>
            </div>

            <div class="login-footer flex align-items-center">
                <div class="flex align-items-center login-footer-logo-container">
                    <img src="/layout/images/logo-gray.png" class="login-footer-logo"/>
                    <img src="/layout/images/appname-gray.png" class="login-footer-appname"/>
                </div>
                <span>Copyright 2021</span>
            </div>
        </div>
    </div>
</template>