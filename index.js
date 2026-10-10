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
        let span=document.createElement("span");
        span.innerHTML= "&#10060";
        li.appendChild(span)
    }
    inputBox.value="";
    saveData();
}
    listContainer.addEventListener("click",function(e){
        if(e.target.tagName === "LI")
        {
            e.target.classList.toggle("checked"); //should be very carefull about CASE sensitivity
            saveData();
        }
        else if (e.target.tagName==="SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
    },false);

    function saveData(){
        localStorage.setItem("data",listContainer.innerHTML );
    }
    function showData()
    {
        listContainer.innerHTML = localStorage.getItem("data");
    }
showData();