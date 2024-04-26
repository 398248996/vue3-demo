<template>
  <div class="father">
    <Game>
      <template v-slot:title="params">
        <h3>{{params.title}}</h3>
      </template>
      <template v-slot="params">
        <ul>
          <li v-for="g in params.games" :key="g.id">{{ g.name }}</li>
        </ul>
      </template>
    </Game>
  </div>
</template>

<script setup lang="ts" name="Father">
import Game from "@/pages/10_slot作用域插槽/Game.vue";
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
