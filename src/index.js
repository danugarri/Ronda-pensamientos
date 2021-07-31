import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import { generateId, getNewExpirationTime } from './utilities';
import './styles.css'

function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'Escribe lo que se te venga  a la cabeza',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "A los 15 segundos se autodestruirá",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  //event handler para añadir pensaminetos
const addThought= (thought) => {
 setThoughts(prev => [thought, ...prev])
  }
//event handler para eliminar pensaminetos
 const removeThought = (thoughtIdToRemove) => {
   //utilizamos el método filter para que nos devuelva un array sólo cuando se cumpla la condición que le indicamos
   /* es decir que nos devuelva un array donde no esté como elemento el pensamineto con el id que queremos eliminar
   */
  setThoughts(thoughts.filter(thought => thought.id !== thoughtIdToRemove))
}

  return (
    <div className="App">
      <header>
        <h1>Ronda-pensaminetos</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought}/>
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought}
            removeThought={removeThought}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
