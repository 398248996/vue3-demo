<template>
  <div class="count">
    <h3>当前求和为：{{useCountStore().sum}}</h3>
    <h3>{{useCountStore().name}}参加了{{useCountStore().program}},地址位于{{useCountStore().address}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>
<script setup lang="ts">
  import {useCountStore} from "@/store/count";
  import {ref} from "vue";
  let n = ref(1)
  /*第一种修改数据方式*/
  // function add(){
  //   useCountStore().sum += n.value
  // }
  // function minus(){
  //   useCountStore().sum -= n.value
  // }
  /*第二种修改数据方式：useCountStore().$patch，$patch是碎片式，可以修改多个参数*/
  // function add(){
  //   useCountStore().$patch({
  //     sum: useCountStore().sum+n.value,
  //     name: 'Alsa'
  //   })
  // }
  // function minus(){
  //   useCountStore().$patch({
  //     sum: useCountStore().sum-n.value,
  //     name: 'Ai'
  //   })
  // }
  /*第三种修改数据方式*/
  function add(){
    useCountStore().increment(n.value)
  }
  function minus(){
    useCountStore().decrement(n.value)
  }
</script>
<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select, button {
  margin: 0 5px;
  height: 25px;
}
</style>
