import React, { useEffect, useState, useContext } from "react";
import DadosContexts from "../../contexts/DadosContexts";
import "./estilo.css";

function SelectorCategorias(props) {
  const dadosContexts = useContext(DadosContexts);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    function atualizarCategorias(ctgs) {
      setCategorias([...ctgs]);
    }

    dadosContexts.categorias.inscrever(atualizarCategorias);

    return function cleanUP() {
      dadosContexts.categorias.desinscrever(atualizarCategorias);
    }
  });

  function _handlerSelecionarCategoria(evento) {
    props.selecionarCateroria(evento.target.value);
  }

  return (
    <select
      className="form-cadastro_select"
      name="categorias"
      placeholder="Selecione a categoria"
      onChange={_handlerSelecionarCategoria}
    >
      <option>Sem categoria</option>
      {categorias.sort().map((categoria, index) => {
        return (
          <option key={index} className="form-cadastro_select_item">
            {categoria}
          </option>
        );
      })}
    </select>
  );
}

export default SelectorCategorias;
