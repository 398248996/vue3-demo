<template>
  <div class="talk">
    <button @click="useLoveTalkStore().getTalk()">获取一句土味情话</button>
    <ul v-for="talk in talkList" :value="talk.id">
      <li>{{ talk.title }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts" name="LoveTalk">
import {useLoveTalkStore} from "@/store/loveTalk";
import {storeToRefs} from "pinia";
// storeToRefs 可以解构store的数据
const {talkList} = storeToRefs(useLoveTalkStore())
useLoveTalkStore().$subscribe(
    (mutation, state) => {
      console.log('数据发生变化时，打印，起到监听数据的作用')
      // mutation 可以查看到修改的数据
      console.log('mutation:',mutation)
      // state 可以查看到全部数据
      console.log('state:',state)
      localStorage.setItem('talkList',JSON.stringify(talkList.value))
    }
)
</script>
<style scoped>
.talk {
  margin-top: 20px;
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>
