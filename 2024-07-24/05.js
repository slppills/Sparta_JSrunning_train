const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function setScores(scores) {
    for (let i=0; i<scores.length; i++) {
        scores[i] += 3;
    }
}

setScores(scores);

console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]