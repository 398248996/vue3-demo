<template>
  <div class="app">
    <person ref="one"/>
  </div>
</template>
// lang即language，使用的语言是ts
<script lang="ts" setup name="App">
  import Person from "@/components/Person.vue";
  import {ref} from "vue";
  let one = ref()
  // 如果需要组件暴露对象等，需要defineExpose
  console.log(one)
</script>

<style>
.app{
  background: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 20px;
  padding: 20px;
}
</style>