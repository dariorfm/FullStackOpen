import React, { useState } from 'react'



const Unicafé = () => {
    
      
    
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
 

    
    
    
    const setToGood = () => {
        const newGood = good + 1
        setGood(newGood)

        
    }
    
    const setToNeutral = () => { 
        const newNeutral = neutral + 1 
        setNeutral(newNeutral)

        
        
    }
    
    const setToBad = () => {
        const newBad = bad + 1
        setBad(newBad)

        

    }
    
    
    return (
        <div>
            <h1>Give feedback</h1>
            <button onClick={setToGood}>good</button>
            <button onClick={setToNeutral}>neutral</button>
            <button onClick={setToBad}>bad</button>
            <h1>Statistics</h1>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
  
        </div>
    )
}

export default Unicafé
