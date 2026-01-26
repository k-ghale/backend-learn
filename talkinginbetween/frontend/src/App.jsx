import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/vv/jokes')
    .then((response) => {
      setJokes(response.data);
    }
    )
    .catch((error) => {
      console.log(error);
    })
  });

  return (
    <>
      <h1>Kabin Ghale</h1>
      <p>JOKES: {jokes.length} </p>
      {
        jokes.map((joke, index) => ( 
          <div key={joke.index}>
            <h3>{joke.title}</h3>
            <p>{joke.joke}</p>
          </div>)
        )
      }
    </>
  )
}

export default App
