import React, { useState } from 'react'

const Statistics = (props) => {

    const { good, neutral, bad, all, average, positive } = props

    if (all === 0) {
        return (
            <div>
                <h1>Statistics</h1>
                <p>No feedback given</p>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Statistics</h1>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>All: {all}</p>
                <p>Average: {average}</p>
                <p>Positive: {positive}%</p>
            </div>
        )
    }
}


const Unicafé = () => {
    
      
    
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [all, setAll] = useState(0);
    const [average, setAverage] = useState(0);
    const [positive, setPositive] = useState(0);
 
    
    
    const setToGood = () => {
        const newGood = good + 1
        setGood(newGood)
        setAll(newGood + neutral + bad)
        setAverage((newGood - bad) / (newGood + neutral + bad))
        setPositive((newGood / (newGood + neutral + bad)) * 100)
        
    }
    
    const setToNeutral = () => { 
        const newNeutral = neutral + 1 
        setNeutral(newNeutral)
        setAll(good + newNeutral + bad)
        setAverage((good - bad) / (good + newNeutral + bad)) 
        setPositive((good / (good + newNeutral + bad)) * 100)   
        
    }
    
    const setToBad = () => {
        const newBad = bad + 1
        setBad(newBad)
        setAll(good + neutral + newBad)
        setAverage((good - newBad) / (good + neutral + newBad))
        setPositive((good / (good + neutral + newBad)) * 100)

    }
    
    
    return (
        <div>
            <h1>Give feedback</h1>
            <button onClick={setToGood}>good</button>
            <button onClick={setToNeutral}>neutral</button>
            <button onClick={setToBad}>bad</button>
            <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
  
        </div>
    )
}

export default Unicafé
