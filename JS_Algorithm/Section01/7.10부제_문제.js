function solution(day, arr) {
  let answer = 0;
  let num = arr.filter((x) => x % 10 === day);
  answer = num.length;
  return answer;
}

const arr1 = [25, 23, 11, 47, 53, 17, 33];
const arr2 = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(3, arr1));
console.log(solution(0, arr2));
