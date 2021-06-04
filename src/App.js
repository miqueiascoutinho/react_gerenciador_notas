import React, { Component } from "react";
import ListaDeNotas from "./compoments/ListaDeNotas";
import FormularioCadastro from "./compoments/FormularioCadastro";
import ListaDeCategorias from "./compoments/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: []
    };
  }

  criarNota(titulo, descricao) {
    const novaNota = { titulo, descricao };
    const todasNotas = [...this.state.notas, novaNota];

    this.setState({
      notas: todasNotas, 
      categorias: this.state.categorias
    });
  }

  excluirNota(indice) {
    this.notas = this.state.notas;
    this.notas.splice(indice, 1);

    this.setState({
      notas: this.notas
    });
  }

  criarCategoria(categoria) {
    console.log(categoria);

    this.setState({
      notas: this.state.notas, 
      categorias: [...this.state.categorias, categoria]
    });
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro novaNota={this.criarNota.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias
            criarCategoria={this.criarCategoria.bind(this)}
            categorias={this.state.categorias}
          />
          <ListaDeNotas
            notas={this.state.notas}
            excluirNota={this.excluirNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
