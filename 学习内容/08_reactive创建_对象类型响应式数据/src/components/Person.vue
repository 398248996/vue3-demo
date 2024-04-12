<template>
  <div class="person">
<!--    <h3>姓名：{{ name }}</h3>-->
<!--    <h3>年龄：{{ age }}</h3>-->
<!--    <button @click="getPhone">获取手机号</button>-->
<!--    <button @click="changeAge">修改年龄</button>-->
    <h3>品牌{{ car.brand }}的汽车，价值{{car.price}}万元</h3>
    <button @click="changeBrand">变更品牌</button>
    <button @click="changePrice">变更价格</button>
    <button @click="changeCar">修改全数据</button>
  </div>
</template>
/*
reactive的用法
数据样例：Proxy(Object){brand: '奔驰', price: 20}
使用reactive修饰的对象，都会带有Proxy(Object)，证明变成响应式数据。
可通过方法进行修改对象数据。
1.reactive只能修饰对象，对象多层也ok。
2.在方法中通过reactive重新定义同一个对象，地址就会发生改变，数据将无法与原组件绑定。
3.将原对象中增加对象内容，可通过Object.assign(原对象，新对象)进行实现
*/
<script setup lang="ts" name="Person">
// import {ref} from 'vue'
//
// let name = 'Tom'
// let age = ref(23)
// let tel = '13244449999'
// console.log(age)
// function getPhone() {
//   alert(tel)
// }
//
// function changeAge() {
//   age.value += 1
// }

import {reactive} from "vue";
let car = reactive({brand:'奔驰',price:20})
console.log(car)
function changeBrand(){
  car.brand = '宝马'
}
function changePrice(){
  car.price += 10
}
function changeCar(){
  Object.assign(car,{brand:'凯迪拉克',price:100})
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