import React, { useContext, useState } from "react";
import SelectorCategorias from "./SelectorCategorias";
import "./estilo.css";
import DadosContexts from "../../contexts/DadosContexts";

function FormularioCadastro() {
  const [titulo, setTitulo] = React.useState("");
  const [nota, setNota] = React.useState("");
  const [categoria, setCategoria] = useState("Sem categoria");
  const [nomeNota, setNomeNota] = useState({});
  const dadosContexts = useContext(DadosContexts);

  function _handlerDigitarTitulo(evento) {
    setTitulo(evento.target.value);
  }

  function _handerDigitarNota(evento) {
    setNota(evento.target.value);
  }

  function _handlerCriarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    dadosContexts.notas.adicionarNota(titulo, nota, categoria);
    setNomeNota({ ...nomeNota, nome: nota });
  }

  return (
    <form className="form-cadastro " onSubmit={_handlerCriarNota}>
      <SelectorCategorias selecionarCateroria={setCategoria} />
      <input
        type="text"
        placeholder="Título"
        className="form-cadastro_input"
        onChange={_handlerDigitarTitulo}
      />
      <textarea
        rows={15}
        placeholder="Escreva sua nota..."
        className="form-cadastro_input"
        onChange={_handerDigitarNota}
      />
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
