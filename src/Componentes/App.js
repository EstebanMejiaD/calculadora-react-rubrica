import Display from "./Display";

import PanelDeBotones from "./PanelDeBotones";
import { Component } from "react";
import operaciones from "../logic/operaciones";
import "./App.css"

class App extends Component {

  state = {
    total: null,
    siguiente: null,
    operador: null,
  }
    
  handleClick = nombreDeBoton => this.setState(operaciones(this.state, nombreDeBoton))
  
  render() {
     return (
      <div className="contenedor-padre">
        <div className="comoponent-app">
        <Display value1={this.state.total} oper={this.state.operador} value2={this.state.siguiente} />
        <PanelDeBotones clickHandle={this.handleClick} />
        
      </div>
      <div>
        
      </div>
      </div>
      
    );
  }
}

export default App;