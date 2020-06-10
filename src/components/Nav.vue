<template>
    <div>
        <van-nav-bar title="APPNAME">
            <template #left>
                <van-icon
                    v-if="isHome"
                    name="setting"
                    size="18"
                    @click="gotoSettings"
                />
                <van-icon
                    v-if="!isHome"
                    name="arrow-left"
                    size="18"
                    @click="goBack"
                />
            </template>
            <template #right>
                <van-icon
                    :name="rightIcon"
                    size="18"
                    @click="gotoUserCenter"
                    v-if="isHome"
                />
                <van-icon
                    name="star-o"
                    size="18"
                    @click="favoriteNews"
                    v-if="isNews"
                />
            </template>
        </van-nav-bar>
    </div>
</template>

<script>
import api from "api/";
import { Toast } from "vant";

export default {
    name: "Nav",
    computed: {
        isHome() {
            return this.$route.name === "Home";
        },
        isLogin() {
            return this.$store.getters.isLogin;
        },
        rightIcon() {
            if (this.isLogin) {
                return this.$store.getters.getAvatar;
            } else {
                return "manager";
            }
        },

        isNews() {
            return this.$route.name === "news";
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        gotoUserCenter() {
            this.$router.push({ path: "/center" });
        },
        gotoSettings() {
            this.$router.push({ path: "/settings" });
        },
        favoriteNews() {
            api.favoriteNews(
                this.$route.params.id,
                this.$store.getters.getToken
            ).then(res => {
                if (!res.code) {
                    Toast("收藏成功！");
                } else {
                    Toast("网络错误！");
                }
            });
        }
    }
};
</script>

<style></style>
