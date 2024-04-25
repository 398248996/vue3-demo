<template>
  <div class="father">
    <h3>父组件</h3>
    <ul>
      <li v-for="b in brands" :key="b.id">{{ b.bran }}：{{b.price}}</li>
    </ul>
    <div style="color:red">
      <h3>父传子</h3>
      provide(key,value)提供数据给子组件<br/>
      子组件中，inject获取祖父/父数据<br/>
      <h3>子传父</h3>
      provide提供给子组件调整数据的函数<br/>
      子组件调用函数传参<br/>
    </div>
    <Child/>
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from "@/pages/07_inject和provide/Child.vue";
import {provide,reactive} from "vue";

let brands = reactive([{id: 1, bran: '奔驰', price: 20}, {id: 2, bran: '宝马', price: 40}, {
  id: 3,
  bran: '凯迪拉克',
  price: 120
}])
function addBrand(brand){
  brands.push(brand)
}
provide('brandsObj',{brands,addBrand})
</script>
<style scoped>
.father {
  background-color: #dddddd;
  padding: 20px;
  border-radius: 10px;
}
</style>
