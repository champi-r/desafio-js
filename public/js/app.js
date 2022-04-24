let turnosdisp = 7;

for(i=1; i<=turnosdisp; i++){
    let cliente = prompt("Ingrese su nombre");
    alert("Bienvenido " + cliente);
    let reserva = confirm("¿Reserva turno?");
    if(reserva){
        alert("Reserva confirmada. Turno asignado AF" + i );
    } else{
        i--;
    }
}
alert("Turnos agotados");