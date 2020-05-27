<template>
    <div class="pt-3 pb-3 pl-4 pr-4 flex flex-row">
        <img :src="comment.user.avatar" class="rounded-full" />

        <div class="flex flex-col flex-grow pl-2">
            <div class="flex flex-row justify-between pt-1 pb-1">
                <p class="text-blue-500">{{ comment.user.userName }}</p>

                <div class="flex flex-row content-start items-center">
                    <span class="font-mono mr-1">
                        {{ comment.likes === 0 ? "" : comment.likes }}
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
    name: "Comment",
    props: {
        comment: {
            id: Number,
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
            api.likeComment(
                this.$route.params.id,
                this.comment.id,
                "test token"
            ).then(res => {
                if (!res.code) {
                    // 这里直接修改了一下props，实际情况看实际的api吧，或者加个获取单个comment的api
                    this.comment.likes++;
                    this.isLiked = true;
                } else {
                    Toast("Fail to like");
                }
            });
        }
    },
    beforeMount() {
        this.paras = this.comment.content.split("\n");
    }
};
</script>

<style scoped>
img {
    max-width: 40px !important;
    max-height: 40px !important;
}
</style>
