import './css/input.css';

import React, { Component } from 'react';

class Calcula extends Component {
  constructor(props) {

    super(props);
    this.state = { Num1: '', Num2: '' };

  }

  Add = () => {
    var n1 = parseInt(this.state.Num1);
    var n2 = parseInt(this.state.Num2);
    var ans = n1 + n2;
    alert('El resultado de la suma es:' + ans);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={(e) => this.setState({ Num1: e.target.value })}
          value={this.state.Num1} />

        <input type="text" onChange={(e) => this.setState({ Num2: e.target.value })}
          value={this.state.Num2} />
        <button title="Add" onClick={this.Add} > Obtener Suma</button>
      </div>
    );

  }

}

export default Calcula;