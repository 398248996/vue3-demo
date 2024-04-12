<template>
  <div class="app">
    开始！VUE3~
    <person/>
  </div>
</template>

// lang即language，使用的语言是ts
<script lang="ts">
  import Person from "@/components/Person.vue";
  // export 暴露组件
  export default {
    name:'App', // 组件名
    // eslint-disable-next-line vue/no-unused-components
    components:{Person}
  }
</script>

<style>
.app{
  background: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 20px;
  padding: 20px;
}
</style>