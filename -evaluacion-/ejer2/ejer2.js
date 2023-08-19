// El producto interno de dos listas de números es la suma de los productos de los
// términos correspondientes de ambas.
//  Escriba la función producto_interno(a, b) que entregue el producto internode a y b:
//  Ejemplo: a = [7, 1, 4, 9, 8, ], b = [0, 1, 2, 3, 4]], producto_interno(a, b) = 7*0 + 1*1 + 4*2 + 9*3 + 8*4 = 68

function producto_interno(a, b) {
    let suma = 0;
    for (let i = 0; i < a.length; i++) {
        suma += a[i] * b[i];
    }
    return suma;
}

let a = [];
let b = [];

let cantidad = parseInt(prompt("Ingrese la cantidad de datos que desea ingresar"));

for (let i = 0; i < cantidad; i++) {
    a.push(parseInt(prompt("Ingrese el dato " + (i + 1) + " de la lista A")));
}

for (let i = 0; i < cantidad; i++) {
    b.push(parseInt(prompt("Ingrese el dato " + (i + 1) + " de la lista B")));
}

console.log("El producto interno de las listas es: " + producto_interno(a, b));

