<template>
  <div class="child1">
    <h3>哥哥组件</h3>
    <button @click="getCar($parent)">用父亲的车</button>
    <h3>玩具：{{toy}}</h3>
    <h3>书：{{sum1}}本</h3>
  </div>
</template>
<script setup lang="ts" name="Child1">
import {ref} from "vue";

let toy = ref('小猪佩奇')
let sum1 = ref(5)

defineExpose({sum1,toy})
function getCar(father: any){
  father.car+='，被哥哥偷偷开着，跑了50公里'
}
</script>

<style scoped>
.child1 {
  background-color: #87eba7;
  padding: 10px;
  box-shadow: 0 0 10px 0 black;
  border-radius: 10px;
}
</style>
