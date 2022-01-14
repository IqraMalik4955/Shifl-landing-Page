<template>
    <v-app class="v-app-main-wrapper" id="inspire" v-resize="onResize">
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
	name: "App"
};

</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
