import {useState} from 'react'

const Button = ({onClick, text}) => {
  return (
    <button onClick = {onClick}>{text}</button>
  )
}

const App = () =>{
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  })

  const handleLeftClicks = () => {
    const newClick = {
      ...clicks,
      left: clicks.left + 1
    }
    return setClicks(newClick)
  }

  const handleRightClicks = () => {
    const newClick = {
      ...clicks,
      right: clicks.right + 1
    }
    return setClicks(newClick)
  }

  return (
    <>
      <h1>Left Counter: {clicks.left}</h1>
      <h1>Right Counter: {clicks.right}</h1>
      <Button onClick={handleLeftClicks} text="Left Click"/>
      <Button onClick={handleRightClicks} text="Right Click"/>  
    </>
  )
}

export default App;