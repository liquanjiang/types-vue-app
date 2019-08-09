<template comments>
    <div class="home">
        <!-- 数据选择区域 -->
        <div class="select-div">
            <span>请选择数据</span>
            <span>
                <vue-select
                    v-model="selectobj"
                    @input="selectValues"
                    :list-array="arr"></vue-select>
            </span>
            <span style="color:#f00">&larr;此处即是自定义select组件，可替代浏览器自带的select</span>
        </div>
        <!-- 消息提示区域按钮 -->
        <div class="message-div">
            <button type="button" @click="message(0)">成功</button>
            <button type="button" @click="message(1)">失败</button>
            <button type="button" @click="message(2)">警告</button>
            <button type="button" @click="message(3)">提示</button>
            <button type="button" @click="loading()">等待</button>
            <span style="color:#f00">&larr;此处即是自定义消息组件</span>
        </div>
        <!-- 分页切换区域 -->
        <div class="page-zone">
            <page :pageSize="pageSize"
                  :pageIndex="pageNum"
                  @input="chosePage"
                  :pageRowCount="pageCount"></page>
        </div>
        <nodata v-if="array.length === 0 "></nodata>
        <div class="ul-list" v-show="array.length > 0">
            <ul>
                <li v-for="(item, index) in array" :key="index">{{item.name}}</li>
            </ul>
        </div>
        <div class="ul-list">
            <ul>
                <li v-for="(value, keys,index) in sortObj" :key="index">{{keys }} {{value}}</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import $util from '@/libs/util'

@Component

export default class Home extends Vue {
    private $util = $util
    public arr: any = [
        { name: '选项1', value: 1 },
        { name: '选项2', value: 2 },
        { name: '选项3', value: 3 },
        { name: '选项4', value: 4 }
    ]
    public selectobj: any = {
        name: '',
        value: 0
    }
    public array: any = []
    private array1: any = [
        { name: '我是数组1' },
        { name: '我是数组1' },
        { name: '我是数组1' },
        { name: '我是数组1' }, { name: '我是数组1' }
    ]
    private array2: any = [
        { name: '我是数组2' },
        { name: '我是数组2' },
        { name: '我是数组2' },
        { name: '我是数组2' }, { name: '我是数组2' }
    ]
    private array3: any = [
        { name: '我是数组3' },
        { name: '我是数组3' },
        { name: '我是数组3' },
        { name: '我是数组3' }, { name: '我是数组3' }
    ]
    private sortObj: any = {
        f: 5,
        a: 1,
        c: 2,
        d: 3,
        b: 4,
        e: 6
    }
    private pageSize: number = 10
    private pageNum: number = 1
    private pageCount: number = 50

    private selectValues (item): void {
        switch (item.value) {
            case 1:
                this.array = this.array1
                break
            case 2:
                this.array = this.array2
                break
            case 3:
                this.array = this.array3
                break
            default:
                this.array = []
        }
    }

    private chosePage (params: any): void {
        console.log(params)
        console.log(arguments)
        this.pageNum = params.pageNum
    }

    private message (index: number): void {
        switch (index) {
            case 0:
                this.$util.showMessage('abcd', 'success')
                break
            case 1:
                this.$util.showMessage('abcd', 'error')
                break
            case 2:
                this.$util.showMessage('abcd', 'warning')
                break
            case 3:
                this.$util.showMessage('abcd', 'info')
                break
        }
    }

    public loading (): void {
        const that = this
        that.$store.dispatch('showLoading')
        setTimeout(function () {
            that.$store.dispatch('hideLoading')
        }, 2000)
    }
}
</script>
<style scoped lang="less">
    .select-div {
        width: 630px;
        margin: 10px auto;
    }

    .select-div span {
        display: inline-block;
        font-size: 12px;
        margin-right: 30px;
    }

    .ul-list ul {
        padding: 0;
        width: 1200px;
        margin: 10px auto;
    }

    .ul-list ul li {
        display: inline-block;
        width: 200px;
        height: 200px;
        background: #f1f1f1;
        border-radius: 5px;
        margin-right: 20px;
        line-height: 200px;
    }

    .message-div button {
        margin-right: 20px;
    }
</style>
