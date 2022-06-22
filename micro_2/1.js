//Escribe un programa que pida dos números y escriba en la pantalla cuál es el mayor.

const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const btn = document.getElementById('compareNumbers');
const see = document.getElementById("text");

btn.addEventListener('click', ()=>{
    let number1 = input1.value;
    let number2 = input2.value;
    let result = compare(number1, number2);
    
    
});

function compare(number1,number2) {
    if (number1 > number2) {
        see.innerHTML=`El resultado es....${number1}`;   
       
    }
    else{
        see.innerHTML=`El resultado es....${number2}`;
    }
    
   
    
}

//------------------------------------------------------------------------------------


