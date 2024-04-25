<template>
  <div class="child">
    <h3>儿子组件，这一pa没用</h3>
    <GrantChild/>
  </div>
</template>
<script setup lang="ts" name="Child">
import GrantChild from "@/pages/07_inject和provide/GrantChild.vue";
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px 0 black;
  border-radius: 10px;
}
</style>
