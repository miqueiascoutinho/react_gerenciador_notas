import React, { Component } from "react";
import ListaDeNotas from "./compoments/ListaDeNotas";
import FormularioCadastro from "./compoments/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
