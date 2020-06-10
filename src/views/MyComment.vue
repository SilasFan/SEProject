<template>
    <div class="w-full h-full flex flex-col">
        <div
            v-for="comment in myComment"
            :key="comment.index"
            class="text-left flex flex-col"
            @click="goToComment(comment)"
        >
            <div class="flex flex-row items-center pl-2">
                <img :src="comment.user.avatar" class="rounded-full" />
                <p class="ml-2">{{ comment.user.userName }}</p>
            </div>

            <p class="pl-4 pr-4 pt-2 pb-2 van-ellipsis">
                {{ comment.content }}
            </p>
            <hr />
        </div>
    </div>
</template>

<script>
import api from "api/";
import { Toast } from "vant";

export default {
    name: "MyComment",
    data() {
        return {
            myComment: []
        };
    },
    methods: {
        getMyComment() {
            api.getMyComment(this.$store.getters.getToken).then(res => {
                if (!res.code) {
                    this.myComment = res.data;
                } else {
                    Toast("network error!");
                }
            });
        },

        goToComment(comment) {
            this.$router.push({
                path: `/news/${comment.nid}/comment/${comment.id}`
            });
        }
    },
    beforeMount() {
        this.getMyComment();
    }
};
</script>

<style scoped>
img {
    width: 40px;
    height: 40px;
}
</style>
