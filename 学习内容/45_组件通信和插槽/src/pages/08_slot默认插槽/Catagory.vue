<template>
  <div class="catagroy">
    <h3>{{ title }}</h3>
    <slot>默认内容</slot>
  </div>
</template>

<script setup lang="ts" name="Catagory">
defineProps(['title'])
</script>
<style scoped>
.catagroy {
  background-color: #87ebaa;
  padding: 20px;
  border-radius: 10px;
  width: 200px;
  height: 300px;
}

h3 {
  background-color: #d9c858;
}
</style>
