import React, { useEffect } from 'react';

export function Thought(props) {
  const { thought, removeThought } = props;
  //esto es lo mismo que poner:
  //props.thought
  //props.removeThought(thought)
 
//event handler para eliminar plensamineto
  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  useEffect(() => {
    //con esto calculamos los 15 segundos que tienen que pasar desde la hora en la que se añade el pensamiento
    const timeRemaining = thought.expiresAt - Date.now();
    
    //con esto probamos que funciona
    const timeout = setTimeout(() => {
    //alert('Time has passed!');
    //llamamos a la función para eliminar los pensamientos añadidos  . para ello tenemos que pasarle como parámetro el pensamineto con su id
    removeThought(thought.id)
    }, timeRemaining);
    //clean up function 
    return () => {
      clearTimeout(timeout);
    };
    },[removeThought,thought.expiresAt,thought.id])
    //Eslint was alerting me with an error in this dependecy array so i hace to put into what it said to me

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}