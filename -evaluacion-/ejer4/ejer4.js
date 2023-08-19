// Para este ejercicio crearemos dos funciones:
// - Escriba la función todos_iguales(lista) que indique si todos los
// elementos de una lista son iguales: todos_iguales([6, 6, 6]) true,
// todos_iguales([6, 6, 1]) false
// A continuación, escriba una función todos_distintos(lista) que
// indique si todos los elementos de una lista son distintos: todos_distintos([6, 6, 6]) false, todos_distintos([0, 90, 1]) true.

function todos_iguales(lista) {
    let iguales = true;
    for (let i = 0; i < lista.length; i++) {
        if (lista[0] != lista[i]) {
            iguales = false;
        }
    }
    return iguales;
}

function todos_distintos(lista) {
    let distintos = true;
    for (let i = 0; i < lista.length; i++) {
        for (let j = i + 1; j < lista.length; j++) {
            if (lista[i] == lista[j]) {
                distintos = false;
            }
        }
    }
    return distintos;
}

let lista = [];

while (true) {
    let dato = prompt("Ingrese un dato a la lista, fin para terminar");
    if (dato == "fin" ){
        break;
    }
    lista.push(dato);
}

console.log("Todos los elementos de la lista son iguales: " + todos_iguales(lista));
console.log("Todos los elementos de la lista son distintos: " + todos_distintos(lista));
console.log(lista);