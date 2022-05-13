const eventos = [
    {
        "id": 1, "evento": "Daddy Yankee", "fecha" : ["10/10/2022", "11/10/2022"], "precio": 12000, "stock": 2
    },
    {
        "id": 2, "evento": "Babasonicos", "fecha" : ["15/05/2022", "16/05/2022"], "precio": 7800, "stock": 5
    },
    {
        "id": 3, "evento": "Dua Lipa", "fecha" : "07/08/2022", "precio": 14300, "stock": 3
    }
]

let lista = listarEventos(eventos);

let confirmation = confirm('Confirmo que soy mayor de 18 años');
if(confirmation){
    let evento = parseInt(prompt('Seleccione el evento deseado \n' + lista)); 
    switch (evento){
        case 1: 
            let fecha1 = parseInt(prompt('Seleccione fecha \n 1 - 10/10/2022 \n 2 - 11/10/2022'));
            fecha1==1 ? fecha1='10/10/2022' : fecha1='11/10/2022';
            let cantidad1 = parseInt(prompt('Seleccione cantidad de entradas (Máximo de 6) \n Valor $12000'));
            const evento1 = new Compra (1, 'Daddy Yankee', fecha1, 12000, cantidad1);
            total(evento1);
            break;

        case 2:
            let fecha2 = parseInt(prompt('Seleccione fecha \n 1 - 15/05/2022 \n 2 - 16/05/2022'));
            fecha2==1 ? fecha2='15/05/2022' : fecha2='16/15/2022';
            let cantidad2 = parseInt(prompt('Seleccione cantidad de entradas (Máximo de 6) \n Valor $7800'));
            const evento2 = new Compra (2, 'Babasonicos', fecha2, 7800, cantidad2);
            total(evento2);
            break;

        case 3:
            let fecha3 = confirm('Seleccione fecha \n 1 - 07/08/2022');
            fecha3=='07/08/2022';
            let cantidad3 = parseInt(prompt('Seleccione cantidad de entradas (Máximo de 6) \n Valor $14300'));
            const evento3 = new Compra (1, 'Dua Lipa', fecha3, 14300, cantidad3);
            total(evento3);
            break;

        default: 
            alert('Selección incorrecta');
            break;
    }

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


/*
function Compra (id, evento, fecha, precio, cantidad){
    this.id = id;
    this.evento = evento;
    this.fecha = fecha;
    this.precio = precio;
    this.cantidad = cantidad;
}

function total (x){
    let total = x.precio * x.cantidad;
    let aceptacion = confirm('Evento: ' + x.evento + '\n Fecha: ' + x.fecha + '\n Cantidad entradas: ' + x.cantidad + '\n Valor Unidad: $' + x.precio + '\n TOTAL= $' + total + '\n ¿Estas seguro?');
    if(aceptacion){
        alert('Compra exitosa');
    } else {
        alert('Compra cancelada');
    }
}*/