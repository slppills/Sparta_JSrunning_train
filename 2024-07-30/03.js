function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 Complete");
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2 Complete");
    }, 2000);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 3 Complete");
    }, 3000);
  });
}

async function runTasksSequential() {
  console.time("Sequential");
  try {
    const result1 = await task1();
    console.log(result1);
    const result2 = await task2();
    console.log(result2);
    const result3 = await task3();
    console.log(result3);
  } catch (error) {
    console.error("Error:", error);
  }
  console.timeEnd("Sequential");

  // 예상되는 대략적인 시간과 그 이유 < 예상되는 시간 : 6초 / 그 이유 : try에서 task 하나당 await이 붙어있어서 task1 실행이 완료되야 task2로 넘어가고 task2가 실행 완료되야 task3으로 넘어가기 때문에 각각 task함수의 setTimeout시간을 합친 시간이 예상되는 시간 >
}

async function runTasksParallel() {
  console.time("Parallel");
  try {
    // 병렬로 promise들을 한 번에 처리하는 코드
    const results = await Promise.all([task1(), task2(), task3()]);
    results.forEach((result) => console.log(result));
  } catch (error) {
    console.error("Error:", error);
  }
  console.timeEnd("Parallel");
  // 예상되는 대략적인 시간과 그 이유 < dpromise들을 병렬로 처리하니까 task중 가장 긴 시간이 걸리는 3초거 걸릴 것이다 >
}

// 함수 호출
runTasksSequential().then(() => runTasksParallel());
