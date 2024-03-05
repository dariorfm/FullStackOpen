import axios from 'axios'
import personService from '../services/persons'

const Persons = ({persons, setPersons}) => {

    const removePerson = (person, id) => {
        if (window.confirm(`Delete ${person.name}`)) {
            personService
            .remove(person.id)
            .then(() => {
                setPersons(persons.filter(person => person.id !== id))
            })
        }
    }

    return (
        <div>
            
            {persons.map((person) => (
                
                <p key={person.id}>
                    {person.name} {person.number}
                    <button onClick={() => removePerson(person, person.id)}>Delete</button>
                </p>
            
            ))}
            
        </div>
    )
}

export default Persons


