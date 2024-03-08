
const Filter = (props) => {
    
    const {persons, searchTerm, handleSearchChange} = props

 

    // Filter the list of persons based on the search term
    const filteredPersons = persons.filter(person => 
        person.name.toLowerCase().includes(searchTerm)
    )
    

    return (
    <div>
        filter shown with 
        <input 
            type="text" 
            value={searchTerm} 
            onChange={handleSearchChange} 
            placeholder="Search by name" 
        />

            {searchTerm && (<ul>
                {filteredPersons.map((person, ind) => (
                <li key={ind}>
                    {person.name} {person.number}
                </li>
                ))}
            </ul>)}
    </div>
    )
}

export default Filter
