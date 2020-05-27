<template>
    <div>
        <van-nav-bar title="APPNAME" :left-arrow="!isHome" @click-left="goBack">
            <template #left v-if="isHome">
                <van-icon name="setting" size="18" />
            </template>
            <template #right v-if="isHome">
                <van-icon :name="rightIcon" size="18" @click="gotoUserCenter" />
            </template>
        </van-nav-bar>
    </div>
</template>

<script>
export default {
    name: "Nav",
    computed: {
        isHome() {
            return this.$route.name == "Home";
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
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        gotoUserCenter() {
            this.$router.push({ path: "/center" });
        }
    }
};
</script>

<style></style>
