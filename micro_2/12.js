//Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)

const num12 = document.getElementById("n12")
const button12 = document.getElementById("btn12");
const see12 = document.getElementById("text12");

button12.addEventListener('click', result12)

function result12() {
    let num = num12.value;
    let i=2;

    while (num % i !== 0 && i < num / 2 ) {
        i++;
        }
        if (num % i !== 0) {
            see12.innerHTML="El número es primo";
        } else {
            see12.innerHTML="El número no es primo";
        }
}