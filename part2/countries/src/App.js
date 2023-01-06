import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryView from './components/CountryView'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterdCs, setFilterdCs] = useState([])
  const [showCountry, setShowCountry] = useState({})
  const [singleCity, setSingleCity] = useState('')
  const [capitalWeather, setCapitalWeather] = useState({})

  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      const countries = response.data
      setCountries(countries)
      setFilterdCs(countries)
      const scObject = {}
      countries.forEach(c =>
        scObject[c.cca3] = false
      )
      setShowCountry(scObject)
    })
  }, [])

  const filterCountries = (e) => {
    const v = e.target.value
    const f = countries.filter((c) =>
      c.name.common.match(new RegExp(v, "i"))
    )
    setFilterdCs(f)

    if (f.length===1) {
      doSingleCity(f[0])
    }
  }

  const doSingleCity = (country) => {
    const cap = country.capital[0]
    if (cap!==singleCity) {
      setSingleCity(cap)
      const api_key = process.env.REACT_APP_API_KEY

      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${cap}&appid=${api_key}`)
        .then(response => {
          const weather = response.data
          const temp = weather['main']['temp']
          weather['deg'] = {
            'celcius': (temp - 273.15).toFixed(1),
            'fahrenheit': ((temp-273.15)*(9/5)+32).toFixed(1)
          }
          setCapitalWeather(weather)
        })
    }
  }

  return (
    <div>
      <div>
        Find Countires: 
        <input onChange={filterCountries} />
      </div>
      <ul>
        <CountryView countries={filterdCs}
                     showCountry={showCountry}
                     setShowCountry={setShowCountry}
                     cw={capitalWeather} />
      </ul>
    </div>
  )
}

export default App
