import { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Norification'
import Error from './components/Error'


const App = () => {
  
  // Define the initial state of the phonebook  
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [confMessage, setConfMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  
  // Fetch the initial state of the phonebook from the server
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])




  // Event handlers
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setSearchTerm(event.target.value.toLowerCase())
  }

  // Remove a person from the phonebook

  const removePerson = (person, id) => {
    if (window.confirm(`Delete ${person.name}`)) {
        personService
        .remove(person.id)
        .then(() => {
            setPersons(persons.filter(person => person.id !== id))
        })
    }
  }


  // Add a new or update number 
  const addPerson = (event) => {

    // Check if the person already exists
    const exists = persons.find(person => 
      person.name.toLowerCase() === newName.toLowerCase()
    )

    event.preventDefault()

    const personObject = {
        name: newName,
        number: newNumber
    }
    
    if (exists) {
        if (window.confirm(`${newName} 
        is already added to phonebook, 
        replace the old number with a new one?`)) 
        {
            const updatedPerson = { ...exists, number: newNumber }   
            personService
            .update(updatedPerson.id, updatedPerson)
            .then(returnedPerson => {
                setPersons(
                    persons.map(person => 
                    person.id !== exists.id 
                    ? person 
                    : returnedPerson
                ))
                setNewName('')
                setNewNumber('')

            }).catch(error => {
                console.error(error)
                setErrorMessage(
                    `Information of ${newName} has already been removed from server`
                )
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
                setPersons(persons.filter(person => person.id !== exists.id))
            })

            console.log('Edit confirmed')
            return
        } else {

            console.log('Edit cancelled') 
            return
        }
      
    }

    personService
    .create(personObject)
    .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
    })
    .catch(error => {
        setErrorMessage(error.response.data.error)
        setTimeout(() => {
            setErrorMessage(null)
        }, 5000)
    })

    if (newName.length >= 3 && /\d{2,3}-\d/.test(newNumber)) {
      console.log('Add confirmed')
      setConfMessage(
        `Added ${newName}`
        )
        setTimeout(() => {
          setConfMessage(null)
        }, 5000
      )
    }
  }


  

  // Display the phonebook
  return (
    <div>
      <h2>Phonebook</h2>
      <Error errorMessage={errorMessage} />
      
      <Notification message={confMessage} />
      
      <Filter 
        persons={persons} 
        searchTerm={searchTerm} 
        handleSearchChange={handleSearchChange} 
      />
      

      <h3>Add a new</h3>
      <PersonForm 
        addPerson={addPerson} 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange} 
      />
      
      <h3>Numbers</h3>

      <Persons 
        persons={persons} 
        removePerson={removePerson}  
      />

    </div>
  )
}

export default App