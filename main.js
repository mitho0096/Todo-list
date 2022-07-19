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

    //to add delete span
    let dBtn=document.createElement("span");
    dBtn.appendChild(document.createTextNode("X"))

    //as before
    li.appendChild(dBtn)
    ul.appendChild(li)
    input.value="";

    const deleteItem=()=>{
        li.classList.add("delete")
    }
    const doneItem=()=>{
        li.classList.add("done");
    }
    li.addEventListener("click",doneItem)

    dBtn.addEventListener("click",deleteItem)

}
