import React, { Component } from "react";
import SelectorCategorias from "./SelectorCategorias";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.nota = "";
    this.categoria = "Sem categoria";
    this.state = {};
  }

  setCategoria(categoria) {
    this.categoria = categoria;
  }

  _handlerDigitarTitulo(evento) {
    this.titulo = evento.target.value;
  }

  _handerDigitarNota(evento) {
    this.nota = evento.target.value;
  }

  _handlerCriarNota(evento) {
    this.setState({ nome: this.nota });
    evento.preventDefault();
    evento.stopPropagation();
    this.props.novaNota(this.titulo, this.nota, this.categoria);
  }

  render() {
    return (
      <form
        className="form-cadastro "
        onSubmit={this._handlerCriarNota.bind(this)}
      >
        <SelectorCategorias
          inscreverCategoria={this.props.inscreverCategoria.bind(this)}
          setCategoria={this.setCategoria.bind(this)}
        />
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handlerDigitarTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handerDigitarNota.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
