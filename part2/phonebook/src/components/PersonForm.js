import axios from 'axios'

const PersonForm = (props) => {
  const {setNewName, setNewNumber,
         newName, newNumber,
         persons, settingPersons, resetValues} = props

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

    axios
      .post('http://localhost:3001/persons', personObject)
      .then(response => {
        settingPersons(persons.concat(response.data))
        resetValues()
      })
  }

  return (
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
  )
}

export default PersonForm
