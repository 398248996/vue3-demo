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
          <!--          <RouterLink :to="{-->
          <!--            path:'/person/detail',-->
          <!--            query:{-->
          <!--              id:person.id,-->
          <!--              name:person.name,-->
          <!--              address:person.address,-->
          <!--              age:person.age-->
          <!--            }-->
          <!--          }">-->
          <!--------------------------我是一个分割线----------------------->
          <!--
          第一种写法
          :to="`/person/detail/${person.id}/${person.name}/${person.address}/${person.age}`"
          这种写法需要与路由中path的参数相对应，其中？标识非必填
          path: 'detail/:id/:name/:address/:age?'
           -->
          <!--          <RouterLink :to="`/person/detail/${person.id}/${person.name}/${person.address}/${person.age}`">-->
          <!--            {{ person.name }}-->
          <!--            <button @click="delPerson">删除</button>-->
          <!--          </RouterLink>-->
          <!--
          第二种写法
          使用params需要与name一起用，不能与path一起用
          且，path需要写参数：path: 'detail/:id/:name/:address/:age?',
          params,不支持传数组
           -->
          <!--          <RouterLink :to="{-->
          <!--          name: 'detail',-->
          <!--          params: {-->
          <!--            id:person.id,-->
          <!--            name:person.name,-->
          <!--            address:person.address,-->
          <!--            age:person.age-->
          <!--          }}">-->
          <!--            {{ person.name }}-->
          <!--            <button @click="delPerson">删除</button>-->
          <!--          </RouterLink>-->
          <!--------------------------我是一个分割线----------------------->
          <!--      props传参:
                    第一种
                    在路由中给props:true
                    path还需要保持参数占位的状态
                    组件中可通过defineProps直接获取占位参数
          -->
          <!--          <RouterLink :to="`/person/detail/${person.id}/${person.name}/${person.address}/${person.age}`">-->
          <!--            {{ person.name }}-->
          <!--            <button @click="delPerson">删除</button>-->
          <!--          </RouterLink>-->
          <!--      props传参:
                    第二种
                    在路由中给props(route){
                    return route.query
                    }
                    path需要通过query方式取值
                    组件中可通过defineProps直接获取占位参数
          -->
          <RouterLink :to="{
            name:'detail',
            query:{
              id:person.id,
              name:person.name,
              age:person.age,
              address:person.address
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
