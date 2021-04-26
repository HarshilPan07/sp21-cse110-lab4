//  part1b-question18

function printDate() {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}


var interval = setInterval(printDate, 1000);