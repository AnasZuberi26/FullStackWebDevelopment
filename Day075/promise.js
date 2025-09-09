console.log('This is Promises Class in Javascript');

// let prom1 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         console.log('Yes I am done');
//         resolve("Harry")
//     }, 3000);
// })

// prom1.then((a)=>{
//     console.log(a);  
// })

// let prom1 = new Promise((resolve, reject) =>{
//     let a = Math.random();
//     if(a<0.5){
//         reject("No random number was not supporting you!")
//     }
//     else{
//         setTimeout(() => {
//             console.log('Yes I am done');
//             resolve("Harry")
//         }, 3000);
//     }
// })

// prom1.then((a)=>{
//     console.log(a);  
// }).catch((err)=>{
//     console.log(err);
// })

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was supporting you");
  } else {
    setTimeout(() => {
      console.log("Done");
      resolve("Anas");
    }, 3000);
  }
});

let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was supporting you 2");
  } else {
    setTimeout(() => {
      console.log("Done 2");
      resolve("Anas 2");
    }, 1000);
  }
});

// let p3 = Promise.all([prom1, prom2]);
// let p3 = Promise.allSettled([prom1, prom2]);
// let p3 = Promise.race([prom1, prom2]);
// let p3 = Promise.any([prom1, prom2]);
// let p3 = Promise.resolve([prom1, prom2]);
let p3 = Promise.reject([prom1, prom2]);
p3.then((a) => {
  console.log(a);
}).catch((e) => {
  console.log(e);
});
