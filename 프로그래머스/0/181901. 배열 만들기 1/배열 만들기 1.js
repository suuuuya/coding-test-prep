function solution(n, k) {
    var answer = [];
    for(let i=k; i<=n; i+=k){
        answer.push(i);
    }
    return answer;
}

console.log(solution(10,3));
console.log(solution(15,5));