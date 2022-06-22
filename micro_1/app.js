//Escribe un programa que escriba en la pantalla un texto que diga “Hello World”.
let textH1=document.getElementById('text1');

textH1.innerHTML="Hello World!";

//Escribe un programa que escriba en la pantalla el resultado de sumar 3 + 5.
let num1= 3;
let num2= 5;
let result=document.getElementById('result');

   let resultS= num1+num2;
    result.innerHTML=`El resultado es ${resultS}`;

//Escribe un programa que pida el nombre del usuario con un prompt o utilizando un input y escriba un texto que diga “Hola nombreUsuario"
const nameU=document.getElementById('text3');
let hello=document.getElementById('init');
let resultHello=document.getElementById('sayHi');

hello.addEventListener('click', hi)
function hi(){
    let nameUser=nameU.value; 
    resultHello.innerHTML=`Bienvenido ${nameUser}`;
}

//Escribe un programa que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

let btn=document.getElementById('sum');
let resultSumN=document.getElementById('resultSum');

btn.addEventListener('click', sumNumber)

function sumNumber() {
    const num1S = document.getElementById('text4').value;
    const num2S = document.getElementById('text5').value;
    let see = parseInt(num1S) + parseInt(num2S);
    
    resultSumN.innerHTML= `El resultado es ${see}`;
    
}

   