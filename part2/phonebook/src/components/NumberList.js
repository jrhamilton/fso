import personService from '../services/persons'

const Person = (props) => {
  const deleteNumber = (id) => {
    if (window.confirm(`Delete ${props.name}?`)) {
      personService
        .deletePerson(props.id)
        .then(res => {
          if (res.status===200) {
            const newPersons = props.persons.filter(
              p => p.id != props.id
            )
            props.settingPersons(newPersons)
            alert(`${props.name} deleted`)
          }
        })
        .catch(err => {
          alert(err.message)
        })
    }
  }

  return (
    <li>
      {props.name}: {props.number}
      <button onClick={() => deleteNumber(props.id)}>
        Delete
      </button>
    </li>
  )
}

const NumberList = ({persons, settingPersons}) => {
  return (
    <ul>
      {persons.map(person =>
        <Person key={person.id}
                name={person.name}
                number={person.number}
                id={person.id}
                settingPersons={settingPersons}
                persons={persons} />
      )}
    </ul>
  )
}

export default NumberList
