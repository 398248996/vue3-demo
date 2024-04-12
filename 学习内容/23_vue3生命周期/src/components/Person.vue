<template>
  <div class="person">
    <button @click="changeData">点我修改数据</button>
    <ul v-if="isShow">
      <li v-for="person in list" :key="person.name">
        <h3>姓名：{{ person.name }}</h3>
        <h3>年龄：{{ person.age }}</h3>
        <h3>地址：{{ person.address }}</h3>
        <h3>工作经历：
          <li v-for="w in person.work" :key="w.company">
            <h3>公司名称：{{ w.company }}</h3>
            <h3>年限：{{ w.start }}~{{ w.end }}</h3>
            <h3>岗位：{{ w.post }}</h3>
          </li>
        </h3>
        <hr>
      </li>
    </ul>
  </div>
</template>
/*
vue3
创建：setup
挂载：onBeforeMount(挂载前) onMounted(挂载完毕)
更新：onBeforeUpdate(更新前) onUpdated(更新完毕)
卸载：onBeforeUnmount(卸载前) onUnmounted(卸载完毕)
*/
<script setup lang="ts" name="Person">
import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref} from 'vue';
import {type PersonList} from "@/type/person";
let isShow = ref(true)
// 接受值+限制类型+默认值+必要性
defineProps<{ list?: PersonList }>()
function changeData(){
  isShow.value = false
}
onBeforeMount(() => {
  console.log('生命周期之——挂载前')
})
onMounted(() => {
  console.log('生命周期之——挂载完毕')
})
onBeforeUpdate(() => {
  console.log('生命周期之——更新前')
})
onUpdated(() => {
  console.log('生命周期之——更新完毕')
})
onBeforeUnmount(() => {
  console.log('生命周期之——销毁前')
})
onUnmounted(() => {
  console.log('生命周期之——销毁完毕')
})
</script>
<style scoped>
.person {
  background-color: #367d6c;
  border-radius: 20px;
  box-shadow: 0 0 10px;
  padding: 40px;
}

button {
  margin: 5px;
}
</style>
