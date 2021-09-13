let numeroUno = parseInt (prompt("Ingrese un número"));
let numeroDos = parseInt (prompt("Ingrese el número que quiere verificar como múltiplo del primero"));
let resultado ;

function multiplo (num1, num2) {
    resultado = num1 % num2
}

multiplo(numeroDos, numeroUno)

if (resultado == 0) {
    console.log("El numero " + numeroDos + " es multiplo de " + numeroUno); 
}

else {
    console.log("El numero " + numeroDos + " no es multiplo de " + numeroUno);
}

let primeraNota = parseInt(prompt("Ingrese la primera nota del alumno"));
let segundaNota = parseInt(prompt("Ingrese la segunda nota del alumno"));
let terceraNota = parseInt(prompt("Ingrese la tercera nota del alumno"));
let cuartaNota = parseInt(prompt("Ingrese la cuarta nota del alumno"));
let quintaNota = parseInt(prompt("Ingrese la quinta nota del alumno"));
let sextaNota = parseInt(prompt("Ingrese la sexta nota del alumno"));
let promedioAlumno ;


function promedio(notaUno, notaDos, notaTres, notaCuatro, notaCinco, notaSeis) {
    promedioAlumno = (notaUno + notaDos + notaTres + notaCuatro + notaCinco + notaSeis) / 6;
}

function mostrar(mensaje) {
    console.log("El promedio del alumno al finalizar la materia fue de " + mensaje);
}

promedio(primeraNota, segundaNota, terceraNota, cuartaNota, quintaNota, sextaNota);
mostrar(promedioAlumno);