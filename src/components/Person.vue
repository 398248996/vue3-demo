<template>
  <div class="person">
    <ul>
      <li v-for="person in list" :key="person.name">
        <h3>姓名：{{person.name}}</h3>
        <h3>年龄：{{person.age}}</h3>
        <h3>地址：{{person.address}}</h3>
        <h3>工作经历：
          <li v-for="w in person.work" :key="w.company">
            <h3>公司名称：{{w.company}}</h3>
            <h3>年限：{{w.start}}~{{w.end}}</h3>
            <h3>岗位：{{w.post}}</h3>
          </li>
        </h3>
        <hr>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts" name="Person">
import {type PersonList} from "@/type/person";
// 接受值+限制类型+默认值+必要性
withDefaults(defineProps<{list?:PersonList}>(),{
  list:()=>[{
    name: '默认测试数据',
    address: '北京市朝阳区',
    age: 22,
    work: [{company: '美团', start: '2022-10-10', end: '2023-11-14', post: '技术总监'},
      {company: '京东', start: '2020-10-10', end: '2022-09-14', post: '研发工程师'}]
  }]
})

</script>
<style scoped>
.person {
  background-color: #367d6c;
  border-radius: 20px;
  box-shadow: 0 0 10px;
  padding: 40px;
}

button {
  margin: 5px;
}
</style>