let gradeCal = (score, totalScore) => {
    if(typeof score !== 'number' || typeof totalScore !== 'number') {
        throw Error('score & totalScore should be of numeric type');
    }
    let percentage = score * 100 / totalScore;
    let grade = 'F';
    if(percentage >= 90) {
        grade = 'A';
    } else if(percentage >= 80) {
        grade = 'B';
    } else if(percentage >= 70) {
        grade = 'C';
    } else if(percentage >= 60) {
        grade = 'D';
    }
    return `You got an ${grade} (${percentage})`;
}

console.log(gradeCal(12, 12));