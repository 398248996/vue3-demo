<template>
  <div class="grantChild">
    <h3>子组件</h3>
    <h3>玩具：{{ toy }}</h3>
    <!--    <ul>-->
    <!--      <li v-for="b in brandsObj" :key="b.id">{{ b.bran }}：{{b.price}}</li>-->
    <!--    </ul>-->
    <button @click="addBrand(brand)">增加一辆车</button>
    <ul>
      <li v-for="b in brands" :key="b.id">{{ b.bran }}：{{ b.price }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts" name="GrantChild">
import {inject, ref, reactive} from "vue";

let toy = ref('奥特曼')

// let brandsObj = inject('brandsObj',[{id:1,bran:'暂无',price:0}])
let {brands, addBrand} = inject('brandsObj', {
  brands: [{id: 1, bran: '暂无', price: 0}], addBrand: (obj: any) => {
  }
})

let brand = reactive({
  id: 4,
  bran: '宾利',
  price: 12000
})

</script>

<style scoped>
.grantChild {
  background-color: #87eba7;
  padding: 10px;
  box-shadow: 0 0 10px 0 black;
  border-radius: 10px;
}
</style>
