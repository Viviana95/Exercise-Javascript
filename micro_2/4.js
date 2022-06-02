

const insertText = document.getElementById("expression");
const button2 = document.getElementById("result");


button2.addEventListener('click',character);

function character(){
    let text = insertText.value;
    let x = text.length;
    let i;
    for (i = 0; i < text; i++) {
    
        if (x.substr(i, 1) === "a") {
            console.log(x.substr(i,1));
        }
    
    }
}

/*no funcionaaaaaaaaaaaa

function calcular(){
    for (i=2;i < n1/2; i++) {
        if (n1 % i === 0) {}
                
        }
        console.log(i);
}*/
