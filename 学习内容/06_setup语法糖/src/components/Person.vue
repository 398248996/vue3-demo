<template>
  <div class="person">
    <h3>姓名：{{name}}</h3>
    <h3>年龄：{{age}}</h3>
    <button @click="getPhone">获取手机号</button>
  </div>
</template>
<!--<script lang="ts">-->
<!--  export default {-->
<!--    // eslint-disable-next-line vue/multi-word-component-names-->
<!--    name: 'Person'-->
<!--  }-->
<!--</script>-->
/*
1.setup可以通过安装插件  npm i vite-plugin-vue-setup-extend -D
2.配置vite.config.ts,引入组件
3.setup简洁写法，直接放到script中引入setup
4.引入setup之后，可以通过name定义组件名称
5.如果不定义name，那么组件名称等同于当前文件名称
*/
<script setup lang="ts" name="Person234">
    let name = 'Tom'
    let age = 23
    let tel = '13244449999'
    function getPhone(){
      alert(tel)
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // return () => alert('13200000000')
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