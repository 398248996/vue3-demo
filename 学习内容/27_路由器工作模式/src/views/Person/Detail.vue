<template>
  <div class="detail">
    <button @click="delPerson">点我修改数据</button>
    <ul v-if="isShow">
      <li v-for="person in list" :key="person.name">
        <h3>姓名：{{ person.name }}</h3>
        <h3>年龄：{{ person.age }}</h3>
        <h3>地址：{{ person.address }}</h3>
        <h3>工作经历：
          <li v-for="w in person.work" :key="w.company">
            <h3>公司名称：{{ w.company }}</h3>
            <h3>年限：{{ w.start }}~{{ w.end }}</h3>
            <h3>岗位：{{ w.post }}</h3>
          </li>
        </h3>
        <hr>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts" name="Person">
import hooksShow from "@/hooks/isShow";
import hooksPerson from "@/hooks/person";

const {isShow,changeShow} = hooksShow()
const {list,delPerson}=hooksPerson()

</script>
<style scoped>
.person {
  text-align: left;
}

button {
  margin: 5px;
}
</style>
