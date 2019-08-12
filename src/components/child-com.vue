<template>
    <div class="div">
        <span>{{$attrs}}{{a}}{{b}}</span>
        <childchild v-on="$listeners"></childchild>
    </div>
</template>

<script>
import childchild from './child-child'

const extend = {
    data: function () {
        return {
            a: 3,
            b: 4
        }
    },
    methods: {
        add () {
            console.log('扩展')
        }
    },
}
const mixin = {
    data: function () {
        return {
            a: 5,
            b: 6
        }
    },
    methods: {
        add () {
            console.log('混入')
        }
    },
}
export default {
    name: '',
    components: {
        childchild: childchild
    },
    data: function () {
        return {
            a: 1,
            b: 2
        }
    },
    props: {
        foo: String,
        bar: String
    },
    mounted () {
        this.$emit('event2')
        this.add()
    },
    methods: {
        add () {
            console.log('原生')
        }
    },
    extends: extend,
    mixins: [mixin]
}
</script>

<style scoped>

</style>
