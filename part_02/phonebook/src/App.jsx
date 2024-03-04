import { useState } from 'react'
import Filter from "./components/Filter"
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {

  // Define the initial state of the phonebook  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
    

  // Display the phonebook
  return (
    <div>
      <h2>Phonebook</h2>
      
      <div>
          <Filter persons={persons} />
      </div>

      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      
      <h3>Numbers</h3>
      <Persons persons={persons} />

    </div>
  )
}

export default App