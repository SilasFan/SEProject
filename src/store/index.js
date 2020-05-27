import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentUser: {
            uid: "",
            nickName: "",
            avater: ""
        },
        currentNewsTitle: ""
    },
    getters: {
        navTitle: state => {
            if (state.currentNewsTitle.length > 10) {
                return state.currentNewsTitle.slice(0, 9);
            }
            return state.currentNewsTitle;
        }
    },
    mutations: {
        setNewsTitle(state, title) {
            state.currentNewsTitle = title;
        }
    },
    actions: {},
    modules: {}
});
