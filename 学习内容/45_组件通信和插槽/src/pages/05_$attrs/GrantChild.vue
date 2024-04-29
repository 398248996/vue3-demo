<template>
  <div class="grantChild">
    <h3>子组件</h3>
    <h3>玩具：{{toy}}</h3>
    <h3>A:{{$attrs.a}}</h3>
    <h3>B:{{$attrs.b}}</h3>
    <h3>C:{{$attrs.c}}</h3>
    <button @click="$attrs.updateA">改变A的值</button>
  </div>
</template>
<script setup lang="ts" name="GrantChild">
import {ref} from "vue";

let toy = ref('奥特曼')
</script>

<style scoped>
.grantChild {
  background-color: #87eba7;
  padding: 10px;
  box-shadow: 0 0 10px 0 black;
  border-radius: 10px;
}
</style>
