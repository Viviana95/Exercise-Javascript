

const insertText = document.getElementById("expression");
const button2 = document.getElementById("result");
const see4 = document.getElementById("text4");


/*button2.addEventListener('click',()=>{
    let text = insertText.value;
    let a = text.length;
    let listA=[];
   
    for (let i = 0; i < a; i++) {

        if (text.substr(i, 1) === "a"){
       listA.push(text.substr(i,1))
       
    }          
  
}

console.log (listA.length);
    
});*/


button2.addEventListener('click', A)
  
   
    function A(){
        let text = insertText.value;
        let a = text.length;
        let listA=[];
        for (let i = 0; i < a; i++) {

            if (text.substr(i, 1) === "a"){
           listA.push(text.substr(i,1))
           
        }   
        see4.innerHTML=listA.push(text.substr(i,1))  
    }}
         
   


