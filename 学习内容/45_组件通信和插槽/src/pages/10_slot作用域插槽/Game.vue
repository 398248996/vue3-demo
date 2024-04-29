<template>
  <div class="game">
    <slot name="title" :title="title">标题</slot>
    <slot :games="games">默认内容</slot>
  </div>
</template>

<script setup lang="ts" name="Game">
import {ref,reactive} from "vue";
let title = ref('游戏列表')
let games = reactive([
  {id: 1, name: '英雄联盟'},
  {id: 2, name: '王者荣耀'},
  {id: 3, name: '刺激战场'},
  {id: 4, name: '蛋仔排队'}
])
</script>
<style scoped>
.game {
  background-color: #87ebaa;
  padding: 20px;
  border-radius: 10px;
  width: 200px;
  height: 300px;
}

</style>
