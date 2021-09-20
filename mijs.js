// let numeroUno = parseInt (prompt("Ingrese un número"));
// let numeroDos = parseInt (prompt("Ingrese el número que quiere verificar como múltiplo del primero"));
// let resultado ;

// function multiplo (num1, num2) {
//     resultado = num1 % num2
// }

// multiplo(numeroDos, numeroUno)

// if (resultado == 0) {
//     console.log("El numero " + numeroDos + " es multiplo de " + numeroUno); 
// }

// else {
//     console.log("El numero " + numeroDos + " no es multiplo de " + numeroUno);
// }

// let primeraNota = parseInt(prompt("Ingrese la primera nota del alumno"));
// let segundaNota = parseInt(prompt("Ingrese la segunda nota del alumno"));
// let terceraNota = parseInt(prompt("Ingrese la tercera nota del alumno"));
// let cuartaNota = parseInt(prompt("Ingrese la cuarta nota del alumno"));
// let quintaNota = parseInt(prompt("Ingrese la quinta nota del alumno"));
// let sextaNota = parseInt(prompt("Ingrese la sexta nota del alumno"));
// let promedioAlumno ;


// function promedio(notaUno, notaDos, notaTres, notaCuatro, notaCinco, notaSeis) {
//     promedioAlumno = (notaUno + notaDos + notaTres + notaCuatro + notaCinco + notaSeis) / 6;
// }

// function mostrar(mensaje) {
//     console.log("El promedio del alumno al finalizar la materia fue de " + mensaje);
// }

// promedio(primeraNota, segundaNota, terceraNota, cuartaNota, quintaNota, sextaNota);
// mostrar(promedioAlumno);


// Algoritmmo para crear objetos que se suman a un array y luego ordenarlos según el precio de los mismos de menor a mayor
let crearProducto = prompt("Si quiere hacer un nuevo producto ponga S, caso contrario N");
crearProducto = crearProducto.toUpperCase();
let productos = [];
let i = 0;
let ordenadaList


while(crearProducto === "S"){
    alert("Para crear su producto debera darnos tres datos. Primero el id del mismo. Segundo su precio. Tercero su nombre")
    let id = parseInt(prompt("Ingrese el id del producto, (solo numeros)"));
    let nombre = prompt("Ingrese el nombre del producto");
    let precio = parseInt(prompt("Ingrese el precio del producto"));    
    productos[i]= {"id":id,"nombre":nombre,"precio":precio}; 
    i += 1;
    crearProducto = prompt("Quiere hacer otro producto, escriba S en caso de ser sí. Escriba N es naso de no.");
    crearProducto = crearProducto.toUpperCase();
}

alert("Si usted ingreso varios productos, en la consola los podra ver ordenados por su precio desde mas baratos a mas caros.");

 productos.sort((a,b) => {
    if (a.precio > b.precio)
    return 1
    
    if (a.precio < b.precio)
    return -1
        
    return 0
})
        
console.log("Productos ordenados por su precio de menor a mayor");
console.log(productos);



// Algoritmo de lista de productos a las cuales el usuario agrega la fecha del vencimiento. Se ordenan los que tienen fecha de vencimiento mas próxima primero y luego los que la tienen mas lejana.
const productosNuevos = [
    {id:01256, nombre:"Leche", precio:50},
    {id:03453, nombre:"azucar", precio:22},
    {id:90347, nombre:"chocolate", precio:200},
    {id:59023, nombre:"mayonesa", precio:69},
    {id:32465, nombre:"harina", precio:120}
];

alert("Ahora debera agregar fecha de vencimiento a una lista productos ya establecios. Para esto debera pasar tres valores: dia, mes y año (todos con valor numérico)");

for(i = 0; i <= 4; i++){
    let año = parseInt(prompt("Ingrese el año de fabricación"));
    let mes = parseInt(prompt("Ingrese el mes de fabricación"));
        while (mes > 12 || mes < 0){
        alert("Recuerde que no puede ingresar números negativos y que los meses del año son 12");
        mes = parseInt(prompt("Ingrese el mes de fabricación"));
    }
    let dia = parseInt(prompt("Ingrese el día de fabricación"));
    switch (mes){
        case 1: while(dia > 31){
            alert("Enero tiene 31 días. Porfavor ingrese un día posible para Enero.");
            dia = parseInt(prompt("Ingrese el día de fabircación"));
        } while(dia < 0){
            alert("Los números negativos no son días válidos");
            dia = parseInt(prompt("Ingrese el día de fabircación"));
        } break;
        
        case 2: while(dia > 29){
            alert("Febrero tiene 29 días. Porfavor ingrese un día posible para Febrero.");
            dia = parseInt(prompt("Ingrese el día de fabircación"));
        } while(dia < 0){
            alert("Los números negativos no son días válidos");
            dia = parseInt(prompt("Ingrese el día de fabircación"));
        } break;

        case 3: while(dia > 31){
            alert("Marzo tiene 31 días. Porfavor ingrese un día posible para Marzo.");
            dia = parseInt(prompt("Ingrese el día de fabircación"));
        } while(dia < 0){
            alert("Los números negativos no son días válidos");
            dia = parseInt(prompt("Ingrese el día de fabircación"));
        } break;
    
        case 4: while(dia > 30){
            alert("Abril tiene 30 días. Porfavor ingrese un día posible para Abril.");
            dia = parseInt(prompt("Ingrese el día de fabircación"));
        } while(dia < 0){
            alert("Los números negativos no son días válidos");
            dia = parseInt(prompt("Ingrese el día de fabircación"));
        } break;
    
        case 5: while(dia > 31){
            alert("Mayo tiene 31 días. Porfavor ingrese un día posible para Mayo.");
            dia = parseInt(prompt("Ingrese el día de fabircación"));
        } while(dia < 0){
            alert("Los números negativos no son días válidos");
            dia = parseInt(prompt("Ingrese el día de fabircación"));
        } break;
    
        case 6: while(dia > 30){
            alert("Junio tiene 30 días. Porfavor ingrese un día posible para Junio.");
            dia = parseInt(prompt("Ingrese el día de fabircación"));
        } while(dia < 0){
            alert("Los números negativos no son días válidos");
            dia = parseInt(prompt("Ingrese el día de fabircación"));
        } break;
    
        case 7: while(dia > 31){
            alert("Julio tiene 31 días. Porfavor ingrese un día posible para Julio.");
            dia = parseInt(prompt("Ingrese el día de fabircación"));
        } while(dia < 0){
            alert("Los números negativos no son días válidos");
            dia = parseInt(prompt("Ingrese el día de fabircación"));
        } break;
    
        case 8: while(dia > 31){
            alert("Agosto tiene 31 días. Porfavor ingrese un día posible para Agosto.");
            dia = parseInt(prompt("Ingrese el día de fabircación"));
        } while(dia < 0){
            alert("Los números negativos no son días válidos");
            dia = parseInt(prompt("Ingrese el día de fabircación"));
        } break;
    
        case 9: while(dia > 30){
            alert("Septiembre tiene 30 días. Porfavor ingrese un día posible para Septiembre.");
            dia = parseInt(prompt("Ingrese el día de fabircación"));
        } while(dia < 0){
            alert("Los números negativos no son días válidos");
            dia = parseInt(prompt("Ingrese el día de fabircación"));
        } break;
    
        case 10: while(dia > 31){
            alert("Octubre tiene 31 días. Porfavor ingrese un día posible para Octubre.");
            dia = parseInt(prompt("Ingrese el día de fabircación"));
        } while(dia < 0){
            alert("Los números negativos no son días válidos");
            dia = parseInt(prompt("Ingrese el día de fabircación"));
        } break;

        case 11: while(dia > 30){
            alert("Noviembre tiene 30 días. Porfavor ingrese un día posible para Noviembre.");
            dia = parseInt(prompt("Ingrese el día de fabircación"));
        } while(dia < 0){
            alert("Los números negativos no son días válidos");
            dia = parseInt(prompt("Ingrese el día de fabircación"));
        } break;
    
        case 12: while(dia > 31){
            alert("Diciembre tiene 31 días. Porfavor ingrese un día posible para Diciembre.");
            dia = parseInt(prompt("Ingrese el día de fabircación"));
        } while(dia < 0){
            alert("Los números negativos no son días válidos");
            dia = parseInt(prompt("Ingrese el día de fabircación"));
        } break;
    }
    productosNuevos[i]["dia"] = dia;
    productosNuevos[i]["mes"] = mes;
    productosNuevos[i]["año"] = año;
}


    productosNuevos.sort((a, b) => {
        
        if (a["año"] > b["año"])
        return 1

        if (a["año"] < b["año"])
        return -1

        if (a["mes"] > b["mes"])
        return 1

        if (a["mes"] < b["mes"])
        return -1

        if (a["dia"] > b["dia"])
        return 1

        if (a["dia"] < b["dia"])
        return -1

        if (a["dia"] == b ["dia"])
        return 0

    });

    const nuevoArray = [
    {nombre:productosNuevos[0].nombre, dia:productosNuevos[0]["dia"], mes:productosNuevos[0]["mes"], año:productosNuevos[0]["año"]},
    {nombre:productosNuevos[1].nombre, dia:productosNuevos[1]["dia"], mes:productosNuevos[1]["mes"], año:productosNuevos[1]["año"]},
    {nombre:productosNuevos[2].nombre, dia:productosNuevos[2]["dia"], mes:productosNuevos[2]["mes"], año:productosNuevos[2]["año"]},
    {nombre:productosNuevos[3].nombre, dia:productosNuevos[3]["dia"], mes:productosNuevos[3]["mes"], año:productosNuevos[3]["año"]},
    {nombre:productosNuevos[4].nombre, dia:productosNuevos[4]["dia"], mes:productosNuevos[4]["mes"], año:productosNuevos[4]["año"]}
]
    
    
    console.log("Productos ordenados por fecha de vencimiento");
    console.log(nuevoArray);