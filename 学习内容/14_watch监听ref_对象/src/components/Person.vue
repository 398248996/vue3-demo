<template>
  <div class="person">
    <h3>姓名：<input type="text" v-model="person.name"></h3>
    <h3>年龄：<input type="text" v-model="person.age"></h3>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整体</button>
    <hr>
  </div>
</template>
/*
watch 监听
情况二,ref——响应式对象
1.watch参数：
  第一个参数为监听的基本类型属性；
  第二个参数是一个回调函数（监听数据新的值，监听数据旧的值）=>{函数体}；
  第三个参数是一个对象，其属性为{deep:true,immediate:true等等}：
    deep代表深度监听，目前监听对象时需要true；
    immediate代表是否初始渲染时就监听，如果为true,监听到的旧值为undefined
2.xxx = watch(x,()=>{},{}),调用xxx则停止监听
3.ref修饰对象的时候，watch监听的是对象地址是否变化。
  如果只修改对象中的属性，获取到的新旧值是一样的（第二个参数），因为引用地址没有改变。
  如果修改整体对象，则新旧值是不同的，引用地址发生改变。
*/
<script setup lang="ts" name="Person">
import {watch, ref} from 'vue'

let person = ref({name:'Tom',age:22})
// ref修饰对象的是，直接给watch监听对象，是需要设置深度监听的，否则监听失效
const stopWatch = watch(person,(newAge,oldAge)=>{
  console.log(newAge,oldAge)
  if(person.value.age >= 28)
    stopWatch()
},{deep:true,immediate:true})

// Proxy(Object){name: 'Tom', age: 25} Proxy(Object){name: 'Tom', age: 25}
function changeAge() {
  person.value.age +=1
}

// Proxy(Object){name: 'Toom', age: 26} Proxy(Object){name: 'Tom', age: 25}
function changePerson() {
  person.value ={name:'Toom',age:26}
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