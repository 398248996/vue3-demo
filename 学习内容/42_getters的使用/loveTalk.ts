import {defineStore} from "pinia";
import axios from "axios";
import {nanoid} from "nanoid";
import {reactive} from "vue";
export const useLoveTalkStore = defineStore('loveTalk', {
    actions: {
        async getTalk() {
            let {data: {content}} = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json")
            let talk: Talk = {
                id: nanoid(),
                title: content
            }
            this.talkList.unshift(talk)

        }
    },
    state() {
        return {
            talkList: [{
                id: '12',
                title: 'test'
            }]
        }
    },
    // 对state的数据再次加工
    getters: {
        getTitle: state =>"土味情话：" + state.talkList[0].title,
        addTitle(){
            let talk = reactive({id:'123a',title:'tttttt'})
            this.talkList.push(talk)
            return talk
        }
    }
})
