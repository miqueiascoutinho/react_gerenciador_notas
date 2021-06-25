import React, { useContext } from "react";
import "./estilo.css";
import { ReactComponent as DeleteSvg } from "../../assets/img/delete.svg";
import DadosContexts from "../../contexts/DadosContexts";
function CardNota({ indice, nota }) {
  const dados = useContext(DadosContexts);

  function _handlerExcluirCard() {
    dados.notas.excluirNota(indice);
  }

  return (
    <section className="card-nota">
      <header className="card-nota_cabecalho">
        <DeleteSvg onClick={_handlerExcluirCard} />
        <h3 className="card-nota_titulo">{nota.titulo}</h3>
        <h4 className="card-nota_categoria">{nota.categoria}</h4>
      </header>
      <p className="card-nota_texto">{nota.descricao}</p>
    </section>
  );
}

export default CardNota;
