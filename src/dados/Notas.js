import Consumidores from "./Consumidores";

export default class ArrayDeNotas extends Consumidores{
    constructor(){
        super();
        this.notas = [];
    }

    adicionarNota(titulo, descricao, categoria) {
        let nota = new Nota(titulo, descricao, categoria);
        this.notas.push(nota);
        this.notificar(this.notas);
    }

    excluirNota(indice) {
        this.notas.splice(indice, 1);
        this.notificar(this.notas);
    }
}

class Nota {
    constructor(titulo, descricao, categoria) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.categoria = categoria;
    }
}