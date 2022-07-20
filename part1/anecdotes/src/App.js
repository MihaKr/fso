import { useState } from 'react'
import Button from './Button'
import Most from './Most'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] =  useState(Array(anecdotes.length).fill(0))
  const [max, setMax] =  useState(0)
  const [ind, setInd] =  useState(0)


  const handle = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
    console.log(selected);
  } 

  const getMax = () => {
    let m = 0;
    let ind = 0;
    for (let i = 0; i < anecdotes.length; i++) {
      if(points[i] > m) {
        m = points[i]
        ind = i;
      }
    }
    setMax(m)
    setInd(ind)
  } 

  const vote = () => {
    const copy = { ...points }
    copy[selected] += 1     
    setPoints(copy);
    getMax();
  } 
  
  return (
    <div>
      {anecdotes[selected]} <br></br>
      has {points[selected]} votes {<br></br>}
      <Button handleClick={vote} text="vote"/>
      <Button handleClick={handle} text="next anecdote"/>
      <Most text={anecdotes[ind]} votes={max}/>
    </div>
  )
}

export default App