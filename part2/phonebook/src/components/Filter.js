const Filter = ({persons, filter}) => {
  const filterNames = (event) => {
    const v = event.target.value
    const filterd = persons.filter((p) =>
      p.name.match(new RegExp(v, "i"))
    )
    filter(filterd)
  }

  return (
    <div>
      filter shown with
      <input onChange={filterNames} />
    </div>
  )
}

export default Filter
