<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput @childAddTodo="addTodo" @alertModal="showModal"></TodoInput>
    <TodoList @childRemoveTodo="removeTodo" v-bind:propsItems="todoItems"></TodoList>
    <TodoFooter @clearTodo2="clearTodo3"></TodoFooter>
  </div>
  <AlertModal @close="closeModal" :show="modalShow" header="알림창" body="내용을 입력해 주세요."></AlertModal>
</template>

<script>
import TodoHeader from './components/todo/TodoHeader.vue';
import TodoInput from './components/todo/TodoInput.vue';
import TodoList from './components/todo/TodoList.vue';
import TodoFooter from './components/todo/TodoFooter.vue';
import AlertModal from './components/common/AlertModal.vue';
// import TodoDao from './dao/TodoDao';
import axios from 'axios';
import DateUtils from './utils/DateUtils';

export default {
  name: 'App',
  data() {
    return {
      todoItems: [],
      modalShow: false
    }
  },

  methods: {
    addTodo(todoItem) { // TodoInput $emit 이벤트 발생으로 value 값이 todoItem으로 온다?
      //localStorage.setItem(todoItem, todoItem); // setItem 추가.
      const param = {
        'todo': todoItem
      };
      axios.post('/todo/index', param)
      .then(res => {
        if(res.status === 200 && res.data) { // 200 서버 통신 성공, 404 서버 통신 실패
          const item = {
            'itodo': res.data.result,
            'todo': todoItem,
            'created_at': DateUtils.getTimestamp(new Date())
          }
          this.todoItems.push(item);
        }
      })
    },

    removeTodo(key) {
      //localStorage.removeItem(todoItem); // removeItem 삭제.
      this.todoItems.forEach((item, idx) => {
        if(item.itodo === key) {
          this.todoItems.splice(idx, 1);
          axios.delete(`/todo/index/${item.itodo}`)
          .then(res => {
            console.log(res);
          })
        }
      })
    },

    clearTodo3() {
      //localStorage.clear();
      axios.delete(`/todo/index`)
      .then(res => {
        if(res.status === 200 && res.data.result) {
          this.todoItems.splice(0);
        }
      });
    },

    showModal() {
      this.modalShow = !this.modalShow;
    },

    closeModal() {
      this.modalShow = !this.modalShow;
    }
  },

  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
    AlertModal
  },

  created() { // 내가 하고 싶은 작업을 작성..?
    axios.get('/todo/index')
    .then(res => {
      if(res.status === 200 && res.data.length > 0) {
        res.data.forEach(item => { // function 사용 XXXXX, => 사용 OOOOO
          this.todoItems.push(item);
        })
      }
      console.log(res);
    })
  }
}
</script>

<style>
  body { text-align: center; background-color: #F6F6F8; }
  input { border-style: groove; width: 200px; }
  button { border-style: groove; }
  .ctnt { font-size: 1rem; }
  .d-flex { display: flex; }
  .flex-col { flex-direction: column; }
  .flex-row { flex-direction: row; }
  .grow_1 { flex-grow: 1; }
  .shadow { box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03); }
  .justify_content_evenly { justify-content: space-evenly; }
</style>
