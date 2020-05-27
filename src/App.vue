<template>
    <div id="app" class="h-full w-full flex flex-col overflow-hidden">
        <Nav />
        <div class="overflow-scroll h-full overflow-x-hidden">
            <router-view />
        </div>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
    name: "app",
    components: {
        Nav
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
    padding: 0px;
    max-width: 767px;
}

html,
body {
    margin: 0px auto 0px auto;
    padding: 0px;
    width: 100%;
    height: 100%;
    max-width: 767px;
}
</style>
