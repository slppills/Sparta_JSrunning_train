1;
//배열 API map 활용
var arr = [10, 20, 30];
// arr의 각 요소에 10을 곱한 새로운 배열을 생성해주세요
// 결과 값: [100, 200, 300]을 출력해주세요
const newArr = arr.map((a) => a * 10);
console.log("1 : " + newArr);

2;
//배열 API filter 활용
var arr = [10, 22, 33];
// 5의 배수를 찾아 반환해주세요
// 결과값 [10]을 출력해주세요
console.log("2 : " + arr.filter((a) => a % 5 === 0));

3;
const numbers = [5, 10, 15, 20, 25];
// 크기가 15보다 큰 숫자의 값을 반환하여 출력해주세요
// 출력값 [20, 25]
console.log("3 : " + numbers.filter((num) => num > 15));

4;
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 문자열 길이가 4 이상인 값을 반환하여 출력해주세요
console.log("4 : " + arr.filter((a) => a.length >= 4));

5;
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 요소의 문자열 길이가 홀수인 요소만 반환하여 출력해주세요
console.log("5 : " + arr.filter((a) => a.length % 2 === 1));

6;
var arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// 오름차순으로 정렬하여 출력해주세요
console.log("6 : " + arr.sort((a, b) => a - b));

7;
var student = [
  { name: "이재상", age: 25 },
  { name: "정윤오", age: 30 },
  { name: "김준현", age: 12312 },
];
// age를 이용하여 내림차순으로 정렬하고 출력해주세요
student.sort((a, b) => b.age - a.age);
console.log("7 :", JSON.stringify(student));

8;
var student = [
  { id: 1, name: "이재상" },
  { id: 2, name: null },
  { id: 3, name: "김준현" },
];
// 객체 배렬에서 name 속성이 null인 객체가 있는지 판별을 확인하는 코드를 작성하고 반환값을 출력해주세요
var bool = false;
student.map((person) => {
  if (person.name === null) {
    bool = true;
  }
});
console.log("8 : " + bool);

9;
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 문자열 길이가 5를 초과하는 요소가 있는지 검사하는 코드를 작성하고 반환값을 출력해주세요.
var bool = false;
arr.map((a) => {
  if (a.length > 5) {
    bool = true;
  }
});
console.log(`9 : ${bool}`);

10;
var arr = ["banana", "kiwi", "mango"];
// kiwi 와 manggo 사이에 새로운 요소를 삽입하는 코드를 작성하고 출력해주세요
arr.splice(2, 0, "new-fruit");
console.log("10 : " + arr);

11;
var arr = [1, 5, -3, 10, 0, 8];
// 배열에 음수가 하나라도 있는지 판별하는 코드를 작성하고 반환값을 출력해주세요
var bool = false;
arr.map((a) => {
  if (a < 0) {
    bool = true;
  }
});
console.log("11 : " + bool);

12;
var arr = [1, 5, -3, 10, 0, 8];
// 모든 숫자가 음수인지 판별하는 코드를 작성하고 반환값을 출력해주세요
var bool = true;
arr.map((a) => {
  if (a > 0) {
    bool = false;
  }
});
console.log("12 : " + bool);
