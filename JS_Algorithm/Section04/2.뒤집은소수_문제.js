function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(N, arr) {
  const answer = [];

  for (let x of arr) {
    const temp = Number(x.toString().split("").reverse().join(""));
    if (isPrime(temp)) answer.push(temp);
  }

  return answer.join(" ");
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(9, arr));
