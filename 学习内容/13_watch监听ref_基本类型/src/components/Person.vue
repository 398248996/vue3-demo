<template>
  <div class="person">
    <h3>姓名：<input type="text" v-model="name"></h3>
    <h3>年龄：<input type="text" v-model="age"></h3>
    <button @click="changeAge">修改年龄</button>
    <hr>
  </div>
</template>
/*
watch 监听
情况一,ref——响应式数据
1.watch第一个参数为监听的基本类型属性，第二个参数是一个回调函数（监听数据新的值，监听数据旧的值）=>{函数体}
2.xxx = watch,调用xxx则停止监听
3.ref修饰基本类型的时候，watch监听的是数据的变化
*/
<script setup lang="ts" name="Person">
import {watch, ref} from 'vue'

let name = 'Tom'
let age = ref(23)

const stopWatch = watch(age,(newAge,oldAge)=>{
  console.log(newAge,oldAge)
  if(age.value >= 28)
    stopWatch()
})

function changeAge() {
  age.value +=1
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