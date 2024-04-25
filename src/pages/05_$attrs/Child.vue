<template>
  <div class="child">
    <h3>子组件</h3>
    <h3>玩具：{{toy}}</h3>
    <h3>乘坐父亲的车：{{car}}，{{$attrs}}</h3>
    <GrantChild v-bind="$attrs"/>
  </div>
</template>
<script setup lang="ts" name="Child">
import GrantChild from "@/pages/05_$attrs/GrantChild.vue";

import {ref} from "vue";

let toy = ref('奥特曼')
defineProps(['car'])
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px 0 black;
  border-radius: 10px;
}
</style>
