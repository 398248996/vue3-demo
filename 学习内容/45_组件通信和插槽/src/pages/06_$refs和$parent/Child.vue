<template>
  <div class="child">
    <h3>弟弟组件</h3>
    <h3>玩具：{{toy}}</h3>
    <h3>书：{{sum}}本</h3>
  </div>
</template>
<script setup lang="ts" name="Child">
import {ref} from "vue";

let toy = ref('奥特曼')
let sum = ref(3)
defineExpose({sum,toy})
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px 0 black;
  border-radius: 10px;
}
</style>
