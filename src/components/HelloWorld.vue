<template>
    <div class="hello">
        <h1>{{ foo }}{{ $attrs.name }}</h1>
        <childCom v-bind="$attrs" v-on="$listeners"></childCom>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import childCom from './child-com'

@Component({
    components: {
        childCom: childCom
    },
    inheritAttrs: false,
    created () {
        console.log(this.$attrs)
    }
})
export default class HelloWorld extends Vue {
    @Prop() private msg!: string
    @Prop() private foo!: string
    @Prop() private bar!: string
    public obj: string = 'a'
    public d: string = 'd'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
