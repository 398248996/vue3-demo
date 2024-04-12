<template>
  <div class="person">
    <ul>
      <li v-for="person in personList" :key="person.name">
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
/*
通过ts定义对象接口，通过export关键字暴露对象给组件使用，书写格式：
export interface xxx{
  xxx:string
  xx?:string  // ?代表这个字段可有可无
}
对象中的属性需要指定数据类型
可在ts中，定义type泛型
*/
<script setup lang="ts" name="Person">
import {type PersonList} from "@/type/person";

let personList: PersonList = [{
  name: 'Tom',
  address: '北京市朝阳区',
  age: 22,
  work: [{company: '美团', start: '2022-10-10', end: '2023-11-14', post: '技术总监'},
    {company: '京东', start: '2020-10-10', end: '2022-09-14', post: '研发工程师'}]
}, {
  name: 'Bob',
  address: '北京市海淀区',
  age: 20,
  work: [{company: '粉笔', start: '2022-10-10', end: '2023-11-14', post: '主管'},
    {company: '学大', start: '2020-10-10', end: '2022-09-14', post: '讲师'}]
}]
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