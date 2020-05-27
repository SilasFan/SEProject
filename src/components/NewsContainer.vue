<template>
    <div class="h-full">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
                class="pt-4"
            >
                <NewsPiece
                    v-for="news in newsList"
                    :news="news"
                    :key="news.id"
                />
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
import api from "api/";
import NewsPiece from "./NewsPiece";

export default {
    name: "NewsContainer",
    components: {
        NewsPiece
    },
    props: {
        newsCategory: String
    },
    data() {
        return {
            loading: false,
            finished: false,
            refreshing: false,
            newsList: [],
            pageCount: 0
        };
    },
    methods: {
        onLoad() {
            api.getNewsList(
                this.newsCategory,
                this.pageCount,
                this.pageSize
            ).then(res => {
                res.data.map(elem => {
                    this.newsList.push(elem);
                });
                this.refreshing = false;
                this.loading = false;
                this.pageCount++;

                //最大条数
                if (!res.code) {
                    this.finished = true;
                }
            });
        },
        onRefresh() {
            this.finished = false;
            this.loading = true;
            this.pageCount = 0;
            this.newsList = [];
            this.onLoad();
        }
    },
    computed: {
        pageSize() {
            const listHeight = document.body.clientHeight - 90;
            return Math.floor(listHeight / 70);
        }
    }
};
</script>
