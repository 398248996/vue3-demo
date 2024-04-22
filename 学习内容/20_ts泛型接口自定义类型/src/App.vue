<template>
  <div class="app">
    <person/>
  </div>
</template>
// lang即language，使用的语言是ts
<script lang="ts" setup name="App">
  import Person from "@/views/Person/Person.vue";
</script>

<style>
.app{
  background: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 20px;
  padding: 20px;
}
</style>
