//Escribe un programa que pida una frase y escriba las vocales que aparecen

const insertText5 = document.getElementById("expression5");
const button5 = document.getElementById("result5");
const see5 = document.getElementById("text5");

button5.addEventListener('click', B)

function B(){

    let text = insertText5.value;
    let vocal = text.length;
    let aeiou=[];
    for (i = 0; i < vocal; i++) {

        if(text.substr(i, 1) === "a" || text.substr(i, 1) === "e" || text.substr(i, 1) === "i" || text.substr(i, 1) === "o" || text.substr(i, 1) === "u")
          {
            see5.innerHTML=aeiou.push(text.substr(i,1)) 
        }

}}
    


