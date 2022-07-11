<template>
  <h1>Hello</h1>
  <div>{{ hello }}</div>
  <div>{{ hello }}</div>
  <div>{{ hello }}</div>
  <div>{{ hello }}</div>
  <input type="text" v-model="hello"> <!-- v-model에 change 이벤트 같이 들어가 있다..? -->
  <button @click="changeHello">안녕하세요 변경</button> <!-- v-on: = @ -->
  <FavoriteActor />
  <FavoriteActorProps imgSrc="https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202205/22/xportsnews/20220522170122976lvnu.jpg" />
</template>

<script>
import FavoriteActor from './components/FavoriteActor.vue';
import FavoriteActorProps from './components/FavoriteActorProps.vue';

export default {
  name: 'App',
  data() {
    return {
      hello: "안녕"
    }
  },

  methods: {
    changeHello() {
      this.hello = "안녕하세요";
    }
  },

  components: {
    FavoriteActor, FavoriteActorProps
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
