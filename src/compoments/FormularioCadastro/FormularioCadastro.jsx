import React, { useContext, useState } from "react";
import SelectorCategorias from "./SelectorCategorias";
import "./estilo.css";
import DadosContexts from "../../contexts/DadosContexts";

function FormularioCadastro() {
  const [tituloNota, setTituloNota] = React.useState("");
  const [detalheNota, setDetalheNota] = React.useState("");
  const [categoria, setCategoria] = useState("Sem categoria");
  const dadosContexts = useContext(DadosContexts);

  function _handlerTituloNota(evento) {
    let titulo = evento.target.value;

    if (titulo.length <= 20) {
      setTituloNota(titulo);      
    }

  }

  function _handlerDetalheNota(evento) {
    let detalhe = evento.target.value;
    
    if (detalhe.length <= 100) {
      setDetalheNota(detalhe);
    }
  }

  function _handlerCriarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    dadosContexts.notas.adicionarNota(tituloNota, detalheNota, categoria);
    setDetalheNota("");
    setTituloNota("");
  }

  return (
    <form className="form-cadastro " onSubmit={_handlerCriarNota}>
      <SelectorCategorias selecionarCateroria={setCategoria} />
      <input
        type="text"
        placeholder="Título"
        className="form-cadastro_input"
        value={tituloNota}
        onChange={_handlerTituloNota}
        required={true}
      />
      <textarea
        rows={15}
        placeholder="Escreva sua nota..."
        className="form-cadastro_input"
        value={detalheNota}
        onChange={_handlerDetalheNota}
        required={true}
      />
      <ul>
        <li>{detalheNota.length} de 100 caracteres</li>
      </ul>
      <button
        className="form-cadastro_input form-cadastro_submit"
        type="submit"
      >
        Criar Nota
      </button>
    </form>
  );
}

export default FormularioCadastro;
