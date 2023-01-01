import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterdPs, setFilterdPs] = useState(persons)

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

  const filterNames = (event) => {
    const v = event.target.value
    console.log(v)
    const filterd = persons.filter((p) =>
      p.name.match(new RegExp(v, "i"))
    )
    console.log(filterd)
    setFilterdPs(filterd)
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
    settingPersons(persons.concat(personObject))
    resetValues()
  }

  const settingPersons = (personArray) => {
    setPersons(personArray)
    setFilterdPs(personArray)
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
      <div>
        filter shown with
        <input onChange={filterNames} />
      </div>

      <div>
        <h2>Add a new Number</h2>
        <form onSubmit={tryAddPerson}>
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
      </div>

      <div>
        <h2>Numbers</h2>
        <ul>
          {filterdPs.map(person =>
            <Person key={person.name}
                    name={person.name}
                    number={person.number} />
          )}
        </ul>
      </div>
    </div>
  )
}

export default App
