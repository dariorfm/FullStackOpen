

const PersonForm = (props) => {

    // eslint-disable-next-line react/prop-types
    const{addPerson, newName, newNumber, handleNameChange, handleNumberChange } = props

    


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
