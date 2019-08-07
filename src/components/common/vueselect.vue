<template>
    <div class="vue-select" :style="commonStyle" tabindex="-1"
         :class="{'gray': notSelect === true}" @blur="closeList()">
        <div class="vue-show-content" @click="showList()">
            <span class="select-names" :style="lineHeightStyle">{{value.name ?  value.name : '请选择' }}</span>
            <span class="triangle" :style="triangleStyle"></span>
        </div>
        <ul v-show="showUl && listArray.length > 0" class="select-ul  window-scroll-bar"
            :style="propStyles">
            <li v-for="item in  listArray"
                :class="{'active': item[valuekey] === selectValues }"
                :key="item.index"
                @click="selectValue(item)">
                {{item ? item[namekey] : ''}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: '',
    data: function () {
        return {
            showUl: false,
            selectNames: '',
            selectValues: '',
            commonStyle: {
                'width': `${parseInt(this.width)}px`,
                'height': `${parseInt(this.height)}px`,
                'border-color': this.borderColor
            },
            propStyles: {
                'max-height': `${parseInt(this.maxHeight)}px`,
                'border-color': this.borderColor
            },
            HeightStyle: {
                'height': `${parseInt(this.height)}px`
            },
            lineHeightStyle: {
                'height': `${parseInt(this.height)}px`,
                'line-height': `${parseInt(this.height)}px`,
                'color': this.fontColor
            },
            triangleStyle: {
                'border-top': `6px solid ${this.borderColor}`,
                'top': `${(parseInt(this.height) - 6) / 2}px`
            }
        }
    },
    props: {
        value: {
            type: Object,
            default: function () {
                return {
                    name: '请选择',
                    value: ''
                }
            }
        },
        width: {
            type: [Number, String],
            default: 120
        },
        height: {
            type: [Number, String],
            default: 24
        },
        borderColor: {
            type: [String],
            default: '#6A8EDD'
        },
        fontColor: {
            type: [String],
            default: '#333'
        },
        listArray: Array,
        namekey: {
            type: String,
            default: 'name'
        },
        valuekey: {
            type: String,
            default: 'value'
        },
        maxHeight: {
            type: [Number, String],
            default: 124
        },
        notSelect: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    mounted () {
    },
    methods: {
        showList () {
            if (this.notSelect) { // 如果禁止选择，则不能下拉
                return
            }
            this.showUl = true
        },
        selectValue (item) {
            this.showUl = false
            this.selectNames = item[this.namekey]
            this.selectValues = item[this.valuekey]
            const result = {
                name: this.selectNames,
                value: this.selectValues
            }
            this.$emit('input', result)
        },
        closeList () {
            this.showUl = false
        }
    }
}
</script>

<style scoped>
    .vue-select {
        position: relative;
        overflow: visible;
        border: 1px solid #dadada;
        border-radius: 4px;
        outline: none;
    }

    .vue-select.gray {
        background: #f1f1f1;
    }

    .vue-select .vue-show-content {
        width: 100%;
        height: 100%;
        position: relative;
        text-align: left;
        color: #333;
        cursor: pointer;
        vertical-align: baseline;
    }

    .vue-select .vue-show-content span.select-names {
        display: inline-block;
        width: 100%;
        height: 100%;
        text-indent: 5px;
        font-size: 12px;
        position: relative;
        top: 0;
    }

    .vue-select .vue-show-content span.triangle {
        height: 0;
        display: inline-block;
        line-height: 0;
        width: 0;
        border-top: 6px solid #dadada;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        position: absolute;
        right: 5px;
        top: 13px;
    }

    .vue-select .select-ul {
        position: absolute;
        top: calc(100% + 1px);
        left: 0;
        margin: 0;
        padding: 0;
        border: 1px solid #dadada;
        width: 100%;
        cursor: pointer;
        z-index: 20;
        background: #fff;
        max-height: 120px;
        overflow: auto;
    }

    .vue-select .select-ul li {
        list-style: none;
        height: 24px;
        line-height: 24px;
        color: #333;
        text-indent: 5px;
        text-align: left;
        font-size: 12px;
    }

    .vue-select .select-ul li:hover {
        background: #f5f5f5;
    }

    .vue-select .select-ul li.active {
        color: #fdb804
    }
</style>
