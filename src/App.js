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
    //this.notas.push(novaNota);
    const novasNotas = [...this.state.notas, novaNota];

    this.setState({
      notas:novasNotas,
      texto: 'ok'
    })
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro novaNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
