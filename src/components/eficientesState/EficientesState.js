import "./EficientesState.css";
import React, { Component, useState } from "react";

class EficientesState extends Component {
  //componente de tipo clase
  constructor(props) {
    super(props); //Propiedades que recibe la clase
    this.state = { Frase: "" };
    /* const [nombre,setnombre] = useState */
  } // El constructor es un bloque de codigo ejecutable cuando se hace un llamado a la clase

  conversion = (e) => {
    this.setState({ Frase: e.target.value });
  };
  render() {
    //reemplaza el function (sintaxis)
    return (
      //lo que retorna el function
      <>
        <div className="box">
          <h1>Convierte tu texto en mayusculas</h1>
          <p className="result">{this.state.Frase.toLocaleUpperCase()}</p>
          <input
            className="content"
            type="text"
            onChange={this.conversion}
            value={this.state.Frase}
          />
        </div>
      </>
    );
  }
}
export default EficientesState;
