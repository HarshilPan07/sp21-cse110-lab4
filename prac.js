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