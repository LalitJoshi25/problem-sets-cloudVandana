let input = prompt("Enter a list of numbers seperated by commas: ");

//Convert string value into an array of string seperated by commas
let inputArray = input.split(",");

// Sorting array in decending order
inputArray.sort((a,b)=>{
    return b - a;
})

console.log(inputArray);