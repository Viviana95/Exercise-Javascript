//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

const inputnum1 = document.getElementById('numb1');
const inputnum2 = document.getElementById('numb2');
const inputnum3 = document.getElementById('numb3');
const btnOk = document.getElementById('compareTreeNumbers');
const see2 = document.getElementById("text2");

btnOk.addEventListener("click", result)

function result() {
    let num1 = inputnum1.value;
    let num2 = inputnum2.value;
    let num3 = inputnum3.value;

    if (num1 > num2 && num1 > num3) {
        see2.innerHTML=`El resultado es....${num1}`; 
        
    }
    if (num2 > num1 && num2 > num3) {
        see2.innerHTML=`El resultado es....${num2}`;
           
    }
    if (num3 > num1 && num3 > num2) {
        see2.innerHTML=`El resultado es....${num3}`;
       
    }


    
}

/*function mayorr() {
    let numbers = [num1, num2, num3];
    for (i = 0; i < numbers.length; i++) {
        if (number[i] > mayorr) {
            mayorr = number[i];
            console.log(number[i])
        }
    }
} */
