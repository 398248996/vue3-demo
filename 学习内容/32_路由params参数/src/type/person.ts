export interface Person{
    id:number,
    name:string,
    age:number,
    address:string,
    work:Array<Work>
}

export interface Work{
    company:string,
    start:string,
    end:string,
    post:string
}

export type PersonList = Array<Person>
