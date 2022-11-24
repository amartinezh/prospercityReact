import { useState, useEffect } from 'react'
import './ConvertirAMayuscula.css';

function ConvertirAMayuscula() {

  const [cadena, setCadena] = useState('')
  const [mayuscula, setMayuscula] = useState()


useEffect(()=>{
    // const {value}=cadena;
    setMayuscula(cadena.toUpperCase());
},[cadena])

  const onCadenaChange = (event) => {
    setCadena(event.target.value);    
    
  };

  return (
    <>
      <div className='reto-grid'>

        <h1>RETO 2: CONVERTIR DE minúscula A MAYÚSCULAS</h1>

          <div className='reto-component'>
              <input
                className="cadena"
                placeholder="Escribe una frase en minúsculas"
                value={cadena}
                onChange={onCadenaChange}
              />  
                
              <textarea 
                  className="mayuscula" 
                  placeholder='AQUI VA LA FRASE EN MAYUSCULAS'
                  name="resultado" value={mayuscula}
                  onChange={onCadenaChange}
              /> 
          </div>

      </div>
      
    
    </>
  );
};

export {ConvertirAMayuscula};




