import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}

const Statistics = (props) => {
  if (props.activate) {
    return (
      <div>
        <h1>statistics</h1>
        <div>
          <StatisticLine text='good' value={props.good} />
          <StatisticLine text='nuetral' value={props.nuetral} />
          <StatisticLine text='bad' value={props.bad} />
          <StatisticLine text='all' value={props.all} />
          <StatisticLine text='average' value={props.average} />
        </div>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [nuetral, setNuetral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [activate, setActivate] = useState(false)

  const handled = () => {
    setAll(all + 1)
    setActivate(true)
  }

  const theGood = () => {
    setAverage((good + 1 - bad) / (all + 1))
    setGood(good + 1)
    handled()
  }

  const theNuetral = () => {
    setAverage((good - bad) / (all + 1))
    setNuetral(nuetral + 1)
    handled()
  }

  const theBad = () => {
    setAverage((good - bad - 1) / (all + 1))
    setBad(bad + 1)
    handled()
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={() => theGood()} text='good' />
        <Button handleClick={() => theNuetral()} text='nuetral' />
        <Button handleClick={() => theBad()} text='bad' />
      </div>
      <Statistics good={good} nuetral={nuetral} bad={bad} all={all} average={average} activate={activate} />
    </div>
  )
}

export default App
