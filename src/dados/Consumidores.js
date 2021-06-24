export default class Consumidores {
    constructor(){
        this.consumidores = [];
    }

    //recebe a função para notificação / callbacks quando o objeto for atualizado
    inscrever(funct) {
        this.consumidores.push(funct);
    }

    desinscrever(funct){
        let novosConsumidores  = this.consumidores.filter(f => f !== funct)
        this.consumidores = novosConsumidores;
    }

    notificar(objUpdate) {
        this.consumidores.forEach(consumer =>{
            consumer(objUpdate);
        })
    }
}
