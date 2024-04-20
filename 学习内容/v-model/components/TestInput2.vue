<template>
  <div class="test">
    <input type="text" :value="modelValue" @input="emit('update:modelValue',$event.target.value)">
    <input type="text" :value="m2value" @input="emit('update:m2value',$event.target.value)">

  </div>
</template>
<script setup lang="ts" name="TestInput">
defineProps(['modelValue','m2value'])
const emit = defineEmits(['update:modelValue','update:m2value'])
</script>
<style scoped>
.test input{
  width: 200px;
  border-radius: 10px;
}
</style>