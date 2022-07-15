<template>
    <div>
        <h1>BoxOfficeByDay</h1>
        <div>
            <input type="date" v-model="selectedDate">
            <button @click="search">검색</button>
        </div>
        <RankTable :list="list"/>
        <hr>
    </div>
</template>

<script>
import RankTable from '../components/boxoffice/RankTable';

export default {
    components: {
        RankTable
    },

    data() {
        return {
            selectedDate: '',
            list: []
        }
    },

    methods: {
        async getData(targetDt) {
            const data = await this.getBoxOfficeByDay(targetDt);
            this.list = data.boxOfficeResult.dailyBoxOfficeList;
        },

        search() {
            const targetDt = this.selectedDate.replaceAll('-', '');
            this.getData(targetDt);
        }
    },

    created() {
        const d = new Date();
        d.setDate(d.getDate() - 1);
        this.selectedDate = this.getOnlyDateStr(d);
    }

}
</script>

<style>

</style>