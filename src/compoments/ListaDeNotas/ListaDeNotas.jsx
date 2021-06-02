import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Estudo", "Trabalho", "Relacionamento").map((categoria, index) => {
          return(
            <li key={index}>
              <div>
                <h1>{categoria}</h1>
              </div>
              <CardNota/>                            
            </li>
          )
        })}        
      </ul>
    );
  }
}

export default ListaDeNotas;
