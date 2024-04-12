<template>
  <div class="person">
    <h3>姓名：{{name}}</h3>
    <h3>年龄：{{age}}</h3>
    <button @click="getPhone">获取手机号</button>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>
<script lang="ts">

 import {ref} from 'vue';
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Person',
    setup(){
      /*
      1.setup当中不能使用this，使用this获取的值为undifine
      2.setup可以与vue2代码共存
      3.vue2中可以使用setup的变量，前提setup需要return变量
      */
      let age = ref(23)
      let tel = '13200000000'
      function getPhone(){
        alert(tel)
      }
      return {age,tel,getPhone}
    },
    data(){
      return {
        name:'Tom'
      }
    },
    methods:{
      changeName(){
        this.name='Toom'
      },
      changeAge(){
        this.age +=1
      }
    }

  }
</script>
<style>
.person{
  background-color: #367d6c;
  border-radius: 20px;
  box-shadow: 0 0 10px;
  padding: 40px;
}
button{
  margin: 5px;
}
</style>