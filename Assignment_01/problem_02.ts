type myType = string | number | boolean


const processInput = (value:myType) =>{
 if(typeof value =="string"){
    return value.trim().toLowerCase()
 }
 if(typeof value == "number"){
    return value * 10
 }
 if(typeof value =="boolean"){
    if(value){
        return "Active"
    }else{
        return "Inactive"
    }
 }
}

