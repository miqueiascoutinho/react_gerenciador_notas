import React, { Component } from "react";
import ListaDeNotas from "./compoments/ListaDeNotas";
import FormularioCadastro from "./compoments/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {

  constructor() {
    super();    
    this.state = {
      notas: []
    }
  }

  criarNota(titulo, descricao) {
    const novaNota = {titulo, descricao};
    const todasNotas = [...this.state.notas, novaNota];

    this.setState({
      notas:todasNotas
    })
  }

  excluirNota(indice) {
    this.notas = this.state.notas;
    this.notas.splice(indice,1);
  
    this.setState({
      notas: this.notas
    })
    

  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro novaNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas} excluirNota={this.excluirNota.bind(this)}/>
      </section>
    );
  }
}

export default App;
