import "./index.css";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState({
    allCharacters: [],
    reset:[]
  })

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((response) => response.json())
      .then((data) => setCharacters({allCharacters : data.results, reset: data.results}));
    }, []);
    
const reset = () => {
  setCharacters({
    ...characters,
    allCharacters: characters.reset
  })
}

const status = () => {
   setCharacters({
    ...characters,
    allCharacters : characters.allCharacters.filter(char => char.status === 'Alive')
   })
}


  return(
    <section>
      <button onClick={status}>gender</button>
      <button onClick={reset}>reset</button>
      {
        characters.allCharacters.map(char => {
          return(
            <div key={char.name}>
              <img src={char.image} style={{width: '200px'}} alt="" />
              <h2>{char.name}</h2>

            </div>
          )
        })

      }
    </section>
  )
}

export default App;
