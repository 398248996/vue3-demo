<template>
  <div class="father">
    <h3>父组件</h3>
    <h3>车型：{{ car }}</h3>
    <Child :car="car" :c="1" :a="a" :b="3" :updateA="updateA"/>
    <div style="color:red">
      <h3>子/孙组件可以通过$attrs获取父/祖父的全部传递的数据和事件</h3>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from "@/pages/05_$attrs/Child.vue";

import {ref} from "vue";

let car = ref('奥迪')
let a = ref(1)

function updateA() {
  a.value += 1
}
</script>
<style scoped>
.father {
  background-color: #dddddd;
  padding: 20px;
  border-radius: 10px;
}
</style>
