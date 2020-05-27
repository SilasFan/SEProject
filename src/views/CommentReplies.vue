<template>
    <div class="h-full w-full flex flex-col">
        <Comment :comment="comment" v-if="ready" />
        <hr class="mt-1" />

        <p class="pt-1 pb-1 pl-2 text-left text-sm bg-gray-100">所有回复</p>
        <hr />

        <div class="divide-y divide-gray-400">
            <Reply v-for="reply in replies" :key="reply.id" :reply="reply" />
        </div>
        <hr />

        <p class="text-sm pt-1 pb-4">没有更多了...</p>
    </div>
</template>

<script>
import api from "api/";
import Comment from "@/components/Comment.vue";
import Reply from "@/components/Reply.vue";
import { Toast } from "vant";

export default {
    name: "CommentReplies",
    components: {
        Comment,
        Reply
    },
    data() {
        return {
            comment: {},
            replies: [],

            // 辅助渲染评论
            ready: false
        };
    },
    computed: {
        newsID() {
            return this.$route.params.id;
        },
        commentID() {
            return Number(this.$route.params.cid);
        }
    },
    methods: {
        getCurrentComment() {
            api.getComment(this.newsID, this.commentID).then(res => {
                if (!res.code) {
                    this.comment = res.data;
                    this.ready = true;
                } else {
                    Toast("Fail to get comment");
                }
            });
        },

        getAllReplies() {
            api.getReplies(this.newsID, this.commentID).then(res => {
                if (!res.code) {
                    this.replies = res.data;
                } else {
                    Toast("Fail to get replies");
                }
            });
        }
    },
    beforeMount() {
        this.getCurrentComment();
        this.getAllReplies();
    }
};
</script>
