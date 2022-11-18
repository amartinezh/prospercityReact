import "./EficientesComponentValida.css";
import React, { useState } from "react";

function EficientesComponentValida() {
  const [frase, setFrase] = useState("");
  const [numberOfa, setNumberOfa] = useState(0);

  function CantChars() {
    let CantA = 0;
    let input = frase.toUpperCase();
    let arr = Array.from(input);
    console.log(arr);

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "A") {
        CantA = CantA + 1;
      } else {
        console.log("no a");
      }
    }
    setNumberOfa(CantA);
  }

  return (
    <div className="component-container">
      <input className="content"
        onChange={(event) => setFrase(event.target.value)}
        type="text"
        placeholder="ingresa una palabra para saber cuantas a tiene"
      />
      <button onClick={CantChars}>Cantidad de letra "a" </button>
      <p>
        El número de veces que se repite la letra A es :{" "}
        <strong>{numberOfa}</strong>
      </p>
    </div>
  );
}

export default EficientesComponentValida;
