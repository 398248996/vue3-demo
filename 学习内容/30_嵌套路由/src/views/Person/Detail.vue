<template>
  <div class="detail">
<!--    <h3>姓名：{{ person.name }}</h3>-->
<!--    <h3>年龄：{{ person.age }}</h3>-->
<!--    <h3>地址：{{ person.address }}</h3>-->
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
<script setup lang="ts" name="Person">
import hooksShow from "@/hooks/isShow";
import hooksPerson from "@/hooks/person";

const {isShow, changeShow} = hooksShow()
const {list, delPerson} = hooksPerson()

</script>
<style scoped>

</style>
