document
  .querySelector(".container>button")
  .addEventListener("click", async () => {
    console.log("Yes");
    let a = await fetch("/generate");
    let r = await a.json();
  });
