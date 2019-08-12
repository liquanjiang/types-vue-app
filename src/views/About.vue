<template>
    <div class="about">
        <h1>This is an about page</h1>
        <hello-world :foo="key1" :bar="key2" name="key3" gende="key3"
                     @event1="event1()" @event2="event2()"></hello-world>
    </div>
</template>
<script>
import HelloWorld from '../components/HelloWorld'

export default {
    name: 'About',
    components: {
        HelloWorld: HelloWorld
    },
    data: function () {
        return {
            key1: 'key1',
            key2: 'key2',
            key3: 'key3'
        }
    },
    methods: {
        event1 () {
            console.log(111)
        },
        event2 () {
            console.log(222)
        }
    }
}
</script>
