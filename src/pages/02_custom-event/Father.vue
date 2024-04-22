<template>
  <div class="father">
    <h3>父组件</h3>
    <h3>车型：{{ car }}</h3>
    <h3>获得儿子的玩具：{{ toy }}</h3>
    <Child @child-send="getChild"/>
    <h3>
      自定义方式<br>
      父 ：通过引用组件的地方设置函数，事件命名使用’串‘（xxx-xxx）格式，函数名使用驼峰；父实现函数<br>
      子 ：通过defineEmits接事件名，通过点击、监听等事件触发emit('xxx-xxx',传递的数据)<br>
      子 传 父 ：触发写在子<br>
    </h3>
  </div>

</template>
<script setup lang="ts" name="Father">
import Child from "@/pages/02_custom-event/Child.vue";
import {ref} from "vue";
let toy = ref('')
let car = ref('保时捷')
function getChild(value:string){
  console.log('获取儿子数据',value)
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
