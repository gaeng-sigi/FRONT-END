import axios from 'axios';

export default {
    data() {
        return {
            key: '79865cf14c502ebb5ad2e9f04001edae',
            baseUrl: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/',
            BoxOfficeByDay: 'boxoffice/searchDailyBoxOfficeList.json',
            BoxOfficeByWeek: 'boxoffice/searchWeeklyBoxOfficeList.json'
        }
    },

    methods: {
        async $api(url, parameter) {
            return (await axios.get(url, {
                params: parameter
            })
            .catch(e => {
                console.log(e);
            })).data;
        },

        async getBoxOfficeByDay(targetDt) {
            const parameter = {
                key: this.key,
                targetDt
            }
            const url = this.baseUrl + this.BoxOfficeByDay;

            return await this.$api(url, parameter);
        },

        getOnlyDateStr(date) {
            return date.toISOString().split('T')[0];
        },

        async getBoxOfficeByWeek(targetDt, weekGb) {
            const parameter = {
                key: this.key,
                targetDt,
                weekGb
            }
            const url = this.baseUrl + this.BoxOfficeByWeek;

            return await this.$api(url, parameter);
        }
    }
}