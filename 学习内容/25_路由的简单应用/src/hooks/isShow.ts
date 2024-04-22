import {ref} from "vue";

export default function (){
    const isShow = ref(true)
    function changeShow() {
        isShow.value = false
    }
    return {isShow,changeShow}
}
