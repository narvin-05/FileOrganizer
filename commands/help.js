function help(){
    console.log(`
        These are some myCli commands used in various situations:
        1. node main.js tree <path>
        2. node main.js organize <path>
        3. node main.js help
    `);
}

// key is value that we will use in the file in thich we are importing this file.

module.exports = {
    // Key : value 
    helper:help
}