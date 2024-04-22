import {defineStore} from "pinia";
import axios from "axios";
import {nanoid} from "nanoid";
import {reactive} from "vue";

export const useLoveTalkStore = defineStore('loveTalk', ()=>{
    const talkList = reactive(JSON.parse(localStorage.getItem('talkList')) || [])

    async function getTalk() {
        let {data: {content}} = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json")
        let talk: Talk = {
            id: nanoid(),
            title: content
        }
        this.talkList.unshift(talk)

    }

    return {talkList, getTalk}
})
