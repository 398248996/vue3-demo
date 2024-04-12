<template>
  <div class="person">
    <h3>姓名：<input type="text" v-model="name"></h3>
    <h3>年龄：<input type="text" v-model="age"></h3>
    <h3>人员信息：{{ personInfo }}</h3>
    <h3>人员信息：{{ personInfo }}</h3>
    <h3>人员信息：{{ personInfo }}</h3>
    <button @click="changePersonInfo">修改人员信息</button>
    <hr>
  </div>
</template>
/*
computed计算属性
数据结构：

ComputedRefImpl {dep: undefined, __v_isRef: true, __v_isReadonly: true, getter: ƒ, _setter: ƒ, …}
dep:Map(1) {ReactiveEffect => 1}
effect:ReactiveEffect {scheduler: undefined, active: true, deps: Array(1), fn: ƒ, trigger: ƒ, …}
getter:() => name + ",\u5E74\u9F84\u662F" + age.value
__v_isReadonly:true
__v_isRef:true
_cacheable:true
_setter:() => {…}
_value:"Tom,年龄是23"
value:(...)
_dirty:(...)
[[Prototype]]:Object
1.计算后，存放在缓存中，不会多次重复计算
2.computed是一个响应式函数，默认只读
3.想要修改computed的数据，需要重写set方法
*/
<script setup lang="ts" name="Person">
import {computed, ref} from 'vue'

let name = 'Tom'
let age = ref(23)


let personInfo = computed({
    get(){
      // 只输出一次，因为计算完会放到缓存中不重复调用该方法
      console.log(1)
      return name + ",年龄是" + age.value
    },
    set(val){
      console.log('修改年龄数据,新的人员信息是：',val)
    }
})
console.log(personInfo)

function changePersonInfo() {
  // computed是只读数据，不可修改
  // personInfo.value = '测试数据'

  // computed写了set方法之后，才可进行修改
  age.value +=1
  personInfo.value = name+",年龄是"+age.value

}


</script>
<style>
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