<template>
    <div class="w-full h-full flex flex-col">
        <br />
        <NewsPiece v-for="news in newsList" :news="news" :key="news.id" />
    </div>
</template>

<script>
import NewsPiece from "@/components/NewsPiece.vue";
import api from "api/";
import { Toast } from "vant";

export default {
    name: "MyFavorite",
    components: {
        NewsPiece
    },
    data() {
        return {
            newsList: []
        };
    },
    methods: {
        getMyFavorite() {
            api.getMyFavorite(this.$store.getters.getToken).then(res => {
                if (!res.code) {
                    this.newsList = res.data;
                } else {
                    Toast("newtwork error!");
                }
            });
        }
    },
    beforeMount() {
        this.getMyFavorite();
    }
};
</script>
