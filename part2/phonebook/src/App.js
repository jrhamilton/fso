import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'
import PersonForm from './components/PersonForm'
import NumberList from './components/NumberList'
import Filter from './components/Filter'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterdPs, setFilterdPs] = useState(persons)
  const [message, setMessage] = useState('')
  const [messageClass, setMessageClass] = useState('')

  const settingPersons = (personArray) => {
    setPersons(personArray)
    setFilterdPs(personArray)
  }

  const resetValues = () => {
    setNewName('')
    setNewNumber('')
  }

  useEffect(() => {
    personService
      .getAll()
        .then(response => {
          settingPersons(response.data)
        })
  }, [])

  return (
    <div>
      <div>
        <h2>Phonebook</h2>
        <Filter persons={persons}
                filter={setFilterdPs} />
      </div>
      <div>
        <h2>Add a new Number</h2>
        <PersonForm setNewName={setNewName}
                    setNewNumber={setNewNumber}
                    newName={newName}
                    newNumber={newNumber}
                    persons={persons}
                    settingPersons={settingPersons}
                    resetValues={resetValues}
                    setMessage={setMessage}
                    setMessageClass={setMessageClass} />
      </div>
      <div>
        <h2>Numbers</h2>
        <Notification message={message}
                      messageClass={messageClass} />
        <NumberList persons={filterdPs}
                    settingPersons={settingPersons}
                    setMessage={setMessage}
                    setMessageClass={setMessageClass} />
      </div>
    </div>
  )
}

export default App
