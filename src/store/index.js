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
        token: "",
        nightMode: false,
        paraFontSize: "medium"
    },
    getters: {
        getToken: state => state.token,
        getAvatar: state => state.currentUser.avatar,
        getUserName: state => state.currentUser.userName,
        isLogin: state => state.token !== "",
        nightMode: state => state.nightMode,
        paraFontSize: state => state.paraFontSize
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
        },
        changeNightMode(state) {
            state.nightMode = !state.nightMode;
        },
        changeFontSize(state, size) {
            state.paraFontSize = size;
        },
        setAvatar(state, avatar) {
            state.currentUser.avatar = avatar;
        },
        setUserName(state, userName) {
            state.currentUser.userName = userName;
        }
    },
    actions: {},
    modules: {}
});
