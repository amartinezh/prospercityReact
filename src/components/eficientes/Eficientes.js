import ema from "./Ema.jpg";
import ayda from "./Ayda.jpg";
import jose from "./Jose.jpg";
import "./Eficientes.css";

function Eficientes() {
  return (
    <div>
      <h1 className="title">Hola !!! somos el equipo de los eficientes</h1>
      <div className="content">
        <div className="img">
          <img src={ema}></img>
          <p>Emmanuel Renteria</p>
        </div>
        <div className="img">
          <img src={ayda}></img>
          <p>Ayda Montoya Henao</p>
        </div>
        <div className="img">
          <img src={jose}></img>
          <p>Jose Luis Giraldo</p>
        </div>
      </div>
    </div>
  );
}

export default Eficientes;
