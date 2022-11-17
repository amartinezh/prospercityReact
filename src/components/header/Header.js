import logo from './prosper.png';
import '../../App.css';


function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenid@ a Prospercity
        </p>
        
      </header>
    </div>
  );
}

export default Header;
