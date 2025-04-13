import React from 'react'
import { useState } from 'react';

export function App() {

  // Si quieres que tu aplicación cambie algo que se ve en pantalla cuando sucede algún evento, hay que usar State  
  // Datos y setter, para cualquier tipo de dato, siempre usar el setter para cambiar
  // setter -> rerender component
  const [ contador, ponContador ] = useState( 8 );

  const handleClick = () => {
    console.log("Button clicked!");
    
    ponContador( contador + 1 );
  };

  return (
    <div>
      <button onClick={handleClick}>Increment counter</button>
      <div>
        Counter is {contador}
      </div>
    </div>
  )

  // STATE: datos que cambian cuando el usuario interactua con la aplicación
  // Cuando estos datos cambian, React actualiza el componente automáticamente
}
