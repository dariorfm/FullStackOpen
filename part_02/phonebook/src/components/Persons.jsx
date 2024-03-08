
const Persons = ({removePerson, persons}) => {


    return (
        <div>
            
            {persons.map((person) => (
                
                <p key={person.id}>
                    {person.name} {person.number}
                    <button onClick={() => 
                        removePerson(person, person.id)}>
                        Delete
                    </button>
                </p>
            
            ))}
            
        </div>
    )
}

export default Persons


