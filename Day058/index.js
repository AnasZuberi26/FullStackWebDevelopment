function func1(name) {
  console.log("Hello! " + name + ". Hope you are good.");
}

func1("Anas");



function sum(a,b,c=0){
    // console.log("Sum : " +(a+b))
    return a+b+c;
}

// sum(3,5)
// result = sum(3,5)
result = sum(3,5,2)
console.log("Sum : " +result)



// Arrow Function in Javascript
const func2 = (x)=>{
    console.log("Value by arrow function : ", x)
}

func2(222)