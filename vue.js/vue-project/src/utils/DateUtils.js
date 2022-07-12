export default { // 외부에서 import 하고 싶을 때 export 꼭 해줘야 한다.
    getTimestamp: function (date) { // date 파라미터는 Date 객체
        date.setHours(date.getHours() + 9);

        return date.toISOString().replace('T', ' ').substring(0, 19);
    }
}