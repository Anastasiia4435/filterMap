//first

let array = [2, 5, 8, 10, 20, 25];

function multiplication(element) {
    let a = element * 100;
    return a;
}

let newArray = array.map(multiplication);
console.log(newArray);


//second

let lines = ["Lorem ipsum dolor sit amet.", "Lorem, ipsum.", "Lorem ipsum dolor sit."];

function length(element) {
    let b = element.length;
    return b;
}

let linesLength = lines.map(length);
console.log(linesLength);

//third

let numbers = [1, 24, 98, 230, 890, 900];

let newNumbers = numbers.filter(function(element){
    if (element > 100){
        return true;
    }
    else {
        return false
    }
})

console.log(newNumbers)