const inputBox=document.getElementById("inputfield");
const listContainer =document.getElementById("list-container");
function add(){
    if(inputBox.value ===''){
        alert("You nee to write something!!!")

    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value="";

}