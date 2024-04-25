<template>
  <div class="father">
    <h3>父组件</h3>
    <h3>车型：{{ car }}</h3>
    <h3>获得儿子的玩具：{{ toy }}</h3>
    <Child :car="car" :sendToy="getToy"/>
    <div style="color:red">
    <h3>props方式</h3>
    <h3>父 ：通过引用组件的地方传递数据</h3>
    <h3>子 ：通过defineProps获取父数据、函数</h3>
    <h3>父 传 子 ：触发写在父，传递数据；</h3>
    <h3>子 传 父 ：触发写在子，传递函数；</h3>
    </div>
  </div>

</template>

<script setup lang="ts" name="Father">
import Child from "@/pages/01_props/Child.vue";
import {ref} from "vue";

let car = ref('奥迪')
let toy = ref('')

function getToy(value: string) {
  console.log('获得儿子的玩具', value)
  toy.value = value
}
</script>
<style scoped>
.father {
  background-color: #dddddd;
  padding: 20px;
  border-radius: 10px;
}
</style>
