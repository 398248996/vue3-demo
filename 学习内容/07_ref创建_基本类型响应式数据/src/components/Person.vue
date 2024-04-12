<template>
  <div class="person">
    <h3>姓名：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3>
    <button @click="getPhone">获取手机号</button>
    <button @click="changeAge">修改年龄</button>

  </div>
</template>
/*
ref的用法
用于基础类型数据，将基础类型变成响应式。
如果使用ref，触发方法数据是不会发生改变的。
以下是通过ref修饰之后的数据格式：
  RefImpl {__v_isShallow: false, dep: undefined, __v_isRef: true, _rawValue: 23, _value: 23}
  dep:Map(1) {ReactiveEffect => 1}
  __v_isRef:true
  __v_isShallow:false
  _rawValue:23
  _value:23
  value:23
修改数据时，需要使用xxx.value的方式进行修改
*/
<script setup lang="ts" name="Person">
import {ref} from 'vue'

let name = 'Tom'
let age = ref(23)
let tel = '13244449999'
console.log(age)
function getPhone() {
  alert(tel)
}

function changeAge() {
  age.value += 1
}
</script>
<style>
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