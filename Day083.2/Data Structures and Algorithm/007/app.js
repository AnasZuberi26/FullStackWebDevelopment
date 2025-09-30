// ---------------------------Strings in JS---------------------------
// Strings are Mutable in JS

let name = "Anas";

// console.log(name);
// console.log(name[0]);

// console.log(name.length);
// console.log(name.slice(1,3));
// console.log(name.slice(-3,-1));
// console.log(name.substring(1,4));
// console.log(name.substr(1,3));

// console.log(name.toLowerCase());
// console.log(name.toUpperCase());
// console.log(name.concat(" Munir"," ","Kamboh"));

// let loc = "                Gujranwala            "
// console.log(loc);
// console.log(loc.trim());

// console.log(name[2]);
// console.log(name.charAt(2));
// console.log(name.charCodeAt(2));

// ---------------------------Printing the string---------------------------

// for(let i = 0; i<name.length; i++){
//     console.log(name[i]);
// }

// -------------------------------Printing in Reverse Order-----------------------

// for(let i = name.length-1; i>=0; i--){
//     console.log(name[i]);
// }

// -------------------------------Palindrome or not-----------------------

// rev = "";
// for (let i = name.length - 1; i >= 0; i--) {
//   rev = rev + name[i];
// }

// if (rev.toLowerCase() == name.toLowerCase()) {
//   console.log("Palindrome");
// } else {
//   console.log("No Palindrome");
// }

// -------------------------------Palindrome or not-----------------------

// let ispalindrome = true;
// let j = name.length-1;
// let i = 0;
// while(i<j){
//     if(name[i].toLowerCase() == name[j].toLowerCase()){
//         ispalindrome = true;
//         i++;
//         j--;
//     }
//     else{
//         ispalindrome = false;
//         break;
//     }
// }

// if(ispalindrome){
//     console.log("Palindrome");
// }else{
//     console.log("Not a pallindrome");
// }

// -------------------------------Toggle Characters-----------------------

// let toggle = "";

// for (let i = 0; i < name.length; i++) {
//   if (name.charCodeAt(i) >= 65 && name.charCodeAt(i) <= 90) {
//     toggle = toggle + name.charAt(i).toLowerCase();
//   } else {
//     toggle = toggle + name.charAt(i).toUpperCase();
//   }
// }

// console.log(toggle);

// -------------------------------Frequency of Characters-----------------------

let lowerName = name.toLowerCase();
let frequency = {};

for (let char of lowerName) {
  if (frequency[char]) {
    frequency[char]++;
  } else {
    frequency[char] = 1;
  }
}

console.log(frequency);
