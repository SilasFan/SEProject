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

        <van-field
            v-model="message"
            rows="1"
            autosize
            type="textarea"
            placeholder="请输入留言"
            class="fixed bottom-0"
            v-if="isLogin"
        >
            <template #button>
                <van-button
                    size="small"
                    plain
                    type="info"
                    @click="addReply"
                    :disabled="message.length === 0"
                >
                    回复
                </van-button>
            </template>
        </van-field>
    </div>
</template>

<script>
import api from "api/";
import Comment from "@/components/Comment.vue";
import Reply from "@/components/Reply.vue";
import { Toast, Notify } from "vant";

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
            message: "",

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
        },

        isLogin() {
            return this.$store.getters.isLogin;
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
        },

        addReply() {
            api.addReply(
                this.$route.params.id,
                this.$route.params.cid,
                this.message,
                this.$store.getters.getToken
            ).then(res => {
                if (!res.code) {
                    Notify({ type: "success", message: "评论成功！" });
                    this.getAllReplies();
                } else {
                    Notify({ type: "danger", message: "网络错误！" });
                }
            });
        }
    },
    beforeMount() {
        this.getCurrentComment();
        this.getAllReplies();
    },
    mounted() {
        window.scrollTo(0, 0);
    }
};
</script>

<style scoped>
.van-button--info {
    border: none !important;
}
</style>
