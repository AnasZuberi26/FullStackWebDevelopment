console.log("Hello World!");

// let boxes = document.getElementsByClassName("box")
// console.log(boxes);

// boxes[2].style.backgroundColor = "red";

// document.getElementById("red").style.backgroundColor = "red";

// document.querySelector(".box").style.backgroundColor = "green";

// document.querySelectorAll(".box").forEach(element => {
//     element.style.backgroundColor = "green";
// });

// console.log(document.getElementsByTagName("div"));

// console.log(document.getElementsByTagName("div")[4].matches("#red.box"))
// console.log(document.getElementsByTagName("div")[3].matches("#red.box"))

// console.log(document.getElementsByTagName("div")[4].closest("#red.box"))
// console.log(document.getElementsByTagName("div")[3].closest(".container"))

console.log(document.querySelector(".container").contains(document.getElementsByTagName("div")[2]))
console.log(document.querySelector(".container").contains(document.querySelector("body")))