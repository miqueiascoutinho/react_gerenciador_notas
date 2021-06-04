import React, { Component } from "react";
import "./estilo.css";
class ListaDeCategorias extends Component {
  _handlerCriarCategoria(event) {
    if (event.keyCode === 13) {
        this.props.criarCategoria(event.target.value);
        event.target.value = "";
    }
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.map((categoria, indice) => {
            return (
              <li key={indice} className="lista-categorias_item">
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          placeholder="Digite uma categoria"
          className="lista-categorias_input"
          onKeyUp={this._handlerCriarCategoria.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
