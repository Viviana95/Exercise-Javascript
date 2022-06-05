//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)


const num8 = document.getElementById("n8");
const button8 = document.getElementById("btn8");
const see8 = document.getElementById("text8");


button8.addEventListener('click', result8)

function result8() {
   let num = num8.value;
   
   if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
    see8.innerHTML = `${num}  es divisible por 2, 3, 5 ó 7`;

    } else {
        see8.innerHTML = `${num} no es divisible por 2, 3, 5 ó 7`;
    }
}