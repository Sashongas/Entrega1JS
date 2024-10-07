// Bienvenida

function bienvenida(){
    let quiereComprar = prompt ("Holis, bienvenido a la churreria, desea hacer una comra? Responda SI o NO");
    
    if (quiereComprar.toLowerCase() == "si"){
        listaDeCompras();  }
    
    else if (quiereComprar.toLowerCase() == "no"){
        alert ("Chauchis :)");
    }
    
    else{
        alert ("Por fis indica si o no");
        bienvenida();
    }


}

// Verifico la cantidad de cada prod y si efectivamente la entrada es un numero mediante isNaN
    
function listaDeCompras(){
    let dulceDeLeche = prompt ("Dulce de leche (maximo 12 unidades):");
    
    while (isNaN(dulceDeLeche) || dulceDeLeche < 0 || dulceDeLeche > 12) {
        alert("Indica un número válido entre 0 y 12.");
        dulceDeLeche = prompt("Dulce de leche (máximo 12 unidades):");
    }

    let sinRelleno = prompt("Sin relleno (máximo 12 unidades):");
    while (isNaN(sinRelleno) || sinRelleno < 0 || sinRelleno > 12) {
        alert("Indica un número válido entre 0 y 12.");
        sinRelleno = prompt("Sin relleno (máximo 12 unidades):");
    }

    let conNutella = prompt("Nutella (máximo 12 unidades):");
    while (isNaN(conNutella) || conNutella < 0 || conNutella > 12) {
        alert("Indica un número válido entre 0 y 12.");
        conNutella = prompt("Nutella (máximo 12 unidades):");
    }

    confirm ("Su pedido es el siguiente: - Con Nutella: " + conNutella + "-- Con DDL: " + dulceDeLeche + "--- Sin Relleno: " + sinRelleno)

}

 
bienvenida();






    /*   
    if (quiereComprar = "si"){
        let listaDeCompras = prompt ("Por fis indica los productos que desea comprar"); 
    } */