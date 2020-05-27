<template>
    <div class="w-full h-full flex flex-col">
        <p class="pt-1 pb-1 pl-2 text-left text-sm bg-gray-100">热门评论</p>
        <hr />

        <div class="divide-y divide-gray-400">
            <Comment
                v-for="comment in hotComments"
                :key="comment.id"
                :comment="comment"
                :reply="true"
            />
        </div>
        <hr />

        <div
            class="pt-1 pb-1 pl-2 pr-2 text-left text-sm bg-gray-100 flex flex-row justify-between"
        >
            <p>所有评论</p>
            <van-icon :name="sortByIcon" size="19px" @click="changeSortBy" />
        </div>
        <hr />

        <div class="divide-y divide-gray-400">
            <Comment
                v-for="comment in allComments"
                :key="comment.id"
                :comment="comment"
                :reply="true"
            />
        </div>
        <hr />

        <p class="text-sm pt-1 pb-2">没有更多了...</p>
    </div>
</template>

<script>
import Comment from "@/components/Comment.vue";
import { Toast } from "vant";
import api from "api/";

export default {
    name: "NewsComment",
    components: {
        Comment
    },
    data() {
        return {
            sortBy: "time",
            hotComments: [],
            allComments: []
        };
    },

    computed: {
        sortByIcon() {
            return this.sortBy === "likes" ? "fire-o" : "clock-o";
        }
    },

    methods: {
        getHotComments() {
            api.getHotComments(this.$route.params.id, 3).then(res => {
                if (!res.code) {
                    this.hotComments = res.data;
                } else {
                    Toast("Fail to load hot comments");
                }
            });
        },

        getAllComments() {
            api.getAllComments(this.$route.params.id, this.sortBy).then(res => {
                if (!res.code) {
                    this.allComments = res.data;
                } else {
                    Toast("Fail to load comments");
                }
            });
        },

        changeSortBy() {
            if (this.sortBy === "time") this.sortBy = "likes";
            else this.sortBy = "time";
            this.getAllComments();
        }
    },
    beforeMount() {
        this.getHotComments();
        this.getAllComments();
    }
};
</script>
