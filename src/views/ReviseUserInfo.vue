<template>
    <div class="flex flex-col w-full h-full bg-gray-100">
        <div class="self-center rounded-full relative mt-4">
            <input
                class="absolute w-full h-full left-0 right-0 opacity-0"
                type="file"
                @change="uploadAvatar"
            />
            <img
                :src="avatar"
                class="rounded-full w-32 h-32 self-center mt-2"
            />
        </div>

        <van-field v-model="userName" placeholder="请输入用户名" class="mt-10">
            <template #button>
                <van-button size="small" type="primary">修改用户名</van-button>
            </template>
        </van-field>
    </div>
</template>

<script>
export default {
    name: "ReviseUserInfo",
    data() {
        return {
            avatar: "",
            userName: ""
        };
    },
    methods: {
        uploadAvatar(event) {
            const types = ["image/jpg", "image/png", "image/jpeg"];

            const reader = new FileReader();
            const image = event.target.files[0];
            if (types.indexOf(image.type) !== -1) {
                reader.readAsDataURL(image);
                reader.onload = () => {
                    this.avatar = reader.result;
                    this.$store.commit("setAvatar", reader.result);
                };
            }
        },
        reviseUserName() {
            this.$store.commit("setUserName", this.userName);
        }
    },
    beforeMount() {
        this.avatar = this.$store.getters.getAvatar;
        this.userName = this.$store.getters.getUserName;
    }
};
</script>
