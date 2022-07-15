let enterBtn=document.getElementById("enter");

let input=document.getElementById("userinput");
let ul= document.querySelector("ul");
let item =document.getElementsByClassName("li")

const inputLength=()=>{
    return input.value.length;
}

const listLength=()=>{
    return item.length;
}

const createListElement=()=>{
    let li=document.createElement("li");

    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value=" ";
}