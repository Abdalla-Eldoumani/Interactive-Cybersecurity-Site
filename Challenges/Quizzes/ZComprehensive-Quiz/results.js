document.addEventListener('DOMContentLoaded', () => {
    const results = JSON.parse(localStorage.getItem('quizResults'));

    if (results) {
        displayResults(results);
    } else {
        alert('No results to display. Please take the quiz first.');
        window.location.href = 'ZCquiz.html';
    }

    localStorage.removeItem('quizResults');
});

function displayResults(results) {
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.innerText = `You scored ${results.score} out of 80`;
    }

    const resultsElement = document.getElementById('results');
    if (resultsElement) {
        results.detailedResults.forEach((result, index) => {
            if (!result.correct) {
                const questionElement = document.createElement('div');
                questionElement.classList.add('question', 'incorrect');
                questionElement.innerHTML = `
                    <p>${index + 1}. ${result.question}</p>
                    <p>Your answer: ${result.userAnswer}</p>
                    <p>Correct answer: ${result.correctAnswer}</p>
                `;
                resultsElement.appendChild(questionElement);
            }
        });
    }
}