<template>
    <main class="mt-3">
        <div class="container">
            <div class="float-end mb-1">
                <router-link class="nav-link" to="/create">
                    <button type="button" class="btn btn-dark">제품등록</button>
                </router-link>
            </div>
        </div>

        <table class="table table-bordered">
            <thead>
                <tr>
                    <th></th>
                    <th>제품명</th>
                    <th>제품가격</th>
                    <th>배송비</th>
                    <th>추가 배송비</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr :key="product.id" v-for="product in productList">
                    <td></td>
                    <td>{{ product.product_name }}</td>
                    <td>{{ product.product_price }}</td>
                    <td>{{ product.delivery_price }}</td>
                    <td>{{ product.add_delivery_price }}</td>
                    <td>
                        <router-link class="nav-link" :to="{ path: '/image_insert', query: {product_id: product_id} }">
                            <button type="button" class="btn btn-info me-1"><i class="fa-solid fa-camera"></i></button>
                        </router-link>
                        <router-link class="nav-link" :to="{ path: '/update', query: {product_id: product_id} }">
                            <button type="button" class="btn btn-warning me-1"><i class="fa-solid fa-pen-to-square"></i></button>
                        </router-link>
                        <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>    
</template>

<script>
export default {
    data() {
        return {
            productList: []
        }
    },

    created() {
        this.getProductList();
    },

    methods: {
        async getProductList() {
            const productList = await this.$get("/api/productList2", {});
            console.log(productList);
            this.productList = productList;
        }
    }
}
</script>

<style>
    i { color: #fff;}
</style>