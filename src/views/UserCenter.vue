<template>
    <div class="w-full h-full flex flex-col bg-gray-100 text-left">
        <van-cell :title="userTitle" is-link class="mt-8" @click="login">
            <template #icon>
                <van-icon :name="userAvatar" size="26px" class="rounded mr-2" />
            </template>
        </van-cell>

        <van-cell
            title="我的评论"
            is-link
            class="mt-8"
            icon="chat-o"
            to="/mycomment"
        />
        <van-cell title="我的点赞" is-link icon="like-o" />
        <van-cell title="我的收藏" is-link icon="star-o" to="/myfavorite" />

        <van-cell title="使用报告" is-link class="mt-8" icon="newspaper-o" />

        <van-button
            type="danger"
            block
            class="mt-10"
            @click="logout"
            v-if="isLogin"
        >
            退出登录
        </van-button>
    </div>
</template>

<script>
import { Notify } from "vant";
export default {
    name: "UserCenter",
    methods: {
        login() {
            if (!this.isLogin) {
                this.$router.push({ path: "login" });
            } else {
                this.$router.push({ path: "reviseinfo" });
            }
        },
        logout() {
            this.$store.commit("logout");
            Notify({ type: "success", message: "成功退出!" });
        }
    },
    computed: {
        userTitle() {
            if (this.isLogin) {
                return this.$store.getters.getUserName;
            } else {
                return "未登录";
            }
        },
        userAvatar() {
            if (this.isLogin) {
                return this.$store.getters.getAvatar;
            } else {
                return "/favicon.ico";
            }
        },
        isLogin() {
            return this.$store.getters.isLogin;
        }
    }
};
</script>
