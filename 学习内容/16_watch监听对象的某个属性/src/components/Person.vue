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
    <h3>姓名：<input type="text" v-model="person2.name"></h3>
    <h3>年龄：<input type="text" v-model="person2.age"></h3>
    <h3>汽车：{{person2.flower.c1}}、{{person2.flower.c2}}</h3>
    <button @click="change2Age">修改年龄</button>
    <button @click="change2C1">修改第一朵花</button>
    <button @click="change2C2">修改第二朵花</button>
    <button @click="change2Car">修改花</button>
    <button @click="change2Person">修改整体</button>
  </div>
</template>
/*
watch 监听
情况四,监听对象的某个属性
1.watch参数：
  第一个参数为监听的基本类型属性；
  第二个参数是一个回调函数（监听数据新的值，监听数据旧的值）=>{函数体}；
  第三个参数是一个对象，其属性为{deep:true,immediate:true等等}：
    deep代表深度监听，目前监听对象时需要true；
    immediate代表是否初始渲染时就监听，如果为true,监听到的旧值为undefined
2.xxx = watch(x,()=>{},{}),调用xxx则停止监听
3.reactive和ref监听对象中的某个属性，都需要使用函数式，watch(()=>x,()=>{},{})
4.reactive和ref监听对象中的对象，都需要使用函数式+deep，watch(()=>x,()=>{},{deep:true})
----------------涉及地址值的时候需要开启深度监视-------------
*/
<script setup lang="ts" name="Person">
import {watch, reactive,ref} from 'vue'

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

// 修改person.car的时候没有监听到
// Proxy(Object) {c1: '红旗', c2: '奥迪'}Proxy(Object) {c1: '红旗', c2: '奥迪'}
// Proxy(Object) {c1: '红旗', c2: '福特'}Proxy(Object) {c1: '红旗', c2: '福特'}
/*
const stopWatch = watch(person.car,(newAge,oldAge)=>{
  console.log(newAge,oldAge)
})
*/

// 修改person.car的时候没有监听到，所以修改代码为函数式
// 修改之后测试，修改单个车又没有被监听到
// Proxy(Object){c1: '宾利', c2: 'JEEP'} Proxy(Object){c1: '红旗', c2: '福特'}
/*
const stopWatch = watch(()=>person.car,(newAge,oldAge)=>{
  console.log(newAge,oldAge)
})
*/
/*******************监听对象深层对象数据：函数式+deep*******************/
// 修改person.car代码为函数式,增加深度监听，成功！
watch(()=>person.car,(newAge,oldAge)=>{
  console.log(newAge,oldAge)
},{deep:true})

/*******************监听对象的普通属性，使用函数式*******************/
// 监听某个属性，需要使用函数式，即函数式返回一个值
// 23 22
// 24 23
// 25 24
watch(()=>person.age,(newAge,oldAge)=>{
  console.log(newAge,oldAge)
})
/*****************************你是一个分割线************************************/

let person2 = ref({name:'Bob',age:18, flower:{
    c1:'向日葵',c2:'玫瑰'
  }})

function change2Age() {
  person2.value.age +=1
}
function change2C1() {
  person2.value.flower.c1='百合'
}
function change2C2() {
  person2.value.flower.c2='牡丹'
}
function change2Car() {
  person2.value.flower={c1:'海棠',c2:'小雏菊'}
}
function change2Person() {
  Object.assign(person2,{name:'BOOB',age:22})
}
/*******************监听对象的普通属性，使用函数式*******************/
// ref与reactive，修改对象中的普通属性，都需要使用函数式
/*
watch(()=>person2.value.age,(newValue,oldValue)=>{
  console.log(newValue,oldValue)
})
*/
/*******************监听对象深层对象数据：函数式+deep*******************/
// ref与reactive，修改对象中的对象，函数式+deep
watch(()=>person2.value.flower,(newValue,oldValue)=>{
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