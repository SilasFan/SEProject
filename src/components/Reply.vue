<template>
    <div class="pt-3 pb-3 pl-4 pr-4 flex flex-row">
        <img :src="reply.user.avatar" class="rounded-full" />

        <div class="flex flex-col flex-grow pl-2">
            <div class="flex flex-row justify-between pt-1 pb-1">
                <p class="text-blue-500">{{ reply.user.userName }}</p>

                <div class="flex flex-row content-start items-center">
                    <span class="font-mono mr-1">
                        {{ reply.likes === 0 ? "" : reply.likes }}
                    </span>

                    <van-icon
                        name="like-o"
                        size="20px"
                        @click="like"
                        v-if="!isLiked"
                    />

                    <van-icon
                        name="like"
                        size="20px"
                        color="#f56565"
                        @click="removeLike"
                        v-if="isLiked"
                    />
                </div>
            </div>

            <p class="text-left" v-for="para in paras" :key="para.index">
                {{ para }}
            </p>
        </div>
    </div>
</template>

<script>
import api from "api/";
import { Toast } from "vant";

export default {
    name: "Reply",
    props: {
        reply: {
            id: Number,
            cid: Number,
            content: String,
            likes: Number,
            user: {
                avatar: String,
                userName: String
            }
        }
    },
    data() {
        return {
            paras: [],
            isLiked: false
        };
    },
    methods: {
        like() {
            api.likeReply(
                this.$route.params.id,
                this.reply.cid,
                this.reply.id,
                "test token"
            ).then(res => {
                if (!res.code) {
                    this.reply.likes++;
                    this.isLiked = true;
                } else {
                    Toast("Fail to like");
                }
            });
        },
        removeLike() {
            api.removeLikeForReply(
                this.$route.params.id,
                this.reply.cid,
                this.reply.id,
                "test token"
            ).then(res => {
                if (!res.code) {
                    this.reply.likes--;
                    this.isLiked = false;
                } else {
                    Toast("Fail to remove like");
                }
            });
        }
    },
    mounted() {
        this.paras = this.reply.content.split("\n");
    }
};
</script>

<style scoped>
img {
    max-width: 40px !important;
    max-height: 40px !important;
}
</style>
