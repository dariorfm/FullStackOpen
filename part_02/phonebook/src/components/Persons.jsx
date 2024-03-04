import React from 'react'

const Persons = (props) => {

    const persons = props.persons


    return (
        <div>

            <ul>
                {persons.map((person, index) => (
                    <li key={index}>
                        {person.name} {person.number}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Persons
