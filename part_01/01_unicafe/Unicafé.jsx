import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

const StatisticLine = ({ text, value }) => {
    return (
        <div>
            <p>{text} {value}</p>
        </div>
    )
}

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
                <StatisticLine text="Good" value={good} />
                <StatisticLine text="Neutral" value={neutral} />
                <StatisticLine text="Bad" value={bad} />
                <StatisticLine text="All" value={all} />
                <StatisticLine text="Average" value={average} />
                <StatisticLine text="Positive" value={positive + "%"} />

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
            <Button handleClick={setToGood} text="Good" />
            <Button handleClick={setToNeutral} text="Neutral" />
            <Button handleClick={setToBad} text="Bad" />
  
            <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
         
  
        </div>
    )
}

export default Unicafé
