import React, { useContext, useEffect, useState } from "react";
import DadosContexts from "../../contexts/DadosContexts";
import "./estilo.css";
import { ReactComponent as DeleteSvg } from "../../assets/img/delete_forever.svg";

function ListaDeCategorias() {
  const [categorias, setCategorias] = useState([]);
  const dados = useContext(DadosContexts);

  useEffect(() => {
    function atualizarCategorias(ctgs) {
      setCategorias([...ctgs]);
    }

    dados.categorias.inscrever(atualizarCategorias);

    return function cleanUp() {
      dados.categorias.desinscrever(atualizarCategorias);
    };
  });

  function _handlerCriarCategoria(event) {
    if (event.keyCode === 13 && event.target.value.trim().length > 0) {
      dados.categorias.adicionarCategoria(event.target.value);
      event.target.value = "";
    }
  }

  function _renderizarBotaoDeleteCategoria(index) {
    return (
      <DeleteSvg
        onDoubleClick={removerCategoria}
      />
    );

    function removerCategoria(){
      dados.categorias.removerCategoria(index);
    }
  }

  return (
    <section className="lista-categorias">
      <ul className="lista-categorias_lista">
        {categorias.map((categoria, indice) => {
          return (
            <li key={indice} className="lista-categorias_item">
              {_renderizarBotaoDeleteCategoria(indice)}
              {categoria}
            </li>
          );
        })}
      </ul>
      <input
        type="text"
        placeholder="Digite uma categoria"
        className="lista-categorias_input"
        onKeyUp={_handlerCriarCategoria}
      />
    </section>
  );
}

export default ListaDeCategorias;
