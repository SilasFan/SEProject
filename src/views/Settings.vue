<template>
    <div class="w-full h-full flex flex-col bg-gray-100 text-left">
        <van-cell title="夜间模式" class="mt-8">
            <template #icon>
                <van-icon name="/icons/night.svg" size="24px" class="mr-2" />
            </template>

            <template #right-icon>
                <van-icon
                    name="/icons/switch-off.svg"
                    size="28px"
                    v-if="!nightMode"
                    @click="changeNightMode"
                />
                <van-icon
                    name="/icons/switch-on.svg"
                    size="28px"
                    v-if="nightMode"
                    @click="changeNightMode"
                />
            </template>
        </van-cell>

        <van-cell
            is-link
            title="正文字号"
            @click="asShow = true"
            class="mt-4"
        />
        <van-action-sheet
            v-model="asShow"
            :actions="fontSizes"
            @select="onSelect"
        />
    </div>
</template>

<script>
export default {
    name: "Settings",
    data() {
        return {
            asShow: false,
            fontSizes: [
                { name: "large" },
                { name: "medium" },
                { name: "small" }
            ]
        };
    },
    computed: {
        nightMode() {
            return this.$store.getters.nightMode;
        }
    },
    methods: {
        changeNightMode() {
            this.$store.commit("changeNightMode");
        },
        onSelect(item) {
            this.$store.commit("changeFontSize", item.name);
            this.asShow = false;
        }
    }
};
</script>
