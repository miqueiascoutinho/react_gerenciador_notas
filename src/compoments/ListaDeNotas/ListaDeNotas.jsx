import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
class ListaDeNotas extends Component {

  constructor(){
    super();
    this.state = {notas:[]};
  }

  componentDidMount(){
    this.props.inscreverNota(this._atualizarNotas.bind(this))
  }

  _atualizarNotas(notas) {
    this.setState({...this.state, notas});
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return(
            <li key={index} className="lista-notas_item">
              <CardNota nota={nota} indice={index} excluirNota={this.props.excluirNota}/>
            </li>
          )
        })}        
      </ul>
    );
  }
}

export default ListaDeNotas;
