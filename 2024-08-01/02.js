// 1. 출력값과 출력되는 값의 이유를 설명해주세요

var name = "yuno";

function myName() {
  var name = "yuno2";
  function a() {
    console.log(name);
  }
  return a();
}

myName();

// myName 함수 스코프 안에 name이 있으니까  a 함수에서 name을 출력하면 자기 위치와 가장 가까운 스코프에 있는 name의 변수 yuno2가 출력된다

// 2. 출력값과 출력되는 값의 이유를 설명해주세요

function test() {
  var x = 1;

  if (true) {
    var x = 2;
  }

  console.log(x);
}

test();

// test함수 스코프 안에서 if문의 조건이 true니까 x는 2로 바뀌고 x의 값인 2가 출력된다.

// 3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.

const nameObj = {
  name: "yuno",
  method: function () {
    const arrow = () => {
      console.log(`화살표 함수 : ${this.name}`);
    };
    function normal() {
      console.log(`일반 함수 : ${this.name}`);
    }
    arrow();
    normal();
  },
};

nameObj.method();

// arrow 함수는 this를 자신의 상위 스코프에서 this를 사용하기 때문에 method 함수에서 this를 사용한 것과 동일하다
// normal 함수의 스코프에 name이 없기 때문에 undefined가 나온다.
