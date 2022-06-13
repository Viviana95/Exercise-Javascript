let countries=[


    
    {
    name:"France",
    lang:"Francais"
    },
    {name:"Spain",
    lang:"Castellano"
    }
]


function A (){
    let phrase="";
    
   for (let i=0; i<countries.length ;i++){

    let cName=countries[i].name;
   phrase+=cName + ":";
   }

   let phraseResult=phrase.slice(0,-1);
   console.log(phraseResult)

    

}

A();



/*function A (){
    let phrase="";
    for(let i=0; i<countries.length ;i++){

    let cName=countries[i].name;
    phrase+=cName + ":";
}

console.log(phrase)
}

A();*/