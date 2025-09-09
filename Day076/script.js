// async function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3500);
//   });
// }

async function getData() {
  //   let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // .then((response) => response.json())
  // .then((json) => console.log(json));

  let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  //   let data = await x.json();
  let data = await x.text();
  console.log(data);
  return 455;
}

async function main() {
  console.log("Loading Modules");

  console.log("Do something else");

  console.log("Load Data");

  let data = await getData();

  console.log(data);

  console.log("Process Data");

  console.log("Task-2");
}

main();

// data.then((v) => {
//     console.log(data);

//     console.log("Process Data");

//     console.log("Task-2");
//   });


// How to use Fetxh API
// let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
