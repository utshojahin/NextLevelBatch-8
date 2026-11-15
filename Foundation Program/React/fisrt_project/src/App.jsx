import Card from "./Card.jsx"

const members=[
  {name:"Jahin", age:35},
  {name:"Utsho",age:26},
  {name:"Asif", age:18}
]

const App = () => {
  return (
    
   <>
   {members?.sort((a,b)=>(a.age-b.age))?.map((m)=>(
    <Card name={m.name} age={m.age}/>
  ))}
   </>
    
  )
}

export default App