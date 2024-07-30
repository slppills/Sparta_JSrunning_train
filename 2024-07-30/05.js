function taskA() {
  return new Promise((resolve) => {
    const time = Math.floor(Math.random() * 1000);
    setTimeout(() => {
      resolve("Task A Complete");
    }, time);
  });
}

function taskB() {
  return new Promise((resolve) => {
    const time = Math.floor(Math.random() * 1000);
    setTimeout(() => {
      resolve("Task B Complete");
    }, time);
  });
}

function taskC() {
  return new Promise((resolve) => {
    const time = Math.floor(Math.random() * 1000);
    setTimeout(() => {
      resolve("Task C Complete");
    }, time);
  });
}

// 가장 먼저 완료된 작업을 찾아서 반환되는 값을 출력하세요.
async function findFirstCompletedTask() {
  try {
    const results = await Promise.race([taskA(), taskB(), taskC()]);
    console.log(results);
  } catch (error) {
    console.error(error);
  }
}

findFirstCompletedTask();
