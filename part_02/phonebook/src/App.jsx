import { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'


const App = () => {
  
  // Define the initial state of the phonebook  
  const [persons, setPersons] = useState([]) 
  
  // Fetch the initial state of the phonebook from the server
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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