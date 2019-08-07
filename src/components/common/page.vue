<template>
    <div class="vue-page">
        <div class="page-size" v-if="showSize">
            <span>共&nbsp;  {{  pageRowCount  }}  &nbsp;条数据，每页显示</span>
            <div class="page-size-set">
                <vueselect :listArray='classArray' :width="120" :height="24"
                           :value="defaultClass"
                           @input='changePagesize'
                           :namekey="'name'" :valuekey="'key'">
                </vueselect>
            </div>
        </div>
        <div class="page-indexs">
            <span class="pre-page page-btn" @click="prePage()" v-if="pageIndexArr.length > 1">上一页</span>
            <span class="index-span"
                  v-for="(page, index) in pageIndexArr"
                  :key="page.index"
                  @click="chosePage(page, index)"
                  :class="{ 'active': currentIndex === page }">
          {{page > 0 ? page : '...'}}
        </span>
            <span class="next-page page-btn" @click="nextPage()" v-if="pageIndexArr.length > 1">下一页</span>
        </div>
    </div>
</template>

<script>
import vueselect from './vueselect.vue'

export default {
    name: 'page',
    components: {
        vueselect: vueselect
    },
    data: function () {
        return {
            pageSizeArr: [10, 20, 50, 100],
            pageIndexArr: [],
            pageSizeOpts: [10, 20, 50, 100],
            pageNum: 1,
            pageCount: 0,
            currentIndex: 1,
            defaultClass: {
                name: '10条',
                key: 10
            },
            classArray: [
                { name: '10条', key: 10 },
                { name: '20条', key: 20 },
                { name: '50条', key: 50 },
                { name: '100条', key: 100 }
            ]
        }
    },
    props: {
        pageIndex: {
            type: [String, Number],
            default: 1
        }, // 初始页码数，默认为1
        pageStart: {
            type: Number,
            default: 1
        }, // 起始页码数，默认为从第1页开始
        pageSize: {
            type: [String, Number],
            default: 10
        }, // 初始每页数目条数
        pageRowCount: {
            type: [String, Number],
            default: 0
        }, // 总数据条目数
        showSize: {
            type: Boolean,
            default: false
        } // 是否显示可切换每页数目条数的下拉框
    },
    watch: {
        pageSize: function (newv, old) {
            this.createIndexArr(this.pageNum)
        },
        pageRowCount: function (newv, old) {
            this.createIndexArr(this.pageNum)
        },
        pageIndex: function (newv, old) {
            this.currentIndex = newv
        }
    },
    mounted () {
        this.createIndexArr(this.pageNum)
    },
    methods: {
        // 创建分页数组
        createIndexArr (currentIndex) {
            this.pageCount = Math.ceil(this.pageRowCount / this.pageSize)
            if (currentIndex > this.pageCount) {
                this.pageNum = currentIndex = 1
            }
            const currentPage = +currentIndex
            const lastPage = +this.pageCount
            if (lastPage <= 7) {
                this.pageIndexArr = new Array(lastPage).fill('').map((v, i) => i + 1)
                return this.pageIndexArr
            }
            let result = []
            if (currentPage <= 3) {
                result = [3, 4, 5, -1]
            } else if (currentPage <= 4) {
                result = [-1, 4, 5, 6, -1]
            } else if (currentPage === lastPage - 4) {
                result = [-1, currentPage - 1, currentPage, currentPage + 1, -1]
            } else if (currentPage === lastPage - 3) {
                result = [-1, currentPage - 1, currentPage, currentPage + 1]
            } else if (currentPage >= lastPage - 2) {
                result = [-1, lastPage - 4, lastPage - 3, lastPage - 2]
            } else {
                result = [-1, currentPage - 1, currentPage, currentPage + 1, -1]
            }
            result = [1, 2].concat(...result)
            result = result.concat(lastPage - 1, lastPage)
            this.pageIndexArr = result
            return result
        },

        // 选中页码
        chosePage (page) {
            page = +page
            if (page === this.pageIndex || page < 0 || page > this.pageCount) {
                return false
            }
            const params = {
                pageNum: page,
                pageSize: this.pageSize
            }
            this.currentIndex = page
            this.createIndexArr(page)
            this.$emit('input', params)
        },

        // 选中上一页
        prePage () {
            const page = parseInt(this.currentIndex, 10) - 1
            if (page > 0) {
                this.chosePage(page)
            } else {
                return false
            }
        },

        // 选中下一个
        nextPage () {
            const page = parseInt(this.currentIndex, 10) + 1
            if (page <= this.pageCount) {
                this.chosePage(page)
            } else {
                return false
            }
        },

        // 切换每页显示的数据条目数
        changePagesize (pageSize) {
            const len = Math.ceil(this.pageRowCount / pageSize)
            const params = {
                pageNum: this.currentIndex <= len ? this.currentIndex : 1,
                pageSize: pageSize
            }
            this.currentIndex = params.pageNum
            this.$emit('input', params)
        }
    }
}
</script>

<style scoped>
    .vue-page {
        width: 100%;
        height: 30px;
        flex: 0 0 30px;
        margin: 0;
        position: relative;
    }

    .page-size-set {
        display: inline-block;
        height: 26px;
        width: 80px;
        position: relative;
        left: 5px;
        top: -5px;
    }

    .page-size-set ul {
        margin: 0;
        padding: 0;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 20;
        width: 60px;
        border: 1px solid #baffff;
    }

    .page-size-set ul li {
        list-style: none;
        width: 60px;
        height: 22px;
        line-height: 22px;
        text-align: center;
        color: #fff
    }

    .page-size-set ul li.active {
        color: #fdb804;
    }

    .page-size, .page-indexs {
        display: inline-block;
        margin-left: 10px;
        vertical-align: baseline;
        height: 30px;
        position: absolute;
        right: 20px;
    }

    .page-size span, .page-indexs span {
        color: #baffff;
        font-size: 12px;
        vertical-align: baseline;
        display: inline-block;
        position: relative;
        top: 4px;
        height: 30px;
        line-height: 30px;
    }

    .page-indexs span.page-btn {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        text-align: center;
        cursor: pointer;
        font-size: 12px;
        color: #333;
    }

    .page-indexs span.page-btn.pre-page {
        margin: 0 5px 0 0;
    }

    .page-indexs span.page-btn.next-page {
        margin: 0 0 0 5px;
    }

    .page-indexs span.index-span {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        text-align: center;
        cursor: pointer;
        margin: 0 5px;
        color: #333;
        width: 20px;
    }

    .page-indexs span.index-span.active {
        color: #3F6BF4;
        background: rgba(231, 239, 255, 1)
    }
</style>
