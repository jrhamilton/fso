import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryView from './components/CountryView'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterdCs, setFilterdCs] = useState([])

  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      const countries = response.data
      setCountries(countries)
      setFilterdCs(countries)
    })
  }, [])

  const filterCountries = (e) => {
    const v = e.target.value
    const f = countries.filter((c) =>
      c.name.common.match(new RegExp(v, "i"))
    )
    setFilterdCs(f)
  }

  return (
    <div>
      <div>
        Find Countires: 
        <input onChange={filterCountries} />
      </div>
      <ul>
        <CountryView countries={filterdCs} />
      </ul>
    </div>
  )
}

export default App
