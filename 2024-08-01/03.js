// 1. <빈칸>을 작성해주세요
const obj1 = {
  value: 20,
  getValue() {
    console.log(this.value);
  },
};
console.log(obj1.getValue()); //  출력값 20

// 2. 웹 브라우저에서 setTimeout 함수 내에서 this가 가리키는 출력값이 왜 그런지 설명해주세요
const obj2 = {
  method: function () {
    console.log("첫번째 this : ", this);

    const innerMethod = () => {
      setTimeout(function () {
        console.log("두번째 this : ", this);
      });
    };
    innerMethod();
  },
};

obj2.method();
// setTimeout 내의 콜백함수는 일반 함수이기 때문에 setTimeout 내의 콜백함수에서 this는 전역객체를 가리킨다.
