import { questions } from './questions.js';

document.addEventListener('DOMContentLoaded', (event) => {
    let randomQuestions = [];

    function getRandomQuestions(arr, num) {
        let tempArray = [...arr];
        let randomQuestions = []; 
    
        for (let i = tempArray.length - 1; i > 0; i--) { 
            const j = Math.floor(Math.random() * (i + 1));
            [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
        }
    
        randomQuestions = tempArray.slice(0, num); 
        
        return randomQuestions;
    } 

    function loadQuestions() {
        const quizContainer = document.getElementById('quiz-container');
        randomQuestions = getRandomQuestions(questions, 20);
        quizContainer.innerHTML = '';
        randomQuestions.forEach((question, index) => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('question');

            const questionText = document.createElement('p');
            questionText.innerText = `${index + 1}. ${question.question}`;
            questionElement.appendChild(questionText);

            if (question.options) {
                const optionsContainer = document.createElement('div');
                optionsContainer.classList.add('options');
                question.options.forEach(option => {
                    const label = document.createElement('label');
                    const input = document.createElement('input');
                    input.setAttribute('type', 'radio');
                    input.setAttribute('name', `question${index}`);
                    input.setAttribute('value', option);
                    label.appendChild(input);
                    label.appendChild(document.createTextNode(option));
                    optionsContainer.appendChild(label);
                });
                questionElement.appendChild(optionsContainer);
            } else {
                const trueOption = document.createElement('label');
                const trueInput = document.createElement('input');
                trueInput.setAttribute('type', 'radio');
                trueInput.setAttribute('name', `question${index}`);
                trueInput.setAttribute('value', 'True');
                trueOption.appendChild(trueInput);
                trueOption.appendChild(document.createTextNode('True'));
                
                const falseOption = document.createElement('label');
                const falseInput = document.createElement('input');
                falseInput.setAttribute('type', 'radio');
                falseInput.setAttribute('name', `question${index}`);
                falseInput.setAttribute('value', 'False');
                falseOption.appendChild(falseInput);
                falseOption.appendChild(document.createTextNode('False'));

                const optionsContainer = document.createElement('div');
                optionsContainer.classList.add('options');
                optionsContainer.appendChild(trueOption);
                optionsContainer.appendChild(falseOption);
                questionElement.appendChild(optionsContainer);
            }

            quizContainer.appendChild(questionElement);
        });
    }

    function submitQuiz() {
        const quizContainer = document.getElementById('quiz-container');
        const questionElements = quizContainer.getElementsByClassName('question');
        let score = 0;
        let wrongAnswers = [];
    
        for (let i = 0; i < questionElements.length; i++) {
            const questionElement = questionElements[i];
            const options = questionElement.getElementsByClassName('options')[0];
            const selectedOption = options.querySelector('input:checked');
            if (selectedOption && selectedOption.value === randomQuestions[i].answer) {
                score++;
            } else {
                wrongAnswers.push(i);
            }
        }

        const detailedResults = randomQuestions.map((question, index) => ({
            question: question.question,
            userAnswer: questionElements[index].querySelector('input:checked') ? questionElements[index].querySelector('input:checked').value : 'No answer',
            correctAnswer: question.answer,
            correct: !wrongAnswers.includes(index)
        }));
    
        localStorage.setItem('quizResults', JSON.stringify({ score, detailedResults }));
        window.location.href = 'results.html';
    }

    document.getElementById('submit-quiz').addEventListener('click', function(event) {
        event.preventDefault();
        submitQuiz();
    });

    loadQuestions();
});