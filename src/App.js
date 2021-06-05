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

  criarNota(titulo, descricao, categoria) {
    const novaNota = { titulo, descricao, categoria };
    const todasNotas = [...this.state.notas, novaNota];
    const novoEstado = {...this.state, notas: todasNotas};
    this.setState(novoEstado);
  }

  excluirNota(indice) {
    this.notas = this.state.notas;
    this.notas.splice(indice, 1);

    this.setState({
      notas: this.notas
    });
  }

  criarCategoria(categoria) {
    let todasCategorias = [...this.state.categorias, categoria];
    let novoEstado = { ...this.state, categorias: todasCategorias };

    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          novaNota={this.criarNota.bind(this)}
          categorias={this.state.categorias}
        />
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
