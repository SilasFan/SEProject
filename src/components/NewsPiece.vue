<template>
    <div class="text-left" @click="routeToNews">
        <p class="pl-8 font-bold text-xl">{{ news.title }}</p>
        <p class="pl-8 font-serif">{{ news.author }}</p>
        <van-divider />
    </div>
</template>

<script>
export default {
    name: "NewsPiece",
    props: {
        news: {
            type: Object,
            default: function() {
                return {
                    title: "",
                    author: "",
                    id: 0
                };
            }
        }
    },
    methods: {
        routeToNews() {
            this.$router.push({ path: `/news/${this.news.id}` });
        }
    }
};
</script>
