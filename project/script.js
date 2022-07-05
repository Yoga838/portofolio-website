// cursor animation

var cursor0 = document.querySelector(".cursor0");
var cursor1 = document.querySelector(".cursor1");
document.addEventListener("mousemove",function(e){
    cursor0.style.cssText = cursor1.style.cssText = "left : " + e.clientX + "px; top: " + e.clientY + "px;";
})