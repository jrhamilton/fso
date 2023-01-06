import ShowCountry from './ShowCountry'

const CountryList = (props) => {
  const {countries, l,
        showCountry, setShowCountry} = props

  const doSetShowCountry = (cca3, bool) => {
    const newCountries = countries.map(c => c)
    newCountries[cca3] = bool
    setShowCountry(newCountries)
  }

  if (l > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }
  return (
    <>
    {countries.map(c =>
      <li key={c.cca3}>
        {c.name.common}
        <button onClick={() => doSetShowCountry(
          c.cca3,
          !showCountry[c.cca3]
        )}>
          {!showCountry[c.cca3] ? 'Show' : 'Hide' }
        </button>
        <ShowCountry c={c}
                     show={showCountry[c.cca3]}
                     single={false}
                     x="XOXOXOXOXO" />
      </li>
    )}
    </>
  )
}

export default CountryList
