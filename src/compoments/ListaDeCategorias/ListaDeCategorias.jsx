import React, { Component } from "react";
import "./estilo.css";
class ListaDeCategorias extends Component {

  constructor(){
    super();
    this.categorias = [];
    this.state = {categorias : this.categorias}
  }

  componentDidMount(){
    //this.props.inscreverCategoria(this._atualizarCategorias.bind(this))
    this.props.categorias.inscrever(this._atualizarCategorias.bind(this))
  }

  _atualizarCategorias(categorias){
    this.setState({...this.state, categorias})
  }

  _handlerCriarCategoria(event) {
    if (event.keyCode === 13 && event.target.value.trim().length > 0) {
        //this.props.criarCategoria(event.target.value);
        this.props.categorias.adicionarCategoria(event.target.value);
        event.target.value = "";
    }
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, indice) => {
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
