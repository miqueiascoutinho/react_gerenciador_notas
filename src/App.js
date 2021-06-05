import React, { Component } from "react";
import ListaDeNotas from "./compoments/ListaDeNotas";
import FormularioCadastro from "./compoments/FormularioCadastro";
import ListaDeCategorias from "./compoments/ListaDeCategorias";
import Categorias from "./dados/Categorias";
import Notas from "./dados/Notas";

import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new Notas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          novaNota={this.notas.adicionarNota.bind(this.notas)}
          inscreverCategoria={this.categorias.inscrever.bind(this.categorias)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            criarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            inscreverCategoria={this.categorias.inscrever.bind(this.categorias)}
          />
          <ListaDeNotas
            excluirNota={this.notas.excluirNota.bind(this.notas)}
            inscreverNota={this.notas.inscrever.bind(this.notas)}
          />
        </main>
      </section>
    );
  }
}

export default App;
