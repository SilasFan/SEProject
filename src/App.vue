<template>
    <div id="app" class="h-full w-full flex flex-col overflow-hidden bg-white">
        <Nav />
        <div class="overflow-scroll h-full overflow-x-hidden">
            <router-view />
        </div>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import { Notify } from "vant";

export default {
    name: "app",
    components: {
        Nav
    },
    computed: {
        nightMode() {
            return this.$store.getters.nightMode;
        }
    },
    watch: {
        nightMode: function(old) {
            const app = document.getElementById("app");
            if (old) {
                app.classList.add(["night"]);
                Notify({ type: "primary", message: "进入夜间模式" });
            } else {
                app.classList.remove(["night"]);
                Notify({ type: "primary", message: "退出夜间模式" });
            }
        }
    },
    beforeMount() {
        const state = localStorage.getItem("state");
        this.$store.state = JSON.parse(state);
    },
    beforeDestroy() {
        localStorage.setItem("state", JSON.stringify(this.$store.state));
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

.night {
    filter: brightness(0.6);
}
</style>
