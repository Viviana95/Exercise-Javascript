//Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

const num11a = document.getElementById("n11a");
const num11b = document.getElementById("n11b")
const button11 = document.getElementById("btn11");
const see11 = document.getElementById("text11");

button11.addEventListener('click', result11)

function result11() {
   let numberA = num11a.value;
   let numberB = num11b.value;
   let valor;
   let i;
   
   if (numberA < numberB) {
    valor = numberA;
    } else {
    valor = numberB;
    } 

    for (i=2; i < valor / 2; i++) {
        if (numberA % i === 0 && numberB % i === 0) {
           see11.innerHTML= `Son divisible por....${i}`;

}
}

}