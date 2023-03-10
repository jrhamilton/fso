import personService from '../services/persons'

const Person = (props) => {
  const person = props.person

  const deleteNumber = (id) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deletePerson(person.id)
        .then(res => {
          if (res.status===200) {
            const newPersons = props.persons.filter(
              p => p.id !== person.id
            )
            props.settingPersons(newPersons)
            alert(`${person.name} deleted`)
          }
        })
        .catch(err => {
          props.setMessage(`ERROR: ${person.name} has already been removed from the server.`)
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
      {person.name}: {person.number}
      <button onClick={() => deleteNumber(person.id)}>
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
                person={person}
                persons={persons}
                settingPersons={settingPersons}
                setMessage={setMessage}
                setMessageClass={setMessageClass} />
      )}
    </ul>
  )
}

export default NumberList
