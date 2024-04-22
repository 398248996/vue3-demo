import mitt from "mitt";

const emitter = mitt()
/*
// 绑定事件
emitter.on('test1',()=>{
    console.log('test1测试emitter.on')
})

emitter.on('test2',()=>{
    console.log('test2测试emitter.on')
})

// 触发事件
setInterval(()=>{
    emitter.emit('test1')
},1000)
setInterval(()=>{
    emitter.emit('test2')
},1200)

// 销毁事件
setTimeout(()=>{
    emitter.off('test2')
},3200)
// 销毁全部
setTimeout(()=>{
    emitter.all.clear()
},3500)*/
export default emitter
