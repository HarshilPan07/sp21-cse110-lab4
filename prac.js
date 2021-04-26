/*
function sumValues(num1, num2, add) {
    if(add) {
        const result = 0;
        result = num1 + num2;

        console.log('values added: ', result);
    }else return;

    console.log('final result: ', result);
}


sumValues(10,10, true);
*/

/*
function discountPrice(prices, discount) {
    const discounted = [];
    const length = prices.length;

    for(let i = 0; i < length; i++) {
        const discountedPrice = prices[i] * (1-discount);
        discounted.push(discountedPrice);
    }

    console.log(length);

    return discounted;
}

prices = discountPrice([100, 200, 300], 0.5);
console.log(prices);
*/

/*
let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': '2022',
    greeting: function() { console.log('Hello!');},
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};

console.log(student.courseLoad[0]);
*/

/*
function modifyArray(array, callback) {
    const newArr = [];
    console.log('in modifyArray');
    for(let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]));
    }
    console.log(newArr);
    return newArr;
}

function doSomething(num) {
    console.log('in doSomething');
    return num * 2;
}

modifyArray([1, 2, 3], doSomething);
*/

function printNums() {
    console.log(1);
    setTimeout(function() {console.log(2);}, 1000);
    setTimeout(function() {console.log(3);}, 0);
    console.log(4);
}

printNums();


function printSum() {
    debugger
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("sum").innerHTML = "Sum: " + calculateSum(num1, num2);
}

function calculateSum(num1, num2) {
    let result = num1 + num2
    return result
}