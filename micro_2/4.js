//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

const insertText = document.getElementById("expression");
const button2 = document.getElementById("result");
const see4 = document.getElementById("text4");


button2.addEventListener('click', A)
  
   
    function A(){
        let text = insertText.value;
        let a = text.length;
        let listA=[];
        for (let i = 0; i < a; i++) {

            if (text.substr(i, 1) === "a"){
          
           see4.innerHTML=listA.push(text.substr(i,1)) 
           
        }   
         
    }}
    
   /* button2.addEventListener('click', A)
  
   
    function A(){
        let text = insertText.value;
        let a = text.length;
        let listA=[];
        for (let i = 0; i < a; i++) {

            if (text.subtrs(i, 1) === "a"){
          
           see4.innerHTML=listA.push(text.match(i,1)) 
           
        }   
         
    }}*/
   


