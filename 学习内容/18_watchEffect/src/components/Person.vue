<template>
  <div class="person">
    <h3>水温：{{ temp }}℃</h3>
    <h3>水位：{{ height }}cm</h3>
    <button @click="changeTemp">水温升高</button>
    <button @click="changeHeight">水位升高</button>
    <hr>
  </div>
</template>
/*

watchEffect监听，立即运行一个函数，同时响应式追踪数据的依赖，并在依赖更改时重新执行其函数
简单理解，可以不用指定监听对象，自动监听函数中所用到的响应式数据
watchEffect(()=>{})
*/
<script setup lang="ts" name="Person">
import {ref, watchEffect} from 'vue'

let temp = ref(20)
let height = ref(0)

function changeTemp() {
  temp.value += 10
}

function changeHeight() {
  height.value += 10
}

watchEffect(() => {
  if (temp.value >= 50 || height.value >= 60){
    console.log('警告，温度过高或水位过高')
  }
})
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