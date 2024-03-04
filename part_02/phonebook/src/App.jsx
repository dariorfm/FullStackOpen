import { useState } from 'react'
import Search from "./components/Search"


const App = () => {

  // Define the initial state of the phonebook  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  
  // Hooks for the form
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  
  // Event handlers
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }



  // Check if the person already exists
  const exists = persons.find(person => person.name === newName)
  
  // Add a new person to the phonebook
  const addPerson = (event) => {

    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (exists) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat(personObject))
    
    setNewName('')
    setNewNumber('')
  }




  // Display the phonebook
  return (
    <div>
      <h2>Phonebook</h2>
      
      <div>
          <Search persons={persons} />
      </div>


      <form onSubmit={addPerson} >
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
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