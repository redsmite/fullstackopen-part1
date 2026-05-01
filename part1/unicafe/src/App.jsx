import { useState } from 'react';

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = (props) => {
  const [counter, setCounter] = useState(0);

  const addCounter = () => counter = setCounter(counter+1);

  const subtractCounter = () => counter = setCounter(counter-1);

  const resetCounter = () => counter = setCounter(0);

  return (
    <>
      <h1>{counter}</h1>
      <Button onClick={addCounter} text={'Add Counter'}/>
      <Button onClick={subtractCounter} text={'Subtract Counter'}/>
      <Button onClick={resetCounter} text={'Reset Counter'}/>
    </>
  )
}

export default App;