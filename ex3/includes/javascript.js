window.onload = function(){

var plus = document.getElementById("plus");

for (i=0; i<4;i++){
    var box = document.createElement("div");
    var container = document.getElementById("flex-container");
    container.appendChild(box);
    box.style.opacity = Math.random();
}

plus.onclick = function() {plusClicked()}
    
function plusClicked(){
        var box = document.createElement("div");
        var container = document.getElementById("flex-container2");
        container.appendChild(box);
        box.style.opacity = Math.random();
}}