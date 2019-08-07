<template>
    <div class="loading-animation">
        <div class="loading" id="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'loadingAnimation'
}
</script>

<style scoped>
    /* ---------------- 数据地图的加载动画开始-------------- */
    .loading-animation {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: rgba(255,255, 255, 0.3);
        z-index: 400000;
    }

    .loading {
        width: 200px;
        height: 160px;
        margin: 0 auto;
        position: fixed;
        z-index: 500000;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(.5);
    }

    .loading span {
        display: inline-block;
        width: 16px;
        height: 100%;
        border-radius: 4px;
        background: lightgreen;
        margin: 0 10px;
        vertical-align: middle;
        animation: load .5s ease infinite;
        -webkit-animation: load .5s ease infinite;
    }

    .loading span:nth-child(2n) {
        height: 60px;
        background: #5cc85c;
    }

    .loading span:nth-child(2n+1) {
        height: 120px;
        background: #6a8edd;
    }

    @-webkit-keyframes load {
        0%, 100% {
            height: 60px;
            background: #5cc85c;
        }
        50% {
            height: 120px;
            background: #6a8edd;
        }
    }

    .loading span:nth-child(2) {
        animation-delay: 0.2s;
        -webkit-animation-delay: 0.2s;
    }

    .loading span:nth-child(3) {
        animation-delay: 0.4s;
        -webkit-animation-delay: 0.4s;
    }

    .loading span:nth-child(4) {
        animation-delay: 0.6s;
        -webkit-animation-delay: 0.6s;
    }

    .loading span:nth-child(5) {
        animation-delay: 0.8s;
        -webkit-animation-delay: 0.8s;
    }

    /* ---------------- 数据地图加载动画结束-------------- */
</style>
