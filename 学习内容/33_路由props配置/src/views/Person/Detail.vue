<template>
  <div class="detail">
    <h3>姓名：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3>
    <h3>地址：{{ address }}</h3>
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
// import {useRoute} from "vue-router";
// import {toRefs} from "vue";
// const route = useRoute()
// const {params} = toRefs(route)
defineProps(['name','age','address'])
</script>
<style scoped>

</style>
