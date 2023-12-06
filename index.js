const inputbox = document.getElementById("input-box");
const container = document.getElementById("list-container");



function Task(){
    if( inputbox.value === ""){
        alert('must write something!');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputbox.value;
        container.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputbox.value=''; 
    saveData();         
}

container.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();

    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", container.innerHTML);
}
function view(){
    container.innerHTML = localStorage.getItem("data")
}

view();

