<template>
  <div class="count">
    <h3>当前求和为：{{useCountStore().sum}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>
<script setup lang="ts">
  import {useCountStore} from "@/store/count";
  import {ref} from "vue";
  let sum = ref(1)
  let n = ref(1)
  function add(){
    sum.value += n.value
  }
  function minus(){
    sum.value -= n.value
  }
</script>
<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select, button {
  margin: 0 5px;
  height: 25px;
}
</style>
