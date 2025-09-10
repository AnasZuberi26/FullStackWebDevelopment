const msg = [
  "Initializing Hacking",
  "Reading Your Files",
  "Password Files Detected",
  "Sending  all Passwords and Personal Files to Server",
  "Cleaning Up",
];

async function getStatement(element) {
  //   let time = Math.ceil(Math.random() * 7);
  time = 5;
  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log(time);
      // console.log(element);
      resolve(element);
    }, time * 1000);
  });
}

async function main() {
  setInterval(() => {
    let last = document.querySelector(".container").lastElementChild;
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
    } else {
      last.innerHTML = last.innerHTML + ".";
    }

    secondLast = last.previousElementSibling;
    if (secondLast.innerHTML.endsWith("...")) {
      // console.log('...');
    } else if (secondLast.innerHTML.endsWith("..")) {
      secondLast.innerHTML = secondLast.innerHTML + ".";
    } else if (secondLast.innerHTML.endsWith(".")) {
      secondLast.innerHTML = secondLast.innerHTML + "..";
    } else {
      secondLast.innerHTML = secondLast.innerHTML + "...";
    }
  }, 300);

  for (let i = 0; i < msg.length; i++) {
    const element = msg[i];
    // console.log(element);

    state = await getStatement(element);

    let p = document.createElement("p");
    p.innerHTML = `${state}`;
    document.body.querySelector(".container").append(p);
  }

  setTimeout(() => {
    clearInterval(1);
  }, 3300);
}

main();
