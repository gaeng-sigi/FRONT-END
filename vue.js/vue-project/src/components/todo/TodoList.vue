<template>
    <section>
        <transition-group name="list" tag="ul">
            <li :key="todoItem.itodo" v-for="todoItem in propsItems" class="shadow">
                <i class="checkBtn fas fa-check" aria-hidden="true"></i>
                <div class="grow_1 d-flex flex-col justify_content_evenly">
                    <div class="ctnt">{{ todoItem.todo }}</div>
                    <div class="small_text">{{ todoItem.created_at }}</div>
                </div>
                <span class="removeBtn" type="button" @click="removeTodo(todoItem.itodo)">
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>
            </li> <!-- 반복문은 키 값 설정을 해줘야한다. -->
        </transition-group>
    </section>
</template>

<style scoped>  
    .list-enter-active, .list-leave-active { transition: all 1s; }
    .list-enter-from, .list-leave-to { opacity: 0; transform: translateY(30px); }
    ul { list-style-type: none; padding-left: 0; margin-top: 0; text-align: left; }
    li { 
        display: flex; margin: 0.5rem 0;
        padding: 0 0.9rem; background-color: white; border-radius: 5px;
    }
    .checkBtn { line-height: 50px; color: #62acde; margin-right: 10px; }
    .removeBtn { line-height: 50px; margin-left: auto; color: #de4343; }
    .small_text { font-size: .8rem; color: #828181; }
</style>

<script>
export default {
    props: { propsItems: Array },

    methods: {
        removeTodo(key) {
            const del = confirm("삭제하시겠습니까?");
            if(del === true) {
            this.$emit('childRemoveTodo', key)
            /* const del = confirm("삭제하시겠습니까?");
            if(del === true) {
                localStorage.removeItem(todoItem);
                this.todoItems.splice(index, 1);
            } */
            }
        }
    },

    
}
</script>