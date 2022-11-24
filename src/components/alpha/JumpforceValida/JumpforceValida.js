import { useState, useEffect } from 'react'
import './JumpforceValida.css';

function JumpforceValida() {

  const [cadena, setCadena] = useState('');
  let [numeroAs, setNumeroAs] = useState(0);


useEffect(()=>{
   
    setNumeroAs(cadena.split("").filter(item=>(item==='a'||item==='A')).length);
},[cadena])

  const onCadenaChange = (event) => {
    setCadena(event.target.value);    
    
  };
  
  return (
    <>
      <div className='reto-grid'>

        <h1>RETO 3: CONTAR LAS VECES QUE APARECE LA LETRA A EN UNA FRASE</h1>

          <div className='reto-component'>
              <label>Frase</label>
              <input
                className="cadena"
                placeholder="Escribe una frase"
                value={cadena}
                onChange={onCadenaChange}
              />  
                
              <label>Número de letras "A" o "a":</label>  
              <textarea
                  className="display" 
                  placeholder='La frase tiene ...  letras A'
                  name="resultado" value={numeroAs}
                  onChange={onCadenaChange}
              /> 
          </div>

      </div>
      
    
    </>
  );
};

export {JumpforceValida};



