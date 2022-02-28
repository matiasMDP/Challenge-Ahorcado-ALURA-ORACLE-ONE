function dibujarLetra(letra) {
    let indicador = 0;
    for(let i = 0; i < palabraJuego.length; i++) {
        if(letra == palabraJuego[i] && palabraJuego.join("") != palabraEnJuego.join("")) {
            pincel.beginPath();
            pincel.fillStyle = "#FFFFFF";
            pincel.font = "bold 50px 'Calibri'";
            pincel.fillText(letra, (305 + (60 * i)), 290);
            palabraEnJuego[i] = palabraJuego[i];
            indicador++;
        }
        
        if(palabraJuego.join("") == palabraEnJuego.join("")) {
            flag = false;
            esGanador = true;
            dibujarGanador();
        }
    }
    if(indicador == 0) {
        pincel.beginPath();
        pincel.fillStyle = "#FFFFFF";
        pincel.font = "bold 50px 'Calibri'";
        pincel.fillText(letra, (255 + (60 * contadorLetraError)), 390);
        contadorLetraError++;
        return false;
    } else {
        return true;
    }
}


function validarLetra(letraIngresada) {
    const pattern = new RegExp('^[A-Z\u00d1]+$', 'i');
    if(!pattern.test(letraIngresada) || letraIngresada.length > 1) {
        swal("¡Solo letras!", `Ha ingresado "${letraIngresada.toUpperCase()}" y solo se permiten letras.`, "warning");
        return false;
    } else {
        return true;
    }
}

function validarPalabra(letraIngresada) {
    const pattern = new RegExp('^[A-Z\u00d1]+$', 'i');
    if(!pattern.test(letraIngresada)) {
        swal("¡Solo letras!", `Ha ingresado "${letraIngresada.toUpperCase()}" y solo se permiten letras.`, "warning");
        return false;
    } else {
        return true;
    }
}
