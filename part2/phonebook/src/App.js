import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '555-555-555' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const tryAddPerson = (event) => {
    event.preventDefault()
    hasDuplicate() ? doHasDuplicate() : doAddPerson()
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const hasDuplicate = () => {
    console.log(persons)
    return persons.some((p) => p.name === newName)
  }

  const doHasDuplicate = () => {
    resetValues()
    alert(`${newName} is already added to phonebook`)
  }

  const doAddPerson = () => {
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    setPersons(persons.concat(personObject))
    resetValues()
  }

  const resetValues = () => {
    setNewName('')
    setNewNumber('')
  }

  const Person = (props) => (
    <li>
      {props.name}: {props.number}
    </li>
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={tryAddPerson}>
        <ul>
          {persons.map(person =>
            <Person key={person.name}
                    name={person.name}
                    number={person.number} />
          )}
        </ul>
        <div>
          name:
          <input value={newName}
                 onChange={handleNameChange}
          />
        </div>
        <div>
          number:
          <input type="number"
                 value={newNumber}
                 onChange={handleNumberChange}
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
