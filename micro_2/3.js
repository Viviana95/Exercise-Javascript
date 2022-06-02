//Escribe un programa que pida un número y diga si es divisible por 2

const nu1 = document.getElementById("n1");
const button = document.getElementById("btn");

button.addEventListener('click', () => {
    let num = nu1.value;
    let prueba = result(num);
    

});


function result(num) {

    if (num % 2 === 0) {
        console.log("Es divisible por 2");
    }
    else {
        console.log("No es divisible por 2");
    }
}
