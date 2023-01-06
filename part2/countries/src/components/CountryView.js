import CountryList from './CountryList'
import ShowCountry from './ShowCountry'

const CountryView = (props) => {
  const {countries, showCountry, setShowCountry, cw} = props

  const l = countries.length
  if (l !== 1) {
    return (
      <CountryList countries={countries}
                   l={l}
                   showCountry={showCountry}
                   setShowCountry={setShowCountry} />
    )
  }

  const c = countries[0]
  return (
    <ShowCountry c={c} show={true} single={true} cw={cw} />
  )
}

export default CountryView
