//Escribir un programa que escriba en pantalla los divisores de un número dado

const num10 = document.getElementById("n10");
const button10 = document.getElementById("btn10");
const see10 = document.getElementById("text10");


button10.addEventListener('click', result10)

function result10() {
   let num = num10.value;
   let i;
   

for (i=2;i < num/2; i++) {
if (num % i === 0) {

    see10.innerHTML= `Es divisible por....${i}`;

}
}

}