import {defineStore} from "pinia";
export  const useCountStore = defineStore('count',{
    // state 是存储数据的地方
    state(){
        return{
            sum : 6
        }
    }

})
