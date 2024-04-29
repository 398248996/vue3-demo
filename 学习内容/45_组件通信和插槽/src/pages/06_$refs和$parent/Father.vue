<template>
  <div class="father">

    <h3>父组件</h3>
    <h3>车型：{{ car }}</h3>

    <button @click="updateA">弟弟多看一本书</button>
    <button @click="updateB">哥哥多看两本书</button>
    <button @click="addToy($refs)">一人一个玩具</button>
    <div style="color:red">
      <h3>子传父</h3>
      使用ref可以获取到单个子组件暴露的对象<br/>
      使用$refs可以获取到全部子组件暴露的对象<br/>
      <h3>父传子</h3>
      子组件使用$parent可以获取到父组件暴露的对象<br/>
    </div>
    <Child ref="c"/>
    <Child1 ref="c1"/>

  </div>
</template>

<script setup lang="ts" name="Father">
import Child from "@/pages/06_$refs和$parent/Child.vue";
import Child1 from "@/pages/06_$refs和$parent/Child1.vue";
import {ref} from "vue";

let car = ref('奥迪')
let c = ref()
let c1 = ref()

function updateB() {
  c1.value.sum1 += 2
}

function updateA() {
  c.value.sum += 1
}

function addToy(obj: any) {
  obj.c.toy += '、小汽车'
  obj.c1.toy += '、小汽车'
}
defineExpose({car})
</script>
<style scoped>
.father {
  background-color: #dddddd;
  padding: 20px;
  border-radius: 10px;
}
</style>
