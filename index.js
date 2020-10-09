const x = "John";
const y = "Doe";
console.log(x + " <> " + y);

let person = {
    firstName: "Rabea",
    lastName: "Akkas",
    emailAddress: "Rabea_Akkas@live.co.uk",
    age: 25,
};

delete person.emailAddress
console.log(person)

theArray= ["bag", "hat", "shoes", "socks", "jacket", "t-shirt", "skirt", "scarf", "jumper", "trousers"];
console.log(theArray)

const randomNum = [];
for(let i = 0; i < 100; i++) {
    let number = Math.floor(Math.random()* 100)
    randomNum.push(number)
    console.log(randomNum)    
};



