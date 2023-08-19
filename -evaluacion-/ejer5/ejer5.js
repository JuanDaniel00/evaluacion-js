// Escribir un programa que cree un diccionario de traducción español-inglés. El usuario introducirá las palabras en español e inglés separadas por dos puntos, y cada par <palabra>:<traducción> separados por comas. El programa debe crear un diccionario con las palabras y sus traducciones. Después pedirá una frase en español y utilizará el diccionario para traducirla palabra a palabra. Si una palabra no está en el diccionario debe dejarla sin traducir.

let diccionario = {};

let palabras = prompt("Introduce las palabras en español e inglés separadas por dos puntos, y cada par <palabra>:<traducción> separados por comas");

let palabrasSeparadas = palabras.split(", ");
for (let i = 0; i < palabrasSeparadas.length; i++) {
    let palabra = palabrasSeparadas[i].split(":");
    diccionario[palabra[0]] = palabra[1];
}

let frase = prompt("Introduce una frase en español");
let fraseSeparada = frase.split(" ");
let fraseTraducida = "";
for (let i = 0; i < fraseSeparada.length; i++) {
    if (diccionario[fraseSeparada[i]] != undefined) {
        fraseTraducida += diccionario[fraseSeparada[i]] + " ";
    } else {
        fraseTraducida += fraseSeparada[i] + " ";
    }
}
alert(fraseTraducida);
