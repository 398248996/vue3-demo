<template>
  <div class="person">
    <h3>姓名：<input type="text" v-model="person.name"></h3>
    <h3>年龄：<input type="text" v-model="person.age"></h3>
    <h3>汽车：{{person.car.c1}}、{{person.car.c2}}</h3>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一个车</button>
    <button @click="changeC2">修改第二个车</button>
    <button @click="changeCar">修改车</button>
    <button @click="changePerson">修改整体</button>
    <hr>
  </div>
</template>
/*
watch 监听
情况五,监听对象的多个属性
1.watch参数：
  第一个参数为监听的基本类型属性；
  第二个参数是一个回调函数（监听数据新的值，监听数据旧的值）=>{函数体}；
  第三个参数是一个对象，其属性为{deep:true,immediate:true等等}：
    deep代表深度监听，目前监听对象时需要true；
    immediate代表是否初始渲染时就监听，如果为true,监听到的旧值为undefined
2.xxx = watch(x,()=>{},{}),调用xxx则停止监听
3.监听多个，使用数组包裹在内，watch([()=>x,()=>xx],()=>{},{})
----------------涉及地址值的时候需要开启深度监视-------------
*/
<script setup lang="ts" name="Person">
import {watch, reactive} from 'vue'

let person = reactive({name:'Tom',age:22, car:{
  c1:'宝马',c2:'奥迪'
  }})

// Proxy(Object){name: 'Tom', age: 25} Proxy(Object){name: 'Tom', age: 25}
function changeAge() {
  person.age +=1
}
function changeC1() {
  person.car.c1='红旗'
}
function changeC2() {
  person.car.c2='福特'
}
function changeCar() {
  person.car={c1:'宾利',c2:'JEEP'}
}
// Proxy(Object){name: 'Toom', age: 26} Proxy(Object){name: 'Tom', age: 25}
function changePerson() {
  Object.assign(person,{name:'Toom',age:26})
}

watch([()=>person.age,()=>person.car],(newValue,oldValue)=>{
  console.log(newValue,oldValue)
},{deep:true})
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