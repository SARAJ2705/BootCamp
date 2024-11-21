let salir = "no";

while(salir=="no"){
    let num1 = parseFloat(prompt("Digita un número:"));
    let num2 = parseFloat(prompt("Digita otro número:"));
    let operacion = prompt("Diga la operación (suma, resta, multiplicación, división):");

    function realizarOperacion(num1, num2, operacion) {
        if (operacion === "suma") {
            return num1 + num2;
        } else if (operacion === "resta") {
            return num1 - num2;
        } else if (operacion === "multiplicación") {
            return num1 * num2;
        } else if (operacion === "división") {
            if (num2==0){
                num2 = prompt("Error. No puedes dividir entre 0. Digita otro número:");
            }
            return num1 / num2;
        } else {
            return "Operación no válida.";
        }
    }
    let resultado = realizarOperacion(num1, num2, operacion)
    alert("El resultado de la operación es: " + resultado);
    salir = prompt("¿Desea salir?(si, no)");
}

document.write("El programa ha finalizado :D");
