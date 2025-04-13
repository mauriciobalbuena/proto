import React, { useState } from "react";

function ComponenteA() {
  const [contador, setContador] = useState(0);

  console.log("Renderizando ComponenteA");

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

function ComponenteB() {
  console.log("Renderizando ComponenteB");
  return <p>Soy el Componente B</p>;
}

export function App() {
  return <div>
            <ComponenteA />
            <ComponenteB />
        </div>
  ;
}
