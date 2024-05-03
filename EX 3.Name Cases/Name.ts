let personName: string = "";
personName = prompt("What is your name?") || "";

let lowercase: string = personName.toLowerCase();
let Uppercase: string = personName.toUpperCase();

let titlecase: string = personName
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join("");

if (personName !== null && personName !== "") {
  alert(`Hello ${personName}, Here are your  name in:
    LowerCase: ${lowercase} 
    UpperCase: ${Uppercase}
    TitleCase: ${titlecase}`);
} else {
  alert("Please fill your name !");
}
