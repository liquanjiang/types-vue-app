<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Watch, Vue} from 'vue-property-decorator';
    // 基于typescript类的组件的写法
    @Component
    export default class HelloWorld extends Vue {
        // 输入属性Prop写法
        @Prop() private msg!: string;
        // data的写法
        private text: string = 'text';
        private obj: object = {
            a: 1,
            b: '1'
        };

        // computed 的写法
        get getText() {
            return this.text
        }

        get getObj() {
            return this.obj
        }

        // methods 的写法
        private add(): void {
            console.log(1)
        }

        //带有返回值的method写法
        private sum(x = 1, y = 2): number {
            return x + y
        }

        // vue生命周期钩子的写法
        created(): void {
            console.log('created')
        }

        mounted(): void {
            console.log('mounted')
        }

        // watch写法
        @Watch('msg')
        change(newValue: string, oldValue: string) {
            console.log(newValue, oldValue)
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
