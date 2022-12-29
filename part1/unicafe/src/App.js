import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = ({text, value, col3}) => {
  return (
    <tr><td>{text}</td><td>{value}</td><td>{col3}</td></tr>
  )
}

const Statistics = (props) => {
   const { good, nuetral, bad, all, average, positive, active } = props
  if (active) {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='nuetral' value={nuetral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={all} />
          <StatisticLine text='average' value={average} />
          <StatisticLine text='positive' value={positive} col3="%" />
          </tbody>
        </table>
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
  const [active, setActive] = useState(false)
  const [positive, setPositive] = useState(0.0)

  const handled = (inc) => {
    setPositive(100 * ((good + inc) / (all + 1)))
    setAll(all + 1)
    setActive(true)
  }

  const theGood = () => {
    setAverage((good + 1 - bad) / (all + 1))
    setGood(good + 1)
    handled(1)
  }

  const theNuetral = () => {
    setAverage((good - bad) / (all + 1))
    setNuetral(nuetral + 1)
    handled(0)
  }

  const theBad = () => {
    setAverage((good - bad - 1) / (all + 1))
    setBad(bad + 1)
    handled(0)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={() => theGood()} text='good' />
        <Button handleClick={() => theNuetral()} text='nuetral' />
        <Button handleClick={() => theBad()} text='bad' />
      </div>
      <Statistics good={good} nuetral={nuetral} bad={bad}
                  all={all} average={average} positive={positive}
                  active={active} />
    </div>
  )
}

export default App
