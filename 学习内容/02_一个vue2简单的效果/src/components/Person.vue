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
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Person',
    data(){
      return {
        name:'Tom',
        age: 23,
        tel: '13200000000'
      }
    },
    methods:{
      getPhone(){
        alert(this.tel)
      },
      changeName(){
        this.name='Toom'
      },
      changeAge(){
        this.age+=1
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