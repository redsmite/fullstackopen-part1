import { useState } from "react";

const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Statistics = ({ feedback }) => {
  if (feedback.total === 0)  {return (<p>No feedback given</p>)} else { 
    return (
      <div>
        <table>
          <tbody>
            <StatisticsLine text="good" value={feedback.good} />
            <StatisticsLine text="neutral" value={feedback.neutral} />
            <StatisticsLine text="bad" value={feedback.bad} />
            <StatisticsLine text="all" value={feedback.total} />
            <StatisticsLine text="average" value={feedback.total === 0 ? 0 : feedback.score / feedback.total} />
            <StatisticsLine text="positive" value={feedback.total === 0 ? 0 : (feedback.good / feedback.total) * 100 + '%'} />
          </tbody>
        </table>
      </div>
    )
  }
}

const StatisticsLine = (props) => {
  return(
    <tr><td>{props.text}</td><td>{props.value}</td></tr>
  )
}

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    score: 0,
    total: 0,
  })

  const handleGoodClick = () => {
    const newClick = {
      ...feedback,
      good: feedback.good + 1,
      score: feedback.score + 1,
      total: feedback.total + 1,
    }
    setFeedback(newClick);
  }
  
  const handleNeutralClick = () => {
    const newClick = {
      ...feedback,
      neutral: feedback.neutral + 1,
      total: feedback.total + 1,
    }
    setFeedback(newClick);
  } 
  
  const handleBadClick = () => {
    const newClick = {
      ...feedback,
      bad: feedback.bad + 1,
      score: feedback.score - 1,
      total: feedback.total + 1,
    }
    setFeedback(newClick);
  }

  return(
    <>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text="good"/>
      <Button onClick={handleNeutralClick} text="neutral"/>
      <Button onClick={handleBadClick} text="bad"/>

      <h1>statistics</h1>
      <Statistics feedback={feedback} />
    </>
  )
}

export default App;