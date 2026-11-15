// optional , default and rest parameters (..arg)

const contactName=(firstName:string,lastName:string){
    if(!lastName) {
        return firstName
    }
    return firstName + " "+lastName
}
const greeting =(greeting:string="Jahin",fullname?:string)=>{
    console.log(greeting+" "+fullname)

}
greeting("Mir")

const sum =(...numbers:number[]){
    return numbers.reduce((total,sum)=> total+sum, 0)
}
sum(1,2,3,4,5) 
const logUserAction=(...args:[name:string,age:number,isActive:boolean])=>{
    const [name,age]=args
    console.log(name+"is"+age)
}
logUserAction("Jahin",122,false)