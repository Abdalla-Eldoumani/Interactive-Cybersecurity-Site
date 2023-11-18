document.addEventListener('DOMContentLoaded', () => {
    const results = JSON.parse(localStorage.getItem('quizResults'));

    if (results) {
        displayResults(results);
        highlightIncorrectAnswers(results);
    } else {
        alert('No results to display. Please take the quiz first.');
        window.location.href = 'Cquiz.html';
    }

    localStorage.removeItem('quizResults');
});

function displayResults(results) {
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.innerText = `You scored ${results.score} out of 20`;
    }

    const resultsElement = document.getElementById('results');
    if (resultsElement) {
        results.wrongAnswers.forEach(questionIndex => {
            const question = results.questions[questionIndex];
            const questionElement = document.createElement('div');
            questionElement.classList.add('question');

            const questionText = document.createElement('p');
            questionText.innerText = question.question;
            questionElement.appendChild(questionText);

            const userAnswer = document.createElement('p');
            userAnswer.innerText = `Your answer: ${question.userAnswer}`;
            questionElement.appendChild(userAnswer);

            const correctAnswer = document.createElement('p');
            correctAnswer.innerText = `Correct answer: ${question.correctAnswer}`;
            questionElement.appendChild(correctAnswer);

            resultsElement.appendChild(questionElement);
        });
    }
}

function highlightIncorrectAnswers(results) {
    const questionElements = document.querySelectorAll('#results .question');
    questionElements.forEach((element, index) => {
        if (!results.questions[index].correct) {
            element.classList.add('incorrect');
        }
    });
}