<template>
  <div class="talk">
    <button @click="getTalk">获取一句土味情话</button>
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
function getTalk(){
  useLoveTalkStore().getTalk()
}
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
