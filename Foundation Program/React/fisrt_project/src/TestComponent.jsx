
const TestComponent = (props) => {
    const {name, age}= props;

  return (
    <div>
        <h1>{props.children}</h1>
        <h1>{name}</h1>
        <h1>{age}</h1>
    </div>
  )
}

export default TestComponent
