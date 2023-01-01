import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const tryAddPerson = (event) => {
    event.preventDefault()
    hasDuplicate() ? doHasDuplicate() : doAddPerson()
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const hasDuplicate = () => {
    console.log(persons)
    return persons.some((p) => p.name === newName)
  }

  const doHasDuplicate = () => {
    setNewName('')
    alert(`${newName} is already added to phonebook`)
  }

  const doAddPerson = () => {
    const personObject = {
      name: newName,
      id: persons.length + 1,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const Person = (props) => (
    <li>
      {props.name}
    </li>
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={tryAddPerson}>
        <ul>
          {persons.map(person =>
            <Person key={person.name}
                    name={person.name} />
          )}
        </ul>
        <div>
          name:
          <input value={newName}
                 onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

    </div>
  )
}

export default App
