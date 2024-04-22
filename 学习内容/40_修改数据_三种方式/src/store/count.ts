import {defineStore} from "pinia";
export  const useCountStore = defineStore('count',{
    // actions里面放的是一个一个方法
    actions:{
        increment(n:number){
            const newSum = this.sum + n
            if(newSum < 10){
                this.sum += n
                this.name = 'Som'
            }
        },
        decrement(n:number){
            const newSum = this.sum - n
            if(newSum > 0){
                this.sum -= n
                this.name = 'Ai'
            }
        }
    },
    // state 是存储数据的地方
    state(){
        return{
            sum : 6,
            address: '北京海淀',
            name: 'Alis',
            program: '贴纸竞速'
        }
    }

})
