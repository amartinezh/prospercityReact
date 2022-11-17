import './style/mayusJeison.css';

import React, {Component} from 'react';


class MayusJeison extends Component {
    constructor() {
  
      super();
      this.state = { frase: ''};
  
    }
  
    Add = () => {
      const texto = this.state.frase.toLocaleUpperCase();
      const mayus = document.getElementById("mayus")
      mayus.innerText = `Frase convertida en mayuscula: ${texto}`;  
    }
  
    render() {
      return (
        <div>
          <h2>Jeison Stiven Lopez Castro equipo JumpForce</h2>
          <h3>Convierte una frase en mayuscula</h3>
          <input type="text" onChange={(e) => this.setState({ frase: e.target.value })}
            value={this.state.frase} />
  
          <button title="Add" onClick={this.Add} >convertir frase a mayuscula</button>
          <p id='mayus'></p>
        </div>
  
      );
  
    }
  
  }
  
  export default MayusJeison;