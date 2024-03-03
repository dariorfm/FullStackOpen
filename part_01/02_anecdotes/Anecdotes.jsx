import React, { useState} from 'react'

const MostVotes = ({votes, anecdotes}) => {
    const maxVotes = Math.max(...votes)
    const index = votes.indexOf(maxVotes)
    return (
        <div>
            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[index]}</p>
            <p>Has {maxVotes} votes</p>
        </div>
    )
}

const Anecdotes = () => {

    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
      ]
       
      const [selected, setSelected] = useState(0)
      const [votes, setVotes] = useState(0)
      const [countVotes, setCountVotes] = useState(new Array(anecdotes.length).fill(0))

      const handleClick = () =>  {
        setSelected(Math.floor(Math.random() * anecdotes.length))
        
      }

      const updateVotes = () => {
        const copy = [...countVotes]
        copy[selected] += 1
        setCountVotes(copy)
        console.log(copy)
      }



      const handleVote = () => {
        
        const newvotes = votes + 1
        setVotes(newvotes)
        updateVotes()

      }


  return (
    <div>
        <h1>Anecdotes</h1>
        <p>{anecdotes[selected]}</p>
        <p>Has {votes} votes</p>
        <button onClick={handleVote}>Vote</button>
        <button onClick={handleClick}>Next Anecdote</button>
        <MostVotes votes={countVotes} anecdotes={anecdotes} />
            
    </div>
  )
}

export default Anecdotes
