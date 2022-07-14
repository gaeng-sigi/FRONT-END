<template>
    <table>
        <thead>
            <tr>
                <th>순위</th>
                <th>제목</th>
                <th>개봉일</th>
                <th>누적관객수</th>
                <th>누적매출액</th>
            </tr>
        </thead>
        <tbody>
            <RankRow :item="item" v-for="item in list" :key="item.movieCd" />
        </tbody>
    </table>
</template>

<script>
import RankRow from './RankRow.vue';

export default {
    components: { RankRow },

    props: { // item: Object 타입 정확하게 해주는것이 좋다. props(전달받는 곳.)
        list: Array
    }
}
</script>

<style>

</style>