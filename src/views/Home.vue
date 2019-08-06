<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld :msg="a"></HelloWorld>
    </div>
</template>

<script lang="ts">
    import {Vue} from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
    //  vue常规写法
    export default Vue.extend({
        name: '',
        components: {
            HelloWorld: HelloWorld
        },
        data() {
            return {
                a: 'typescript + vue项目'
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
                const firstHash = null;
                const param = {start: firstHash, pass: true};
                this.$apiService.infoCount.getPlayWords(param).then(res => {
                    console.log(res)
                });
            }
        },
        created(): void {
            this.add()
        },
        mounted(): void {

        },
    })
</script>
