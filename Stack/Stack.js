
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body")

function colorPicker(){
    body.style.background = "linear-gradient(to right, "
    +color1.value+", "
    +color2.value+")";
   
}

color1.addEventListener("input",colorPicker);
color2.addEventListener("input",colorPicker);

