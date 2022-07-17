

const inputUser=document.querySelector('#newInput');
const button=document.querySelector('#btn');
const listUser=document.querySelector('#list')


button.addEventListener('click', ()=>{
    
    const print=inputUser.value;
    if(!print){
        alert("Introduzca el nombre");
       return;
    }

    const person=document.createElement("div");
    person.classList.add("print");

    const personI= document.createElement("input");
    personI.classList.add("text");
    personI.type="text";
    personI.value=print;
    personI.innerHTML=print;
    personI.setAttribute("readonly", "readonly");
    person.appendChild(personI);

    const personp= document.createElement("p");
    personp.classList.add("text");
    
    person.appendChild(personp);


    const editUser=document.createElement("button");
    editUser.classList.add("edit");
    editUser.innerHTML=("Edit");
    
    const deleteUser=document.createElement("button");
    deleteUser.classList.add("delete");
    deleteUser.innerHTML=("Delete");

   
    person.appendChild(editUser);
    person.appendChild(deleteUser);
    listUser.appendChild(person);
    inputUser.value="";

    editUser.addEventListener('click',()=>{
        if(editUser.innerText.toLowerCase()=="edit"){
            personI.removeAttribute("readonly");
            personI.focus();
            editUser.innerText="Save";
        }
        else{
            personI.setAttribute("readonly", "readonly");
            editUser.innerHTML="Edit";
        }             
    })

    deleteUser.addEventListener('click', ()=>{
        listUser.removeChild(person);
    })
})


