<template>
    <div class="no-data-area" :style="styleObj">
        <div class="no-data-img" :style="styleObj"></div>
        <div class="no-data-text">
            {{text}}
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
// 基于typescript类的组件的写法
@Component
export default class NoData extends Vue {
    @Prop({
        type: [String, Number],
        default: 300
    }) private size: String;
    @Prop({
        type: String,
        default: '暂时没有数据可以显示喔...'
    }) private text: String;

    // computed 的写法
    get styleObj () {
        return {
            width: `${this.size}px `,
            height: `${this.size}px`
        }
    }
}
</script>

<style scoped>
    /* ----------------- 无数据缺省图片区域 ------------------------ */
    .no-data-area {
        width: 300px;
        height: 300px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }

    .no-data-area .no-data-img {
        width: 300px;
        height: 300px;
        margin: 0 auto;
        background-image: url("../../assets/no-data.png");
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .no-data-area .no-data-text {
        width: 300px;
        height: 30px;
        font-size: 14px;
        color: #808080;
        line-height: 30px;
        text-align: center;
        position: relative;
        top: -30px;
    }
</style>
