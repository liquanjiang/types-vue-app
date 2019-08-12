<template>
    <div>
        <h1>{{ foo }}{{ $attrs }}</h1>
        <childCom v-bind="$attrs"></childCom>
    </div>
</template>

<script>
import childCom from './child-com'

export default {
    name: '',
    components: {
        childCom: childCom
    },
    props: {
        foo: String
    },
    inheritAttrs: false
}
</script>

<style scoped>

</style>
