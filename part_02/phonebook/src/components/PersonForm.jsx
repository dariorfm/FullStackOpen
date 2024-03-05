import React, {useState} from 'react'
import axios from 'axios'
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
