<template>
  <div class="app">
    <person :list="personList" v-if="isShow"/>
    <button @click="changeShow">点我卸载组件</button>
  </div>
</template>
<!-- lang即language，使用的语言是ts-->
<script lang="ts" setup name="App">
  import Person from "@/views/Person/Person.vue";

  import {type PersonList} from "@/type/person";
  import {reactive, ref} from "vue";
  let isShow = ref(true);
  function changeShow(){
    isShow.value = false;
  }
  let personList = reactive<PersonList>([{
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
  }])
</script>

<style>
.app{
  background: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 20px;
  padding: 20px;
}
</style>
