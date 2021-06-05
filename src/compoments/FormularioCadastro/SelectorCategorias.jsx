import React, { Component } from "react";
import "./estilo.css";

class SelectorCategorias extends Component {
  
  constructor(){
    super();
    this.state = {categorias: []}
  }
  
  componentDidMount() {
    this.props.categorias.inscrever(this._atualizarComboCategorias.bind(this))
  }
  
  _atualizarComboCategorias(categorias){
    this.setState({...this.state, categorias});
  }

  _handlerSelecionarCategoria(event) {
    this.props.setCategoria(event.target.value);
  }

  render() {
    return (
      <select
        className="form-cadastro_select"
        name="categorias"
        placeholder="Selecione a categoria"
        onChange={this._handlerSelecionarCategoria.bind(this)}
      >
        <option>Sem categoria</option>
        {this.state.categorias.sort().map((categoria, index) => {
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
