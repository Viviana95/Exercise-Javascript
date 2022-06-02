//Escribe un programa que pida un número y diga si es divisible por 2

const nu1 = document.getElementById("n1");
const button = document.getElementById("btn");
const see3 = document.getElementById("text3");

button.addEventListener('click', () => {
    let num = nu1.value;
    let prueba = result3(num);
    
});


function result3(num) {
  if (num % 2 === 0) {
        see3.innerHTML=`${num} si es divisible por 2`;
        
    }
    else {
        see3.innerHTML=`${num} no es divisible por 2`;
    }
}
