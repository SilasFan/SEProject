import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentUser: {
            uid: "",
            userName: "",
            avatar: ""
        },
        token: ""
    },
    getters: {
        getToken: state => state.token,
        getAvatar: state => state.currentUser.avatar,
        getUserName: state => state.currentUser.userName,
        isLogin: state => state.token !== ""
    },
    mutations: {
        setToken(state, newToken) {
            state.token = newToken;
        },
        setUser(state, user) {
            state.currentUser = user;
        },
        logout(state) {
            // 待实现请求退出登录
            state.token = "";
            state.currentUser = {
                uid: "",
                userName: "",
                avatar: ""
            };
        }
    },
    actions: {},
    modules: {}
});
