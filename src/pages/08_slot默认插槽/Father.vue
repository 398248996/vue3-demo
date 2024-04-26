<template>
  <div class="father">
    <Catagory title="游戏列表">
      <ul>
        <li v-for="g in games" :key="g.id">{{g.name}}</li>
      </ul>
    </Catagory>
    <Catagory title="美食城市">
      <img :src="imgUrl" alt="美食图片"/>
    </Catagory>
    <Catagory title="精彩片段">
      <video :src="videoUrl" controls/>
    </Catagory>
  </div>
</template>

<script setup lang="ts" name="Father">
import Catagory from "@/pages/08_slot默认插槽/Catagory.vue";
import {ref,reactive} from "vue";

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
img,video{
  width: 100%;
}
</style>
