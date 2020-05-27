import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "@vant/touch-emulator";
import {
    NavBar,
    Icon,
    Tab,
    Tabs,
    Skeleton,
    List,
    PullRefresh,
    Divider,
    ImagePreview,
    Toast
} from "vant";

Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Tabs);
Vue.use(Tab);
Vue.use(Skeleton);
Vue.use(List);
Vue.use(PullRefresh);
Vue.use(Divider);
Vue.use(ImagePreview);
Vue.use(Toast);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
