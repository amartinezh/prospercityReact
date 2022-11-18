import React, { Component } from 'react';
import './StyleCss/ButtonAlpha.css';
import '../../App.css';


class ButtonAlpha extends Component {
  
  Add1 = () => {    
    const estado = true;
    const text1 = 'Jeorge Gonzalez Valencia (Equipo Alpha)';
    const usuario = document.getElementById("boton")
    usuario.innerText = `${text1}`;
    // {
    //   estado ? usuario.innerText = `nom1: ${text1}`
    //     : usuario.innerText = `nom2: ${text2}`;
    // }    
  }

  Add2 = () => {    
    const estado = true;
    const text2 = 'Carolina Giraldo Orozco (Equipo Alpha)';
    const usuario = document.getElementById("boton")
    usuario.innerText = `${text2}`;
    // {
    //   estado ? usuario.innerText = `Nombre: ${text1}`
    //     : usuario.innerText = `Apellidos: ${text2}`;
    // }    
  }

  render() {
    return (      
      <div>
        <button className='ButtonAlpha' title="AddJeorge" onClick={this.Add1} > + </button>
        <button className='ButtonAlpha' title="AddCarolina" onClick={this.Add2} > - </button>
        <p id='boton'> </p>        
      </div>
    );
  }
}

export { ButtonAlpha };