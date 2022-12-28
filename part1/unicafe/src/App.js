import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [nuetral, setNuetral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  const theGood = () => {
    setAll(all + 1)
    setGood(good + 1)
    setAverage((good + 1 - bad) / (all + 1))
  }

  const theNuetral = () => {
    setAll(all + 1)
    setNuetral(nuetral + 1)
    setAverage(average)
  }

  const theBad = () => {
    setAll(all + 1)
    setBad(bad + 1)
    setAverage((good - bad - 1) / (all + 1))
  }


  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={theGood}>good</button>
        <button onClick={theNuetral}>nuetral</button>
        <button onClick={theBad}>bad</button>
      </div>
      <h1>statistics</h1>
      <div>
        <p>good {good}</p>
        <p>nuetral {nuetral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {average}</p>
      </div>
    </div>
  )
}

export default App
