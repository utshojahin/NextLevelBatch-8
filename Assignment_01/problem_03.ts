type myTuple = readonly[latitude:number, longitude:number, locationName:string] 

const formatCoordinate = (coordinate : myTuple): string =>{
return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
}

