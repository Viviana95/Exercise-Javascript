

const num9 = document.getElementById("n9");
const button9 = document.getElementById("btn9");
const see9 = document.getElementById("text9");
const seediv2 = document.getElementById("textIf2");
const seediv3 = document.getElementById("textIf3");
const seediv5 = document.getElementById("textIf5");
const seediv7 = document.getElementById("textIf7");

button9.addEventListener('click', result8)

function result8() {
   let num = num9.value;
   
    if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
        if (num % 2 === 0) {
            seediv2.innerHTML = `${num}  es divisible por 2 `;

        }
        if (num % 3 === 0) {
            seediv3.innerHTML = `${num}  es divisible por 3`;

        }
        if (num % 5 === 0) {
            seediv5.innerHTML = `${num}  es divisible por 5`;

        }
        if (num % 7 === 0) {
            seediv7.innerHTML = `${num}  es divisible por 7`;

        }
    }
        else see9.innerHTML = `${num} no es divisible por ninguno`;
        
}