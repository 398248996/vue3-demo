import {reactive} from "vue";
import {type PersonList} from "@/type/person";

export default function (){
    const list = reactive<PersonList>([{
        id:1,
        name: 'Tom',
        address: '北京市朝阳区',
        age: 22,
        work: [{company: '美团', start: '2022-10-10', end: '2023-11-14', post: '技术总监'},
            {company: '京东', start: '2020-10-10', end: '2022-09-14', post: '研发工程师'}]
    }, {
        id:2,
        name: 'Bob',
        address: '北京市海淀区',
        age: 20,
        work: [{company: '粉笔', start: '2022-10-10', end: '2023-11-14', post: '主管'},
            {company: '学大', start: '2020-10-10', end: '2022-09-14', post: '讲师'}]
    }])
    function delPerson(){
        list.pop()
    }
    return {list,delPerson}
}
