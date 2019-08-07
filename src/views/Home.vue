<template>
    <div class="home">
        <HelloWorld msg="This is Home Page"/>
        <div class="select-div">
            <span>请选择数据</span>
            <span>
                <vue-select
                    @sendValue="selectValues"
                    :list-array="arr"></vue-select>
            </span>
        </div>
        <nodata v-if="array.length === 0 "></nodata>
        <div class="ul-list" v-show="array.length > 0">
            <ul>
                <li v-for="(item, index) in array" :key="index">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
    components: {
        HelloWorld
    },
    data: function () {
        return {
            arr: [
                { name: '选项1', value: 1 },
                { name: '选项2', value: 2 },
                { name: '选项3', value: 3 },
                { name: '选项4', value: 4 }
            ],
            array: [],
            array1: [
                { name: '我是数组1' },
                { name: '我是数组1' },
                { name: '我是数组1' },
                { name: '我是数组1' }, { name: '我是数组1' }
            ],
            array2: [
                { name: '我是数组2' },
                { name: '我是数组2' },
                { name: '我是数组2' },
                { name: '我是数组2' }, { name: '我是数组2' }
            ],
            array3: [
                { name: '我是数组3' },
                { name: '我是数组3' },
                { name: '我是数组3' },
                { name: '我是数组3' }, { name: '我是数组3' }
            ]
        }
    },
    methods: {
        selectValues (item) {
            console.log(item)
            switch (item.value) {
                case 1:
                    this.array = this.array1
                    break
                case 2:
                    this.array = this.array2
                    break
                case 3:
                    this.array = this.array3
                default:
                    this.array = []
            }
        }
    }
})
export default class Home extends Vue {

}
</script>
<style scoped lang="less">
    .select-div {
        width: 300px;
        margin: 10px auto;
    }

    .select-div span {
        display: inline-block;
        font-size: 12px;
        margin-right: 30px;
    }

    .ul-list ul {
        margin: 0;
        padding: 0;
    }

</style>
