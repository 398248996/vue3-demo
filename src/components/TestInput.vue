<template>
  <div class="test">
    <input type="text" :value="modelValue" @input="emit('update:modelValue',$event.target.value)">

  </div>
</template>
<script setup lang="ts" name="TestInput">
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>
<style scoped>
.test input{
  width: 200px;
  border-radius: 10px;
}
</style>