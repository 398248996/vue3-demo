<template>
  <!-- 标题 -->
  <div class="title">
    <h1>Vue3 组件间通信</h1>
  </div>

  <!-- 主体布局 -->
  <div class="container">
    <!-- 内容 -->
    <div class="content">
      <h2>readonly</h2>
      <h3>整个对象都是只读数据</h3>
      <h3> 姓名: {{rperson}}</h3>
      <button @click="changeReadonlyName">修改姓名</button>
      <button @click="changeReadonlyAll">修改全部</button>
      <hr>
      <h2>shallowReadonly</h2>
      <h3>浅层只读，深层次的响应式对象可以修改，浅层的不可以修改</h3>
      <h3> 姓名: {{srperson}}</h3>
      <button @click="changeSReadonlyName">修改姓名</button>
      <button @click="changeSReadonlyAll">修改全部</button>
    </div>
  </div>
</template>
<script setup lang="ts" name="app">
import {readonly, ref, shallowReadonly} from "vue";

let rperson = readonly(ref({name:'Ref',age:22,child:{name:'Ref LL',age:1}}))

function changeReadonlyName(){
  rperson.value.child.name = 'ReadonlyRef1'
}
function changeReadonlyAll(){
  rperson.value = {name:'ReadonlyRef2',age: 24,child: {name:'Ref LL',age:3}}
}

let srperson = shallowReadonly(ref({name:'Ref',age:22,child:{name:'Ref LL',age:1}}))
function changeSReadonlyName(){
  srperson.value.child.name = 'SReadonlyRef1'
}
function changeSReadonlyAll(){
  srperson.value = {name:'SReadonlyRef2',age: 24,child: {name:'Ref ss',age:3}}
}
</script>
<style scoped>
/* 全局样式 */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
  color: #333;
}

/* 标题样式 */
.title {
  background-color: #367d6c;
  color: #fff;
  padding: 30px 0;
  text-align: center;
}

/* 主体布局 */
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
}

/* 导航样式 */
.navbar {
  width: 20%;
}

.navbar ul {
  list-style: none;
  padding: 0;
}

.navbar li {
  margin-bottom: 10px;
}

.navbar a {
  text-decoration: none;
  color: #333;
  display: block;
  padding: 10px;
  border-radius: 5px;
  background-color: #f4f4f4;
  transition: background-color 0.3s ease;
}

.navbar a.hover {
  background-color: #ccc;
}

/* 内容样式 */
.content {
  width: 75%;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.content h2 {
  color: #007bff;
  margin-bottom: 20px;
}
</style>
