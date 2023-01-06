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

const SingleExtras = ({c, single, cw}) => {
  const cap = c.capital[0]

  if (single && typeof(cw['deg']) !== 'undefined') {
    return (
      <div>
        <h3>Weather in {cap}</h3>
        <div>
          Weather:
          {cw['deg']['celcius']} Celcius
        </div>
        <div>
          <img src={"http://openweathermap.org/img/wn/" + cw['weather'][0]['icon'] + "@2x.png"}
               alt={cw['weather'][0]['description']} />
        </div>
      </div>
    )
  }
}

const ShowCountry = ({c, show, single, cw}) => {
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
        <img src={c.flags.png} alt="" />
      </div>
      <SingleExtras c={c} single={single} cw={cw} />
    </div>
    )
  }
}

export default ShowCountry
