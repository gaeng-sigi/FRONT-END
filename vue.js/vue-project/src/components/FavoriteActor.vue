<template>
    <img class="imgsize" v-bind:src="imgSrc">
</template>


<script>
export default {
    data() {
        return {
            imgSrc: 'https://cdn.topclass.chosun.com/news/photo/202205/21657_34678_4457.jpg'
        }
    }
}
</script>

<style scoped>
    .imgsize { width: 200px;}
</style>
