<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput @childAddTodo="addTodo" @alertModal="showModal"></TodoInput>
    <TodoList @childRemoveTodo="removeTodo" v-bind:propsItems="todoItems"></TodoList>
    <TodoFooter @clearTodo2="clearTodo3"></TodoFooter>
  </div>ㅞㅡ 겨ㅜ 
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
      cnt: 0,
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
      
      /*
      this.todoItems.push({
        key: this.cnt++,
        value: todoItem
      });
      */
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
      this.todoItems.splice(0);
      this.cnt = 0;
    },

    changeValue() {
      const json = JSON.stringify(this.todoItems);
      localStorage.setItem('todoItems', json);
      localStorage.setItem('cnt', this.cnt);
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
  /*
  watch: {
    todoItems: {
      deep: true, // 객체, 배열 deep 필요.(주소값 안 바뀌는)
      handler() {
        this.changeValue(); // 위에 methods 안 localstorage~~~ 주석 처리하고 이걸로 대체
      }
    }
  },
  */
  created() { // 내가 하고 싶은 작업을 작성..?
    /*
    TodoDao.getList(list => {
      list.forEach(item => {
        this.todoItem.push(item);
      })
    })
    */

    axios.get('/todo/index')
    .then(res => {
      if(res.status === 200 && res.data.length > 0) {
        res.data.forEach(item => { // function 사용 XXXXX, => 사용 OOOOO
          this.todoItems.push(item);
        })
      }
      console.log(res);
    })
    /*
    const json = localStorage.getItem("todoItems");
    if(json) {
      const todoItems = JSON.parse(json);
      todoItems.forEach(item => {
        this.todoItems.push(item);
      });
      const cnt = localStorage.getItem("cnt");
      this.cnt = cnt;
    }
    */
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
