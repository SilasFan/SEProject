<template>
    <div class="w-full h-full flex flex-col bg-gray-100">
        <img src="/img/avatar.png" class="w-1/2 h-auto self-center mt-4" />

        <van-field
            v-model="email"
            left-icon="envelop-o"
            placeholder="邮箱"
            class="mt-10"
        />

        <van-field
            v-model="passwd"
            left-icon="lock"
            placeholder="密码"
            class="mt-4"
            type="password"
        />

        <van-button type="primary" block class="mt-8" @click="login">
            登录 / 注册
        </van-button>

        <van-dialog
            v-model="show"
            title="注册"
            show-cancel-button
            :before-close="registerAuth"
        >
            <p class="pt-2">请输入您邮箱中收到的验证码：</p>
            <van-field
                v-model="authCode"
                input-align="center"
                class="mt-4 mb-6 bg-gray-200"
            />
        </van-dialog>
    </div>
</template>

<script>
import api from "api/";
import { Notify } from "vant";

export default {
    name: "LoginOrRegister",
    data() {
        return {
            email: "",
            passwd: "",
            authCode: "",
            show: false
        };
    },
    methods: {
        login() {
            if (this.emailAndPasswdMatch()) {
                api.loginOrRegister(this.email, this.passwd).then(res => {
                    if (!res.code) {
                        this.$store.commit("setToken", res.data.token);
                        this.$store.commit("setUser", res.data.user);
                        this.$router.go(-1);
                    } else if (res.code === 2) {
                        this.show = true;
                    } else {
                        return 1;
                    }
                });
            } else {
                Notify({ type: "warning", message: "邮箱或密码不符合格式！" });
            }
        },

        registerAuth(action, done) {
            if (action === "confirm") {
                api.authCode(this.authCode).then(res => {
                    if (!res.code) {
                        this.$store.commit("setToken", res.data.token);
                        this.$store.commit("setUser", res.data.user);
                        Notify({ type: "success", message: "注册成功！" });
                        setTimeout(() => {
                            this.$router.go(-1);
                        }, 1000);
                        done();
                    } else {
                        Notify({ type: "danger", message: "验证码错误！" });
                        done(false);
                    }
                });
            } else {
                done();
            }
        },

        emailAndPasswdMatch() {
            const emailReg = /^([a-zA-Z]|[0-9])(\w)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,5})$/;
            const passwdReg = /^[a-zA-Z]|[0-9]{5,15}$/;
            return emailReg.test(this.email) && passwdReg.test(this.passwd);
        }
    }
};
</script>
