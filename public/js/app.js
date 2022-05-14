const eventos = [
    {
        "id": 1, "evento": "Daddy Yankee", "fecha" : ["10/10/2022", "11/10/2022"], "precio": 12000, "stock": 2
    },
    {
        "id": 2, "evento": "Babasonicos", "fecha" : ["15/05/2022", "16/05/2022"], "precio": 7800, "stock": 7
    },
    {
        "id": 3, "evento": "Dua Lipa", "fecha" : ["07/08/2022"], "precio": 14300, "stock": 3
    }
]

class Compra{
    constructor (idEvento, evento, fechaElegida, cantEntradas, precio) {
        this.idEvento = idEvento;
        this.evento = evento;
        this.fechaElegida = fechaElegida;
        this.cantEntradas = cantEntradas;
        this.precio = precio;
    }
}

let idEvento, fechaElegida, cantEntradas ="";

let lista = listarEventos(eventos);

let confirmation = confirm('Confirmo que soy mayor de 18 años');
if(confirmation){
    idEvento = parseInt(prompt(`Seleccione el evento deseado\n${lista}`));
    idEvento = idEvento - 1; 
    fechaElegida = parseInt(prompt(`Seleccione fecha \n${listarFechasEvento(eventos, idEvento)} `));
    fechaElegida = eventos[idEvento].fecha[fechaElegida-1];
    cantEntradas = parseInt(prompt(`Seleccione cantidad de entradas (Máximo de 6 por persona) \n Valor $${eventos[idEvento].precio}`));
    while(cantEntradas > 6 ){
        cantEntradas = prompt("El máximo permitido por persona es de 6 entradas, por favor ingrese número menor");
    }
    while(cantEntradas > eventos[idEvento].stock){
        cantEntradas = prompt(`La cantidad ingresada no está disponible.\n Disponible actual = ${eventos[idEvento].stock}`);
    }
    const compra1 = new Compra(idEvento, eventos[idEvento].evento, fechaElegida, cantEntradas, eventos[idEvento].precio);
    total(compra1);

    
} else{
    alert('No esta permitido la venta a menores de edad');
}

function listarEventos(eventos){
    let listado = "";
    eventos.forEach( (ev) => {
        let itemList = (ev.id + "-" + ev.evento + "\n");
        listado = listado + itemList;
    })
    return listado;
}