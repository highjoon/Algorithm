function solution(arr) {
  let answer = 0;
  let tmp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === 1) {
      answer++;
      tmp++;
    } else if (arr[i] === 0) {
      tmp = 0;
    } else if (arr[i] === 1 && arr[i - 1] === 0) {
      answer++;
      tmp++;
    } else if (arr[i] === 1 && arr[i - 1] === 1) {
      tmp++;
      answer += tmp;
    }
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
