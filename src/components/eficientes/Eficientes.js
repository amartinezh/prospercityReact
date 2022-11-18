import ema from "./Ema.jpg";
import ayda from "./Ayda.jpg";
import jose from "./Jose.jpg";
import JuanD from "./JuanD.jpg";
import Anyi from "./Anyi.jpg";
import "./Eficientes.css";
import EficientesState from "../eficientesState/EficientesState";
import EficientesComponentValida from "../eficientesComponetValida/EficientesComponentValida";

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
          <img src={Anyi}></img>
          <p>Anyi Hernandez</p>
        </div>
        <div className="img">
          <img src={jose}></img>
          <p>Jose Luis Giraldo</p>
        </div>
        <div className="img">
          <img src={JuanD}></img>
          <p>Juan David Ramirez</p>
        </div>
      </div>
      <EficientesState />
      <EficientesComponentValida />
    </div>
  );
}

export default Eficientes;
