import {defineStore} from "pinia";

export const useLoveTalkStore = defineStore('loveTalk',{
    state(){
        return{
            talkList:[{
                id:'12',
                title:'test'
            }]
        }
    }
})
