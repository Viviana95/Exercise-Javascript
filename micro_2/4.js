

const insertText = document.getElementById("expression");
const button2 = document.getElementById("result");
const see4 = document.getElementById("text4");

button2.addEventListener('click',()=>{
    let text = insertText.value;
    let a = text.length;
    let i;
    for (i = 0; i < a; i++) {
    
        if (text.substr(i, 1) === "a"){
           console.log(text.substr(i,1));
          
        }          
        
    }
    
});

