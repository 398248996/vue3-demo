<template>
  <div class="child">
    <h3>子组件</h3>
    <h3>玩具：{{ toy }}</h3>
    <h3>父亲开{{ car }}车送我去学校</h3>

  </div>
</template>
<script setup lang="ts" name="Child">
import emitter from "@/utils/emitter";
import {onUnmounted, ref} from "vue";

let toy = ref('奥特曼')
let car = ref('')
emitter.on('send-car', (val:any) => {
  car.value = val
})
onUnmounted(()=>{
  console.log('组件卸载，解绑emitter')
  emitter.off('send-car')
})
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px 0 black;
  border-radius: 10px;
}
</style>
