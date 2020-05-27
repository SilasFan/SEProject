<template>
    <div class="home w-full h-full">
        <van-tabs v-model="active" swipeable>
            <van-tab title="推荐">
                <NewsContainer newsCategory="recommand" />
            </van-tab>
            <van-tab title="体育">
                <NewsContainer newsCategory="sports" />
            </van-tab>
            <van-tab title="数码">
                <NewsContainer newsCategory="digit" />
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import NewsContainer from "@/components/NewsContainer.vue";

export default {
    name: "Home",
    components: {
        NewsContainer
    },
    data() {
        return {
            active: 0
        };
    }
};
</script>

<style>
.van-tabs {
    width: 100%;
    height: 100%;
}

.van-tabs__content {
    height: calc(100% - 44px);
}

.home {
    height: calc(100% - 46px);
}
</style>
