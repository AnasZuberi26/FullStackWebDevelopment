let button = document.getElementById("btn")

// button.addEventListener("click", ()=>{
//     // alert("I was Clicked")
//     document.querySelector(".box").innerHTML = "<b>You were clicked</b>Enjoy your click!"
// })

// button.addEventListener("dblclick", ()=>{
//     document.querySelector(".box").innerHTML = "<b>You were clicked</b>Enjoy your click!"
// })

// button.addEventListener("contextmenu", ()=>{
//     alert("Do not hack us using Right Click")
// })

button.addEventListener("keydown", (e)=>{
    // console.log(e);
    console.log(e.key, e.keyCode);
    
})