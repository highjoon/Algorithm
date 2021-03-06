function solution(arr) {
  let answer;
  let num = arr.filter((x) => x % 2 !== 0);
  let sum = num.reduce((a, b) => {
    return a + b;
  }, 0);
  let min = Math.min(...num);
  return [sum, min];
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
