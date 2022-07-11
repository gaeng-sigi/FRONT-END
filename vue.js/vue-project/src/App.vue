<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput @childAddTodo="addTodo"></TodoInput>
    <TodoList @childRemoveTodo="removeTodo" v-bind:propsItems="todoItems"></TodoList>
    <TodoFooter @clearTodo2="clearTodo3"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/todo/TodoHeader.vue';
import TodoInput from './components/todo/TodoInput.vue';
import TodoList from './components/todo/TodoList.vue';
import TodoFooter from './components/todo/TodoFooter.vue';

export default {
  name: 'App',

  data() {
    return {
      todoItems: []
    }
  },

  methods: {
    addTodo(todoItem) { // TodoInput $emit 이벤트 발생으로 value 값이 todoItem으로 온다?
      //localStorage.setItem(todoItem, todoItem); // setItem 추가.
      this.todoItems.push(todoItem);
    },

    removeTodo(todoItem, index) {
      //localStorage.removeItem(todoItem); // removeItem 삭제.
      this.todoItems.splice(index, 1);
    },

    clearTodo3() {
      //localStorage.clear();
      this.todoItems.splice(0);
    },

    changeValue() {
      const json = JSON.stringify(this.todoItems);
      localStorage.setItem('todoItems', json);
    }
  },

  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },

  watch: {
    todoItems: {
      deep: true, // 객체, 배열 deep 필요.(주소값 안 바뀌는)
      handler() {
        this.changeValue(); // 위에 methods 안 localstorage~~~ 주석 처리하고 이걸로 대체
      }
    }
  },

  created() { // 내가 하고 싶은 작업을 작성..?
    const json = localStorage.getItem("todoItems");
    if(json) {
      const todoItems = JSON.parse(json);
      todoItems.forEach(item => {
        this.todoItems.push(item);
      });
    }
    /* if(localStorage.length > 0) {
          for(let i=0; i<localStorage.length; i++) {
              this.todoItems.push(localStorage.key(i));
          }
      } */
  }
}
</script>

<style>
  body { text-align: center; background-color: #F6F6F8; }
  input { border-style: groove; width: 200px; }
  button { border-style: groove; }
  .shadow { box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03); }
</style>
