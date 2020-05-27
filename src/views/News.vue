<template>
    <div class="w-full h-full">
        <h2 class="text-left pl-4 pr-4 pt-2 text-3xl font-bold">
            {{ newsContent.title }}
        </h2>
        <p class="text-left pl-4 pb-4 font-serif">{{ newsContent.author }}</p>

        <div id="newsContent"></div>

        <p class="text-left text-sm bg-gray-100 pt-1 pb-1 pl-4 mb-2 mt-8">
            热门评论
        </p>
        <div class="divide-y divide-gray-400">
            <Comment
                v-for="comment in hotComments"
                :key="comment.id"
                :comment="comment"
            />
        </div>

        <hr class="text-gray-400" />

        <router-link
            class="text-sm text-blue-400 pt-1 mb-8 cursor-pointer"
            :to="commentLink"
        >
            所有评论
        </router-link>
    </div>
</template>

<script>
import api from "api/";
import { ImagePreview, Toast } from "vant";
import Comment from "@/components/Comment.vue";

export default {
    name: "News",
    components: {
        Comment
    },
    data() {
        return {
            newsContent: {
                id: this.$route.params.id,
                title: "",
                author: "",
                content: ""
            },
            hotComments: []
        };
    },
    computed: {
        commentLink() {
            return `/news/${this.$route.params.id}/comment`;
        }
    },
    methods: {
        putInImageView() {
            const content = document.getElementById("newsContent");
            const imgs = content.getElementsByTagName("img");
            const srcs = [];
            for (let i = 0; i < imgs.length; i++) {
                srcs.push(imgs[i].src);
            }
            content.onclick = function(event) {
                let target = event.target;
                if (target.tagName.toLowerCase() === "img") {
                    ImagePreview({
                        images: srcs,
                        showIndex: true,
                        closeable: true
                    });
                }
            };
        }
    },
    beforeMount() {
        // 获取并渲染新闻内容
        api.getNewsContent(this.$route.params.id).then(res => {
            if (!res.code) {
                this.newsContent = res.data;
                const contentDiv = document.getElementById("newsContent");
                contentDiv.innerHTML = this.newsContent.content;
                this.putInImageView();
            } else {
                Toast("Fail to load...");
            }
        });

        // 获取热门评论
        api.getHotComments(this.$route.params.id, 3).then(res => {
            if (!res.code) {
                this.hotComments = res.data;
            } else {
                Toast("Fail to get comments");
            }
        });
    }
};
</script>

<style>
#newsContent {
    padding: 0 1rem 0 1rem;
}
#newsContent p {
    text-align: left;
    text-indent: 2rem;
}
#newsContent img {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
</style>
