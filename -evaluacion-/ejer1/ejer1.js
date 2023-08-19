// Escriba un programa usando funciones que pregunte al usuario cuántos datos ingresará, a
// continuación le pida que ingrese los datos uno por uno, y finalmente entregue como
// salida cuántos de los datos ingresados son mayores que el promedio.

let cantidad = parseInt(prompt("Ingrese la cantidad de datos que desea ingresar"));
let datos = [];

for (let i = 0; i < cantidad; i++) {
    datos.push(parseInt(prompt("Ingrese el dato " + (i + 1))));
}

let suma = 0;
for (let i = 0; i < datos.length; i++) {
    suma += datos[i];
}

let promedio = suma / datos.length;

let mayores = 0;
for (let i = 0; i < datos.length; i++) {
    if (datos[i] > promedio) {
        mayores++;
    }
}

console.log("El promedio es: " + promedio);
console.log("La cantidad de datos mayores al promedio es: " + mayores);