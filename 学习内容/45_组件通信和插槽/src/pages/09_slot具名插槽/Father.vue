<template>
  <div class="father">
    <Catagory>
      <template v-slot:title>
        <h3>游戏列表</h3>
      </template>
      <template v-slot:content>
        <ul>
          <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
      </template>
    </Catagory>
    <Catagory>
      <template v-slot:title>
        <h3>城市美食</h3>
      </template>
      <template v-slot:content>
        <img :src="imgUrl" alt="美食图片"/>
      </template>
    </Catagory>
    <Catagory>
      <template #title>
        <h3>精彩片段</h3>
      </template>
      <template v-slot:content>
        <video :src="videoUrl" controls/>
      </template>
    </Catagory>
  </div>
</template>

<script setup lang="ts" name="Father">
import Catagory from "@/pages/09_slot具名插槽/Catagory.vue";
import {ref, reactive} from "vue";

let games = reactive([
  {id: 1, name: '英雄联盟'},
  {id: 2, name: '王者荣耀'},
  {id: 3, name: '刺激战场'},
  {id: 4, name: '蛋仔排队'}
])
let imgUrl = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg')
let videoUrl = ref('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4')
</script>
<style scoped>
.father {
  background-color: #dddddd;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
}

img, video {
  width: 100%;
}

h3 {
  background-color: #d9c858;
}
</style>
