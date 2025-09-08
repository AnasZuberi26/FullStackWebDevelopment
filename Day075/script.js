console.log("Jason is a hacker");
console.log("Harry is a hacker");

setTimeout(() => {
  console.log("I am inside setTimeout-1");
}, 1000);

setTimeout(() => {
  console.log("I am inside setTimeout-2");
}, 1000);

console.log("The End");

const fn = () => {
  console.log("Noting");
}

const callback = (arg, fn) => {
  console.log(arg);
  fn();
};

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Harry",fn);
  document.head.append(sc);
};

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);
