
import React , {useState} from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {

  //inicializamos el estado del componente donde guardaremos el texto que se introduzca en el input type="text"
  const [text,setText] = useState('');

  //event handler function to manage the changes on the input

  const handleTextChange= (event) => {
    setText(event.target.value)
  }

  //event handler para controlar el submit button

  const handleSubmit = (event) => {
    event.preventDefault()
    //to prevent the form from refreshing the page, we call event.preventDefault()

    //para limpiar el input llammos al state setter y le pasamos un string vacío
    setText('')

    //creamos un nuevo objeto pensamiento, así cada vez que hagamos click en añadir. aparecerá uno nuevo

    const thought = {
        id:generateId(),
        text:text,
        expiresAt:getNewExpirationTime()
      }
      //para no crear un objeto vacío su el usuario hace click en añadir sin haber escrito nada, verificamos que el valor del input sea mayor que 0
    
    if(text.length >0){
       
      /*ahora llamamos a la función addThought que tenemos definida en APP  y le pasamos el objeto que acabamos de crear*/
      props.addThought(thought)
    }
 }


  /*ojo porque la prop onSubmit se pone dentro del form tag, no del input type="submit"
*/
  return (
    <form className="AddThoughtForm"
    onSubmit={handleSubmit}
    >
      <input
        type="text"
        aria-label="Qué tienes en mente?"
        placeholder="Qué tienes en mente?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Añadir" />
    </form>
  );
}
