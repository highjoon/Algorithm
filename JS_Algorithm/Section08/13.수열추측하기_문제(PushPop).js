function solution(n, f) {
  let answer,
    flag = 0;
  let mz = Array.from(Array(n + 10), () => Array(n + 10).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  let p = [];
  let b = Array.from({ length: n }, () => 0);

  function combi(n, r) {
    if (mz[n][r] > 0) return mz[n][r];
    if (n === r || r === 0) return 1;
    else return (mz[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }

  function DFS(L, sum) {
    if (flag) return;
    if (L === n && sum === f) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p.push(i);
          DFS(L + 1, sum + b[L] * p[L]);
          ch[i] = 0;
          p.pop();
        }
      }
    }
  }
  for (let i = 0; i < n; i++) b[i] = combi(n - 1, i);
  DFS(0, 0);
  return answer;
}

console.log(solution(4, 16));
