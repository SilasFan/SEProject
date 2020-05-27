<template>
    <div>
        <van-nav-bar title="APPNAME" :left-arrow="!isHome" @click-left="goBack">
            <template #left v-if="isHome">
                <van-icon name="setting" size="18" />
            </template>
            <template #right v-if="isHome">
                <van-icon name="manager" size="18" />
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
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
};
</script>

<style></style>
