<template>
  <div class="person">
    <h3>姓名：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3>
    <button @click="getPhone">获取手机号</button>
    <button @click="changeAge">修改年龄</button>
    <hr>
    <h3>品牌{{ brand }}的汽车，价值{{ price }}万元</h3>
    <button @click="changeBrand">变更品牌</button>
    <button @click="changePrice">变更价格</button>
    <button @click="changeCar">修改全数据</button>
    <hr>
    <ul>
      <li v-for="b in brands" :key="b.id">{{ b.bran }}：{{b.price}}</li>
    </ul>
    <button @click="changePriceById">修改价格</button>
  </div>
</template>
/*
torefs与toref
两者都是用于解构的，类似于浅拷贝，复制引用+响应式
将响应式对象拆解成响应式数据
torefs是将响应式对象的全部属性，全部拆解成响应式数据,数据结构：{brand: ObjectRefImpl, price: ObjectRefImpl}
toref是将响应式对象中的某一个属性，拆解成响应式数据
*/
<script setup lang="ts" name="Person">
import {ref, reactive,toRef,toRefs} from 'vue'

let name = 'Tom'
let age = ref(23)
let tel = '13244449999'

function getPhone() {
  alert(tel)
}

function changeAge() {
  age.value += 1
}

let brands = reactive([{id: 1, bran: '奔驰', price: 20}, {id: 2, bran: '宝马', price: 40}, {
  id: 3,
  bran: '凯迪拉克',
  price: 120
}])

function changePriceById() {
  brands.forEach((brand) => {
    if (brand.id == 1) brand.price += 120
  })
}

let car = reactive({brand: '奔驰', price: 20})
// 将car解构
let {brand,price} = toRefs(car)
//{brand: ObjectRefImpl, price: ObjectRefImpl}
console.log(toRefs(car))
// 将car解构，取出price响应式数据
let jg = toRef(car,'price')
function changeBrand() {
  brand.value = '宝马'
}

function changePrice() {
  jg.value += 10
}

function changeCar() {
  Object.assign(car, {brand: '凯迪拉克', price: 100})
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