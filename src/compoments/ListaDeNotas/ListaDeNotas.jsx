import React, { useContext, useEffect, useState } from "react";
import DadosContexts from "../../contexts/DadosContexts";
import CardNota from "../CardNota";
import "./estilo.css";

function ListaDeNotas() {
  const [notas, setNotas] = useState([]);
  const dados = useContext(DadosContexts);

  useEffect(() => {
    function atualizarNotas(nts) {
      setNotas([...nts]);
    }

    dados.notas.inscrever(atualizarNotas);

    return function cleanup() {
      dados.notas.desinscrever(atualizarNotas);
    };
  });

  return (
    <ul className="lista-notas">
      {notas.map((nota, index) => {
        return (
          <li key={index} className="lista-notas_item">
            <CardNota indice={index} nota={nota}/>
          </li>
        );
      })}
    </ul>
  );
}

export default ListaDeNotas;
