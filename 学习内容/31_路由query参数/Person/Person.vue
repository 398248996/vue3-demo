<template>
  <div class="person">
    <ul>
      <li v-for="person in list" :key="person.id">
        <h3>
          <!--           第一种写法-->
          <!--          <RouterLink :to="`/person/detail?id=${person.id}`">-->
          <!--            {{ person.name }}-->
          <!--            <button @click="delPerson">删除</button>-->
          <!--          </RouterLink>-->
          <!--           第二种写法-->
          <RouterLink :to="{
            path:'/person/detail',
            query:{
              id:person.id,
              name:person.name,
              address:person.address,
              age:person.age
            }
          }">
            {{ person.name }}
            <button @click="delPerson">删除</button>
          </RouterLink>
        </h3>
      </li>
    </ul>
    <div class="detail-content">
      <RouterView/>
    </div>
  </div>
</template>
<script setup lang="ts" name="Person">
import hooksPerson from "@/hooks/person";
import {RouterView, RouterLink} from 'vue-router'

const {list, delPerson} = hooksPerson()

</script>
<style scoped>
.person {
  text-align: left;
  display: flex;
}

button {
  margin: 5px;
}

.detail-content {
  right: 5%;
  margin: 0 auto;
  border-radius: 10px;
  width: 80%;
  height: 400px;
  border: 1px solid;
}
</style>
