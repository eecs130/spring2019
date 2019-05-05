const random = (min, max) => {
    var num = Math.floor(Math.random() * (max + 1 - min) + min)
    return num
}

const makeNumberList = (howMany) => {
   const numbers = []
    for(let i = 0; i < howMany; i++) {
        numbers.push(random(0, 100))
    }
    return numbers
};

const numbers = makeNumberList(100)
console.log(numbers)
let sum = 0

//TODO: In the section below, write a loop that adds all 100 numbers together:
sum += numbers[0]
sum += numbers[1]
sum += numbers[2]
// ...all the way to 100

document.write('The sum is: ' + sum)