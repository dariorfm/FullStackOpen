import React, {useState} from 'react'
import personService from '../services/persons'

const PersonForm = (props) => {

    // Destructure the props
    const {persons, setPersons} = props

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

    
    // Add a new or update number 
    const addPerson = (event) => {

        // Check if the person already exists
        const exists = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())

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
    
    }



    return (
        <div>
            <form onSubmit={addPerson} >
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm
