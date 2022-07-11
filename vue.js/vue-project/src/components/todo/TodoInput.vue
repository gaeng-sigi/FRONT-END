<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" @keyup.enter="addTodo" placeholder="Type what you have to do" autofocus> <!-- autofocus 커서 다시 뜨게 -->
        <span class="addContainer" @click="addTodo">
            <i class="addBtn fas fa-plus" aria-hidden="true"></i>
        </span>
    </div>
</template>

<style scoped>
    input:focus { outline: none; }
    .inputBox { background-color: white; height: 50px; line-height: 50px; border-radius: 5px; display: flex;}
    .inputBox input { border-style: none; font-size: 0.9rem; flex-grow: 1; padding: 0 10px;}
    .addContainer { background: linear-gradient(to right, #6478FB, #8763FB); width: 3rem; border-radius: 0 5px 5px 0;}
    .addContainer > .addBtn { color: white; }
</style>

<script>
export default {
    data() {
        return {
            newTodoItem: ''
        }
    },

    methods: {
        addTodo() {
            if(this.newTodoItem.trim() !== '') {
                const value = this.newTodoItem.trim();
                // localStorage.setItem(value, value); // localstorage에 값 추가.
                this.$emit('childAddTodo', value) // $는 이벤트 발생.
            }
            this.newTodoItem = '';
        }
    }
}
</script>

