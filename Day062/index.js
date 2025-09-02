function bussinessNameGenerator() {
  let adjectives = { 0: "Crazy", 1: "Amazing", 2: "Fire" };
  let shopName = { 0: "Engine", 1: "Foods", 2: "Garments" };
  let lastWord = { 0: "Bros", 1: "Limited", 2: "Hub" };
  let string = "";
  let rand = generateRandomNumber();
  string = string.concat(adjectives[rand], " ");
  rand = generateRandomNumber();
  string = string.concat(shopName[rand], " ");
  rand = generateRandomNumber();
  string = string.concat(lastWord[rand]);
  return string;
}

function generateRandomNumber() {
  let rand = Math.floor(Math.random() * 3);
  return rand;
}

let name = bussinessNameGenerator();
console.log("You Bussiness Name : " + name);
