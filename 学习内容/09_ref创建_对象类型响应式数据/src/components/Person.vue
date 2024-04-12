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
ref的用法
数据样例：
RefImpl {__v_isShallow: false, dep: undefined, __v_isRef: true, _rawValue: {…}, _value: Proxy(Object)}
dep:Map(1) {ReactiveEffect => 1}
__v_isRef:true
__v_isShallow:false
_rawValue:{brand: '奔驰', price: 20}
_value:Proxy(Object) {brand: '奔驰', price: 20}
value:Proxy(Object)
[[Prototype]]:Object
从数据结构可看出ref修饰对象数据时，其实就是ref中调用了reactive
因为ref的对象，xxx.value还是Proxy(Object)的数据结构
1.ref可以修饰对象数据，修改值的方式需要xxx.value.xx
2.将原对象中增加对象内容，可直接通过xxx.value={}进行修改
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

import {ref} from "vue";
let car = ref({brand:'奔驰',price:20})
console.log(car)
function changeBrand(){
  car.value.brand = '宝马'
}
function changePrice(){
  car.value.price += 10
}
function changeCar(){
  car.value = {brand:'凯迪拉克',price:100}
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