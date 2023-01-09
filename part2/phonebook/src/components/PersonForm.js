import axios from 'axios'
import personService from '../services/persons'

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
    if (window.confirm(`${newName} is already added to phonebook. Replace old number with a new one?`)) {
      const person = persons.find(p => p.name===newName)
      const newPerson = {
        id: person.id,
        name: person.name,
        number: newNumber
      }

      personService.update(person.id, newPerson)
        .then(res => {
          const newPerson = res.data
          const newPersons = persons.map(p => {
            return p.name !== newName ? p : newPerson
          })

          settingPersons(newPersons)
        })
    }
    resetValues()
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
