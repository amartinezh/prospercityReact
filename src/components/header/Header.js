import logo from './prosper.png';
import '../../App.css';
import Alpha from '../alpha/Alpha';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenid@ a Prospercity
        </p>
        
      </header>
      <Alpha />
    </div>
  );
}

export default Header;
