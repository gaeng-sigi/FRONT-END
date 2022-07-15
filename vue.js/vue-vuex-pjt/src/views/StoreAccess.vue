<template>
    <div> <!-- 함수() 호출하지 않는다.! -->
        <p>Count : {{ count }}</p>
        <button type="button" @click="increment">UP</button>
        <p>카트 상품 수 : {{ cartCount }}</p>
    </div>
</template>

<script>
export default { 
    computed: {
        count() {
            return this.$store.state.count;
        },

        cartCount() {
            return this.$store.getters.cartCount;
        }
    },

    methods: {
        increment() {
            this.$store.commit('setCount', 200);
        }
    }

}
</script>

<style>

</style>