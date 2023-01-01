import { useState } from 'react'
import PersonForm from './components/PersonForm'
import NumberList from './components/NumberList'
import Filter from './components/Filter'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterdPs, setFilterdPs] = useState(persons)

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
                    setPersons={setPersons}
                    setFilterdPs={setFilterdPs} />
      </div>
      <div>
        <h2>Numbers</h2>
        <NumberList persons={filterdPs} />
      </div>
    </div>
  )
}

export default App
