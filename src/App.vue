<template>
    <a-locale-provider :locale="zh_CN">
        <div id="app">
            <img src="./assets/logo.png" />
            <HelloWorld msg="Welcome to Your Vue.js App" />
        </div>
    </a-locale-provider>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
    name: "app",
    components: {
        HelloWorld
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0px;
    padding: 0px;
}

html {
    margin: 0px;
    padding: 0px;
}
</style>
