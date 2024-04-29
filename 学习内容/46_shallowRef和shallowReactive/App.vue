<template>
  <!-- 标题 -->
  <div class="title">
    <h1>Vue3 组件间通信</h1>
  </div>

  <!-- 主体布局 -->
  <div class="container">
    <!-- 内容 -->
    <div class="content">
      <h2>ShallowRef</h2>
      <h3>ShallowRef 姓名: {{personShallowRef}}</h3>
      <h3 style="color:red">ShallowRef浅层次ref,只能修改ref中对象的.value值，多一层都不好用。所以修改姓名不好用，修改整体好用</h3>
      <button @click="changeShallowName">修改姓名</button>
      <button @click="changeShallowAll">修改全部</button>
      <hr>
      <h2>shallowReactive</h2>
      <h3>ShallowReactive 姓名: {{personShallowReactive}}</h3>
      <h3 style="color:red">ShallowReactive浅层次reactive,只能修改reactive中对象的最外层值，多一层都不好用。所以修改姓名不好用，修改孩子姓名好用。</h3>
      <h3 style="color:red">替换整体需要用到object.assign</h3>
      <button @click="changeShallowReactiveName">修改姓名</button>
      <button @click="changeShallowReactiveChild">修改孩子姓名</button>
      <button @click="changeShallowReactiveAll">修改全部</button>
    </div>
  </div>
</template>
<script setup lang="ts" name="app">
import {shallowReactive, shallowRef} from "vue";

let personShallowRef = shallowRef({name:'Ref',age:22,child:[{name:'Ref LL',age:1}]})
function changeShallowName(){
  personShallowRef.value.name = 'ShallowRef1'
}
function changeShallowAll(){
  personShallowRef.value = {name:'ShallowRef1',age: 24,child: [{name:'Ref LL',age:3}]}
}
/*********** shallowReactive **********/
let personShallowReactive = shallowReactive({name:'Reactive',age:22,child: {name:'Reactive LL',age:3}})
function changeShallowReactiveName(){
  personShallowReactive.name = 'Reactive1'
}
function changeShallowReactiveChild(){
  personShallowReactive.child.name = 'Reactive MM'
}
function changeShallowReactiveAll(){
  Object.assign(personShallowReactive,{name:'ShallowRactive1',age: 24,child: [{name:'Ref LL',age:3}]})
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
