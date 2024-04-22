<template>
  <div class="talk">
    <button @click="getTalk">获取一句土味情话</button>
    <ul v-for="talk in useLoveTalkStore().talkList" :value="talk.id">
      <li>{{ talk.title }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts" name="LoveTalk">
import {reactive} from "vue";
import {nanoid} from "nanoid";
import axios from "axios";
import {useLoveTalkStore} from "@/store/loveTalk";

export interface Talk {
  id: string,
  title: string
}

let talkList:Array<Talk> = reactive([])


async function getTalk() {
  let {data: {content}} = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json")
  let talk: Talk = {
    id: nanoid(),
    title: content
  }
  talkList.unshift(talk)

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
