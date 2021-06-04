import React, { Component } from "react";
import "./estilo.css";
//import deleteSvg from "../../assets/img/delete.svg";
import {ReactComponent as DeleteSvg} from "../../assets/img/delete.svg";
class CardNota extends Component {

  _handlerExcluirCard() {
    this.indice = this.props.indice;
    this.props.excluirNota(this.indice);
  }
  
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <DeleteSvg onClick={this._handlerExcluirCard.bind(this)}/>
          

          <h3 className="card-nota_titulo">{this.props.nota.titulo}</h3>
        </header>
        <p className="card-nota_texto">{this.props.nota.descricao}</p>
      </section>
    );
  }
}

export default CardNota;
