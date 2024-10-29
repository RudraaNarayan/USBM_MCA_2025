//concat :
/*
let fruits = ["apple" , "mango"];
let addArray = fruits.concat(["strawberry","dragon-fruit"]);
//fruits.concat(fruits,["strawberry" , "dragon-fruit"]);
console.log(addArray); 

let animals = ["roman","randy","rock","reigns"];
const slice =animals.slice(1); // rock,reigns
console.log(slice);
//animals.slice(1,2); */

const months =['jan','march','april','june'];
months.splice(1,0,'feb');
//console.log(months);
months.splice(2,1,"dec");
console.log(months);