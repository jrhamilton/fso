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
          props.setMessage(`ERROR: ${props.name} has already been removed from the server.`)
          props.setMessageClass('error')
          setTimeout(() => {
            props.setMessage('')
            props.setMessageClass('')
          }, 5000)
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

const NumberList = (props) => {
  const {persons, settingPersons,
         setMessage, setMessageClass} = props

  return (
    <ul>
      {persons.map(person =>
        <Person key={person.id}
                name={person.name}
                number={person.number}
                id={person.id}
                settingPersons={settingPersons}
                persons={persons}
                setMessage={setMessage}
                setMessageClass={setMessageClass} />
      )}
    </ul>
  )
}

export default NumberList
