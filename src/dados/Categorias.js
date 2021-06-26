import Consumidores from "./Consumidores";

export default class Categorias extends Consumidores{
    constructor(){
        super();
        this.categorias = [];
    }

    adicionarCategoria(novaCategoria) {
        this.categorias.push(novaCategoria);
        this.notificar(this.categorias);
    }

    removerCategoria(index) {
        this.categorias.splice(index, 1);
        this.notificar(this.categorias);
    }
}
