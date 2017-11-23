//Exercise 1 - Greetings

let greet = (name : string, age : number) => {
    let message = `Hello ${name}, you are ${age} years old!`;
    return message;
}

alert(greet('Daniel', 32));