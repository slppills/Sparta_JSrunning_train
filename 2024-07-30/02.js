// async await 를 사용한 코드로 변경해보기
const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function getData(url) {
  // 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를, 아닐 경우 실패로 처리를 하게 해주세요
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === API_URL) resolve("success");
      else reject("fail");
    }, 3000);
  });
}

// ...

// getData(API_URL), getData(WRONG_URL) 각각 성공과 실패에 대한 처리를 코드작성해주세요.
async function successUrl() {
  try {
    const result = await getData(API_URL);
    console.log("Success:", result);
  } catch (error) {
    console.log("Error:", error);
  }
}
async function failUrl() {
  try {
    const result = await getData(WRONG_URL);
    console.log("Success:", result);
  } catch (error) {
    console.log("Error:", error);
  }
}

successUrl();
failUrl();
