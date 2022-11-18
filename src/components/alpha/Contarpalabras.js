import '../mayusjeison/style/mayusJeison.css';

import React, {Component} from 'react';


class Contarpalabras extends Component {
    constructor() {
  
      super();
      this.state = { frase: ''};
  
    }
  
    Add = () => {
      const texto = this.state.frase.length;
      const contar = document.getElementById("contar")
      contar.innerText = `Cantidad de palabras es: ${texto}`;  
    }
  
    render() {
      return (
        <div>
          <h2>Contar palabras por el equipo Alpha</h2>
          <input type="text" onChange={(e) => this.setState({ frase: e.target.value })}
            value={this.state.frase} />
  
          <button title="Add" onClick={this.Add} >Contar palabras</button>
          <p id='contar'></p>
        </div>
  
      );
  
    }
  
  }
  
  export default Contarpalabras;