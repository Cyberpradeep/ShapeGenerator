let button = document.getElementById("button");//generate button
var numbers =1;
var oldValue =0;
button.onclick=() =>{
let n = document.getElementById("number").value;
const rectangle = document.getElementById("rect");
const circle = document.getElementById("circle");
const square = document.getElementById("square");
const text = document.getElementById("box");
const color = document.getElementById("color").value;
const width = document.getElementById("width").value;
const height = document.getElementById("height").value;
n=Number(n)+Number(oldValue);
for(let i=numbers;i<=n;i++){
    let shape = document.createElement("div");

    shape.innerHTML+=numbers;
    if(circle.checked){
        shape.style.backgroundColor=color;
        shape.style.width=width+"px";
        shape.style.height=height+"px";
        // shape.style.borderRadius="50%";
        shape.classList.add("circle");
        
    }
    else if(square.checked){
        shape.style.backgroundColor=color;
        shape.style.width=width+"px";
        shape.style.height=height+"px";
        shape.classList.add("square");
    }
    else if(rectangle.checked){
        shape.style.backgroundColor=color;
        shape.style.width=width+"px";
        shape.style.height=height+"px";
        shape.classList.add("rectangle");
    }
    else
    document.write("Invalid Input");
    numbers++;
    box.appendChild(shape);
    oldValue=document.getElementById("box").lastElementChild.innerHTML;
}
}