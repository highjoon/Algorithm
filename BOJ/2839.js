let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(input[0]);

let answer = 0;
let five = 0;
let three = 0;

while (true) {
    if (N < 0) {
        answer = -1;
        break;
    }

    if (N % 5 === 0) {
        five = parseInt(N / 5);
        answer = five + three;
        break;
    }

    if (N % 5 > 0) {
        N -= 3;
        three++;
    }
}

console.log(answer);
