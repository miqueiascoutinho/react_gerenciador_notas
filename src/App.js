import React, { Component } from "react";
import ListaDeNotas from "./compoments/ListaDeNotas";
import FormularioCadastro from "./compoments/FormularioCadastro";
import ListaDeCategorias from "./compoments/ListaDeCategorias";
import Categorias from "./dados/Categorias";
import Notas from "./dados/Notas";
import DadosContexts from "./contexts/DadosContexts";

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
      <DadosContexts.Provider
        value={{
          notas:this.notas,
          categorias:this.categorias,
        }}
      >
        <section className="conteudo">
          <FormularioCadastro />
          <main className="conteudo-principal">
            <ListaDeCategorias />
            <ListaDeNotas />
          </main>
        </section>
      </DadosContexts.Provider>
    );
  }
}

export default App;
