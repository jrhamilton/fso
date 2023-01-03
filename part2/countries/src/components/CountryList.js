const CountryList = ({countries, l}) => {
  if (l > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }
  return (
    <>
    {countries.map((country, i) =>
      <li key={i}>
        {country.name.common}
      </li>
    )}
    </>
  )
}

export default CountryList
