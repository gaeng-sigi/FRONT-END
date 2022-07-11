<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" @click="clearTodo1">Clear All</span>
    </div>
</template>

<script>
export default {
    methods: {
        clearTodo1() {
            const allDel = confirm("정말로 다 삭제하시겠습니까?");
            if(allDel === true) {
                this.$emit('clearTodo2')
            }
        }
    }

}
</script>

<style scoped>
    .clearAllContainer { width: 8.5rem; height: 50px; line-height: 50px; background-color: white; border-radius: 5px; margin: 0 auto; }
    .clearAllBtn { color: #e20303; display: block; }
</style>
