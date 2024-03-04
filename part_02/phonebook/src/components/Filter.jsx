import React, {useState} from 'react'


const Filter = (props) => {
    
    const persons = props.persons

    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchChange = (event) => {
        console.log(event.target.value)
        setSearchTerm(event.target.value.toLowerCase())
    }

    // Filter the list of persons based on the search term
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchTerm))
    

    return (
    <div>
        filter shown with <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search by name" />

        {searchTerm && (
            <ul>
                {filteredPersons.map((person, index) => (
                <li key={index}>
                    {person.name} {person.number}
                </li>
                ))}
            </ul>
        )}
    </div>
    )
}

export default Filter
