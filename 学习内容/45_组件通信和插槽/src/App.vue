<template>
  <!-- 标题 -->
  <div class="title">
    <h1>Vue3 组件间通信</h1>
  </div>

  <!-- 主体布局 -->
  <div class="container">
    <!-- 导航 -->
    <div class="navbar">
      <router-link to="/props" active-class="hover">01_prop</router-link>
      <router-link to="/event" active-class="hover">02_event</router-link>
      <router-link to="/mitt" active-class="hover">03_miit</router-link>
      <router-link to="/vmodel" active-class="hover">04_v-model</router-link>
      <router-link to="/attrs" active-class="hover">05_attrs</router-link>
      <router-link to="/refsOrParent" active-class="hover">06_$refs和$parent</router-link>
      <router-link to="/injectOrProvide" active-class="hover">07_inject和provide</router-link>
      <router-link to="/slotDefault" active-class="hover">08_slot默认插槽</router-link>
      <router-link to="/slotName" active-class="hover">09_slot具名插槽</router-link>
      <router-link to="/slotScope" active-class="hover">10_slot作用域插槽</router-link>
    </div>

    <!-- 内容 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup lang="ts" name="app">
import {RouterLink, RouterView} from "vue-router";
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
