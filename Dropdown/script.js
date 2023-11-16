function show(anything){
    document.querySelector(".textbox").value = anything
}
let dropdown = document.querySelector(".drop");
dropdown.onclick = function(){
    dropdown.classList.toggle("active")
} 
let dropdown2 = document.querySelector(".hero");
dropdown2.onclick = function(){
    dropdown2.classList.toggle("active")
}
