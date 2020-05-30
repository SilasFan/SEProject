import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        name: "news",
        path: "/news/:id",
        component: () => import("@/views/News.vue")
    },
    {
        path: "/news/:id/comment",
        component: () => import("@/views/NewsComment.vue")
    },
    {
        path: "/news/:id/comment/:cid",
        name: "reply",
        component: () => import("@/views/CommentReplies.vue")
    },
    {
        path: "/center",
        component: () => import("@/views/UserCenter.vue")
    },
    {
        path: "/login",
        component: () => import("@/views/LoginOrRegister.vue")
    },
    {
        path: "/mycomment",
        component: () => import("@/views/MyComment.vue")
    },
    {
        path: "/myfavorite",
        component: () => import("@/views/MyFavorite.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
