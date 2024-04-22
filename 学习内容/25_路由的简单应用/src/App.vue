<template>
  <div class="title"><h1>这是一个练习路由的demo</h1></div>
  <div class="navbar">
    <router-link to="/home" active-class="hover">首页</router-link>
    <router-link to="/person" active-class="hover">人员</router-link>
  </div>
  <div class="content">
    <router-view></router-view>
  </div>
</template>
<!-- lang即language，使用的语言是ts-->
<script lang="ts" setup name="App">
import {RouterView, RouterLink} from 'vue-router'
</script>

<style>
/* 全局样式 */
body {
  margin: 20px;
  font-family: Arial, sans-serif;
  color: #333;
  border-radius: 20px;
  box-shadow: 0 0 10px;
  padding: 40px;
}
/* 标题样式 */
.title {
  color: #42b983;
  text-align: center;
}
/* 导航样式 */
.navbar {
  background-color: #dddddd;
  padding: 15px 0;
  text-align: center;
}
.navbar a {
  text-decoration: none;
  color: #fff;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  background-color: #42b983;
  transition: background-color 0.3s ease;
}
.navbar a.hover {
  color: #2c3e50;
}
/* 内容样式 */
.content {
  margin-top: 20px;
}
.content h2 {
  color: #42b983;
}
</style>
