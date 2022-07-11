<template>
    <img class="imgsize" v-bind:src="imgSrc">
</template>

<script>
export default {
    props: {
        imgSrc: String,
    }
}
</script>

<style scoped> /* scoped는 이 파일에서만 css가 적용된다. */
    .imgsize { width: 200px;}
</style>
