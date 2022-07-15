<template>
    <div>
        <h1>{{ title }}</h1>
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
            title: '',
            selectedDate: '',
            list: [],
            pathName: ''
        }
    },

    methods: {
        search() {
            const targetDt = this.selectedDate.replaceAll('-', '');
            this.getData(targetDt);
        },

        async getData(targetDt) {
            switch(this.pathName) {
            case 'BoxOfficeByDay':
                this.list = (await this.getBoxOfficeByDay(targetDt)).boxOfficeResult.dailyBoxOfficeList;
                break;
            
            case 'BoxOfficeByWeek':
                this.list = (await this.getBoxOfficeByWeek(targetDt)).boxOfficeResult.weeklyBoxOfficeList;
                break;
            }
        },
    },

    created() {
        const d = new Date();
        d.setDate(d.getDate() - 1);
        this.selectedDate = this.getOnlyDateStr(d);
    },

    updated() {
        this.pathName = this.$route.name;
        
        switch(this.pathName) {
            case 'BoxOfficeByDay':
                this.title = 'BoxOfficeByDay';
                break;
            case 'BoxOfficeByWeek':
                this.title = 'BoxOfficeByWeek';
                break;
        }
    }
}
</script>

<style>

</style>