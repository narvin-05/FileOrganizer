// entry point of my command line

let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];
let helperFunction = require("./commands/help");

// helperFunciton is an object here.

// console.log(helperFunction.helper());

switch(command){
    case "tree":
        // call tree function
        console.log("Tree function "+ path);
        break;
    case "organize":
        // call organize function
        console.log("Organize function "+path);
        break;
    case "help":
        // call help function
        // console.log("Help function");
        helperFunction.helper(); 
        break;
    default:
        console.log("Command not recognised:/");
        break;
}