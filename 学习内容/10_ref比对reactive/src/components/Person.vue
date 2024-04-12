<template>
  <div class="person">
    <h3>姓名：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3>
    <button @click="getPhone">获取手机号</button>
    <button @click="changeAge">修改年龄</button>
    <hr>
    <h3>品牌{{ car.brand }}的汽车，价值{{ car.price }}万元</h3>
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
ref和reactive区别
1.ref修改变量的值必须使用xxx.value
2.reactive修改整个对象的时候，只能使用Object.assign(原对象，新对象)
3.ref可以修饰基本类型、对象，reactive只能修饰对象
4.若响应式对象层级较深，建议使用reactive
*/
<script setup lang="ts" name="Person">
import {ref, reactive} from 'vue'

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

function changeBrand() {
  car.brand = '宝马'
}

function changePrice() {
  car.price += 10
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