<template>
  <div class="child">
    <h3>子组件</h3>
    <h3>玩具：{{toy}}<button @click="emit('child-send',toy)">玩具给父亲</button></h3>
  </div>
</template>
<script setup lang="ts" name="Child">
import {onMounted, ref} from "vue";

let toy = ref('奥特曼')
const emit = defineEmits(['child-send'])
// onMounted(()=>{
//   setTimeout(()=>{
//     emit('zf')
//   },2000)
// })
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px 0 black;
  border-radius: 10px;
}
</style>
