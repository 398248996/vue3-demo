<template>
  <div class="person">
    <h3 ref="title">水温：{{ temp }}℃</h3>
    <h3>水位：{{ height }}cm</h3>
    <button @click="changeTemp">水温升高</button>
    <button @click="changeHeight">水位升高</button>
    <hr>
  </div>
</template>
/*
ref的使用
可以放在模板上，用于获取模板标签
可以放在组件上，用于获取组件
scoped的使用
style中使用scoped，可以将样式设置为当前vue私有的样式，不会应为class名字相同被混淆
*/
<script setup lang="ts" name="Person">
import {ref} from 'vue'
let title = ref()
let temp = ref(20)
let height = ref(0)

function changeTemp() {
  // 输出 h3
  console.log(title)
  temp.value += 10
}

function changeHeight() {
  height.value += 10
}

defineExpose({temp,height})
</script>
<style scoped>
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