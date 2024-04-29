<template>
  <div class="father">
    <h3>父组件</h3>
    <h3>车型：{{ car }}</h3>
    <h3>
      <button @click="emitter.emit('send-car',car)">汽车给儿子</button>
    </h3>
    <Child/>
    <div style="color:red">
      <h3>
        mitt方式<br>
        安装 npm i mitt<br>
        创建工具类 utils/emitter.ts<br>
        main.ts 引入emitter.ts<br>
        父 传 子 ：触发写在父，传递数据；<br>
        父：通过绑定事件触发emit,传递值；<br>
        子：通过on绑定事件,获取值；<br>
      </h3>
    </div>
  </div>

</template>
<script setup lang="ts" name="Father">
import Child from "@/pages/03_mitt/Child.vue";
import {ref} from "vue";
import emitter from "@/utils/emitter";

let car = ref('奥迪')

</script>


<style scoped>
.father {
  background-color: #dddddd;
  padding: 20px;
  border-radius: 10px;
}
</style>
