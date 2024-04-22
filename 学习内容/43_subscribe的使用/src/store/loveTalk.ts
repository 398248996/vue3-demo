import {defineStore} from "pinia";
import axios from "axios";
import {nanoid} from "nanoid";
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
            talkList: JSON.parse(localStorage.getItem('talkList')) || []
        }
    }
})
