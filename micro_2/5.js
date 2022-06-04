const insertText5 = document.getElementById("expression5");
const button5 = document.getElementById("result5");
const see5 = document.getElementById("text5");

button5.addEventListener('click', () => {
    let text = insertText.value;
    let vocal = text.length;
    let i;
    for (i = 0; i < vocal; i++) {

        if(text.substr(i, 1) === "a" || text.substr(i, 1) === "e" || text.substr(i, 1) === "i" || text.substr(i, 1) === "o" || text.substr(i, 1) === "u")
          {
            console.log(text.substr(i,1));  
        }

}
    
});