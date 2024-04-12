<template>
  <div class="person">
    <h3>姓名：{{name}}</h3>
    <h3>年龄：{{age}}</h3>
    <button @click="getPhone">获取手机号</button>
  </div>
</template>
<script lang="ts">

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Person',
    setup(){
      /*
      1.setup当中不能使用this，使用this获取的值为undefined
      2.vue2中可以使用setup的变量，前提setup需要return变量
      3.setup返回值可以使用=>方式 return () => alert('13200000000')
      */
      let name = 'Tom'
      let age = 23
      let tel = '13244449999'
      function getPhone(){
        alert(tel)
      }
      return {name,age,tel,getPhone}
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // return () => alert('13200000000')
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