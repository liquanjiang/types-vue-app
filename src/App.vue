<template>
    <div id="app">
        <!--<div id="nav">-->
            <!--&lt;!&ndash;<router-link @click="jump()">Home</router-link>&ndash;&gt;-->
            <!--&lt;!&ndash;|&ndash;&gt;-->
            <!--&lt;!&ndash;<router-link @click="jump2()">About</router-link>&ndash;&gt;-->
            <!--<a @click="jump()" :class="{ 'active': activeLink === 0 }">Home</a>-->
            <!--|-->
            <!--<a @click="jump2()"  :class="{ 'active': activeLink === 1 }">About</a>-->
        <!--</div>-->
        <router-view/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
    //  vue风格的常规写法
    export default Vue.extend({
        comments: {
            helloword: HelloWorld
        },
        data() {
            return {
                a: 1,
                activeLink: 0
            }
        },
        props: {
            abd: 2
        },
        watch: {
            abc(newVal: string, oldVal: string) {
                console.log(newVal, oldVal)
            }
        },
        methods: {
            add() {

            },
            jump() {
                this.activeLink = 0;
                this.$router.push('/')
            },
            jump2() {
                this.activeLink = 1;
                this.$router.push('/about')
            }
        },
        created(): void {
            this.add()
        },
        mounted(): void {

        },
    })
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
        cursor: pointer;
    }

    #nav a.active {
        color: #42b983;
    }
</style>
