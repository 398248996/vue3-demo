<template>
  <div class="detail">
    <h3>姓名：{{ query.name }}</h3>
    <h3>年龄：{{ query.age }}</h3>
    <h3>地址：{{ query.address }}</h3>
<!--    <h3>工作经历：-->
<!--      <li v-for="w in person.work" :key="w.company">-->
<!--        <h3>公司名称：{{ w.company }}</h3>-->
<!--        <h3>年限：{{ w.start }}~{{ w.end }}</h3>-->
<!--        <h3>岗位：{{ w.post }}</h3>-->
<!--      </li>-->
<!--    </h3>-->
    <hr>
  </div>
</template>
<script setup lang="ts" name="Detail">
import {useRoute} from "vue-router";
import {toRefs} from "vue";
const route = useRoute()
const {query} = toRefs(route)
</script>
<style scoped>

</style>
