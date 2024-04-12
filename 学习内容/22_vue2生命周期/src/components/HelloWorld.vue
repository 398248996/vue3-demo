<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>
      <button @click="changeMsg">修改上面的信息</button>
    </h2>
    <h2>Ecosystem</h2>
  </div>
</template>
/*
  Vue2 生命周期
  创建：beforeCreate(创建前) created(创建完毕)
  挂载：beforeMount(挂载前) mounted(挂载完毕)
  更新：beforeUpdate(更新前) updated(更新完毕)
  销毁：beforeDestory(销毁前) destoryed(销毁完毕)
*/
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '练习一波生命周期~~~'
    }
  },
  methods: {
    changeMsg () {
      this.msg = '练完了'
    }
  },
  beforeCreate () {
    console.log('生命周期之——创建前')
  },
  created () {
    console.log('生命周期之——创建完成')
  },
  beforeMount () {
    console.log('生命周期之——挂载前')
  },
  mounted () {
    console.log('生命周期之——挂载完毕')
  },
  beforeUpdate () {
    console.log('生命周期之——更新前')
  },
  updated () {
    console.log('生命周期之——更新完毕')
  },
  beforeDestroy () {
    console.log('生命周期之——销毁前')
  },
  destroyed () {
    console.log('生命周期之——销毁完毕')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
