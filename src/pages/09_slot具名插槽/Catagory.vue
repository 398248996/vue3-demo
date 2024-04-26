<template>
  <div class="catagroy">
    <slot name="title">标题</slot>
    <slot name="content">默认内容</slot>
  </div>
</template>

<script setup lang="ts" name="Catagory">
</script>
<style scoped>
.catagroy {
  background-color: #87ebaa;
  padding: 20px;
  border-radius: 10px;
  width: 200px;
  height: 300px;
}

</style>
