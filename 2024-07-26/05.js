//해당 문제를 forEach로 변경하여 풀어주세요
1;
let arr1 = [10, 20, 30];

// 해당 로직을 작성하세요
arr1.forEach((a, i) => (arr1[i] = a * 10));

// 결과 값: [100, 200, 300] 출력해주세요
console.log("1 : " + JSON.stringify(arr1));

2;
let arr2 = [10, 22, 33];
// 5의 배수를 찾아 반환하세요
// 해당 로직 작성해주세요
let newArr2 = [];
arr2.forEach((a) => (a % 5 === 0 ? newArr2.push(a) : null));
console.log("2 : " + JSON.stringify(newArr2));

// 결과값 [10]
