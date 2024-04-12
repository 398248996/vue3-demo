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
/*
defineProps用于接收父组件传的值
1.父组件传值时需:xxx='',子组件取值defineProps(['xxx'])
2.子组件限制父传值数据格式：defineProps<{xxx:数据类型}>()
3.接受值+限制类型+默认值+必要性:
?代表非必传
withDefaults（x,a:()=>{}）可以用来设置默认值,a代表默认值
withDefaults(defineProps<{list?:PersonList}>(),{
list:()=>[{
name: '默认测试数据',
address: '北京市朝阳区',
age: 22,
work: [{company: '美团', start: '2022-10-10', end: '2023-11-14', post: '技术总监'},
{company: '京东', start: '2020-10-10', end: '2022-09-14', post: '研发工程师'}]
}]
})
*/
<script setup lang="ts" name="Person">
import {type PersonList} from "@/type/person";

// 直接接收父组件传的值
//defineProps(['list'])

// 将接受的值重新定义
// let persons = defineProps(['list'])
// let list = persons.list

// 对接受的父组件传值类型进行条件限制:接受值+限制类型
// defineProps<{list:PersonList}>()

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