<template>
  <Header/>
  <div class="navbar">
<!--
  to的两种写法
    1.字符串
    2.对象
    -->
    <router-link to="/home" active-class="hover">首页</router-link>
<!--    <router-link :to="{path:'/person'}" active-class="hover">人员</router-link>-->
    <router-link :to="{name:'person'}" active-class="hover">人员</router-link>

  </div>
  <div class="content">
    <router-view></router-view>
  </div>
</template>
<!-- lang即language，使用的语言是ts-->
<script lang="ts" setup name="App">
import Header from "@/components/Header.vue";
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
