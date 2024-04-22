<template>
  <div class="father">
    <!--    v-model 双向绑定-->
    <!--    <input type="text" v-model="test">-->

    <!--    <input type="text" :value="test" @input="test=$event.target.value">-->
    <!--    这里直接v-model不好用，因为input被组件套了一层-->
    <!--    <TestInput v-model="test"/>-->
    <!--    组件中绑定modelValue的值（  input type="text" :value="modelValue"），可以达到组件修改，页面变化；但是页面修改组件值不变。-->
    <!--    <TestInput :modelValue="test"/>-->

    <ul>
      <li>input组件的v-model实现方式需要如下步骤：</li>
      <li>1.定义组件，初始化input</li>
      <li>2.通过‘:value’获取变量值，defineProps(['变量值'])-----------父传子，即 TestInput值传递给vModel组件</li>
      <li>
        3.通过‘@input="emit('update:modelValue',$event.target.value)"’传递变化的值，defineEmits(['update:modelValue'])-----------子传父，即
        vModel组件传递给TestInput组件
      </li>
    </ul>
    <TestInput :modelValue="test" @update:modelValue="test=$event"/><br>
    可直接简化写法<br>
    <TestInput v-model="test"/><br>
    扩展v-model值<br>
    <TestInput2 v-model="test" v-model:m2value="test2"/><br>

    <ul>
      <li>$event的理解:</li>
      <li>原生事件，$event就是事件对象，可以target</li>
      <li>原生自定义事件，$event就是触发事件时，传递的数据，可以target</li>
    </ul>
  </div>
</template>
<script setup lang="ts" name="Father">
import {onUpdated, ref} from "vue";
import TestInput from "@/components/TestInput.vue";
import TestInput2 from '@/components/TestInput2.vue'
let test = ref('学习一下vue3的v-model双向绑定')
let test2 = ref('v-model扩展内容')

// :value的时候无法监听到数据的改变
// 增加了@input后，将test值给到组件值发生变化
// v-model == :value+@input
onUpdated(() => {
  console.log(test)
})
</script>


<style scoped>
.father {
  background-color: #dddddd;
  padding: 20px;
  border-radius: 10px;
}
</style>
