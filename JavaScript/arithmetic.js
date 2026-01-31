const readline = require('readline');

//  let x = 9;

//  let y = 3;

//  let v; let u; let a; let t;

//      u = 5;
//         a = 2;  
//          t = 4;

//     v = u + a * t ;


//         //  console.log(`The final velocity is: ${v}`);
//         console.log("The final velocity is: " + v);


        //celsius to fahrenheit
        let celsius = 25;
        let fahrenheit;

        fahrenheit = (celsius * 9/5) + 32;


        
        console.log("The temperature in Fahrenheit is: " + fahrenheit);



        // Note: prompt() only works in browser environments
        // If running in Node.js, use readline module instead
        // let userInput;
        
        // userInput = prompt("Please enter your name:");

        // console.log("Hello, " + userInput + "!");
        // For Node.js terminal input

        // const rl = readline.createInterface({
        //     input: process.stdin,
        //     output: process.stdout
        // });

        // rl.question("Please enter your name: ", (userInput) => {
        //     console.log("Hello, " + userInput + "!");
        //     rl.close();
        // });

        //gravitational force
        let mass1 = 5;
        let mass2 = 10;
        let distance = 2;
        let G = 6.674 * Math.pow(10, -11);
        let force;

        force = G * (mass1 * mass2) / Math.pow(distance, 2) ;
        console.log("The gravitational force is: " + force);