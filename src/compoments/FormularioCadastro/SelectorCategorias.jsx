import React, { Component } from "react";
import "./estilo.css";

class SelectorCategorias extends Component {
  render() {
    return (
      <select
        className="form-cadastro_select"
        name="categorias"
        placeholder="Selecione a categoria"
      >
        {this.props.categorias.sort().map((categoria, index) => {
          return (
            <option key={index} className="form-cadastro_select_item">
              {categoria}
            </option>
          );
        })}
      </select>
    );
  }
}

export default SelectorCategorias;