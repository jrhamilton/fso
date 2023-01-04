const Language = ({ lang }) => {
  return (
    <li>{lang}</li>
  )
}

const Languages = ({languagesObj}) => {
  const languages = Object.entries(languagesObj)
  return (
    <ul>
      {languages.map(([k,v]) =>
        <Language key={k} lang={v} />
      )}
    </ul>
  )
}

const ShowCountry = ({c, show}) => {
  if (show) {
    return (
    <div>
      <h1>{c.name.common}</h1>
      <div>
        <p>Capital: {c.capital[0]}</p>
        <p>Area: {c.area}</p>
      </div>
      <div>
        <h3>Languages</h3>
        <Languages languagesObj={c.languages} />
      </div>
      <div>
        <img src={c.flags.png} />
      </div>
    </div>
    )
  }
}

export default ShowCountry
