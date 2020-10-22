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

// const randomNum = [];
/*for(let i = 0; i < 100; i++) {
    let number = Math.floor(Math.random()* 100)
    randomNum.push(number)
    console.log(randomNum)    
};*/

// ex 27

const minAndMax = function(array){
    let min;
    let max;

    for(let x=0; x<array.length; x++) {
        if(!min || array[x] < min) {
            min = array[x]
        }
        if(!max || array [x] > max) {
            max = array[x]
        }
    }
}
// ex 26
const randomInArray = function () {
    let emptyArray = []
    for (let x = 0; x < 100; x++){
    emptyArray.push(Math.floor(Math.random() * 100 ))
    }
    console.log(emptyArray)
    minAndMax(emptyArray)
}



