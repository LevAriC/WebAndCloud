
var count = document.getElementById("counter");
var tmpCounter;

window.onload = function(){
    setInterval(counting , 300); //Yes, Should be 3000 but looks much better with 300 =]
}

function counting(){
    tmpCounter = Number(count.innerHTML);
    ++tmpCounter;
    count.innerHTML = tmpCounter;
}
