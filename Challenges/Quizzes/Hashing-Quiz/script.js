document.addEventListener('DOMContentLoaded', (event) => {
    const questions = [
        {
            question: "What is the primary function of hashing?",
            options: ["Encrypting data", "Creating a fixed-size string of characters", "Increasing data size", "Decreasing data processing time"],
            answer: "Creating a fixed-size string of characters"
        },
        {
            question: "Hashing always increases the size of the original data.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "Which of these is an analogy used for hashing in the lecture?",
            options: ["Locking a safe", "Creating a unique ID for any piece of information", "Solving a puzzle", "Writing a book"],
            answer: "Creating a unique ID for any piece of information"
        },
        {
            question: "A simple hash function can turn the word 'cat' into the number 3.",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "What does consistency in hash functions mean?",
            options: ["The output is always unpredictable", "The same input always produces the same output", "The output is always unique", "The output is variable"],
            answer: "The same input always produces the same output"
        },
        {
            question: "Hash functions are generally slow to compute.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "What is an important feature of hash functions for security purposes?",
            options: ["Predictability", "Unpredictability", "Consistency", "Reversibility"],
            answer: "Unpredictability"
        },
        {
            question: "Two different inputs will always produce different hashes.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "Why is hashing important for password security?",
            options: ["It stores the actual password for easy retrieval", "It creates a unique hash that is stored instead of the password", "It makes passwords easier to remember", "It encrypts the password"],
            answer: "It creates a unique hash that is stored instead of the password"
        },
        {
            question: "Hashing is used to check the integrity of data being downloaded.",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "What is the role of 'salting' in storing passwords?",
            options: ["It encrypts the password", "It adds a random piece of data to the password before hashing", "It simplifies the password", "It stores the password in plain text"],
            answer: "It adds a random piece of data to the password before hashing"
        },
        {
            question: "Hash collisions are common in modern hash functions.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "In a blockchain, what does the hash of a block represent?",
            options: ["The number of transactions", "A digital signature", "A seal verifying the data in the block", "The size of the block"],
            answer: "A seal verifying the data in the block"
        },
        {
            question: "Changing the data in one block of a blockchain won't affect its subsequent blocks.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "Apart from password security, what is another use of hashing?",
            options: ["Data compression", "User authentication", "Digital signatures", "Data encryption"],
            answer: "Digital signatures"
        },
        {
            question: "Hashing is vulnerable to brute force attacks.",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "What is the purpose of adaptive hash functions like bcrypt?",
            options: ["To increase hashing speed", "To decrease hashing complexity", "To make brute force attacks more practical", "To make brute force attacks time-consuming and impractical"],
            answer: "To make brute force attacks time-consuming and impractical"
        },
        {
            question: "In databases, hashing is used primarily for data encryption.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "How does hashing contribute to network security?",
            options: ["By increasing data transfer speeds", "By ensuring data integrity during transmission", "By compressing the data", "By encrypting the data"],
            answer: "By ensuring data integrity during transmission"
        },
        {
            question: "A hash function can convert different types of data, like text and files, into a fixed-size string of characters.",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "What is a hash collision?",
            options: ["When a hash function fails", "When two different inputs produce the same hash", "When a hash is decrypted", "When a hash function is consistent"],
            answer: "When two different inputs produce the same hash"
        },
        {
            question: "Salting a password before hashing makes common passwords end up with different hashes.",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "In the context of hashing, what does the term 'uniqueness' refer to?",
            options: ["Each user having a unique password", "Each hash function being different", "Each unique input ideally producing a unique hash", "Each hash being unpredictable"],
            answer: "Each unique input ideally producing a unique hash"
        },
        {
            question: "The same hash function applied to the same data will produce different hashes each time.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "What is an advantage of using hashing in large file systems?",
            options: ["It encrypts file contents", "It creates unique identifiers for files, preventing duplication", "It reduces the size of the files", "It increases the speed of the internet"],
            answer: "It creates unique identifiers for files, preventing duplication"
        },
        {
            question: "Hashing is not used in digital signatures.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "Why is speed an important property of hash functions?",
            options: ["To ensure data security", "To allow quick data retrieval", "To produce hashes almost instantly, avoiding system delays", "To make it easier to remember passwords"],
            answer: "To produce hashes almost instantly, avoiding system delays"
        },
        {
            question: "The primary purpose of hashing is to secure network communications.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "What is a real-world example of hashing in blockchain technology?",
            options: ["Social media", "Online shopping", "Cryptocurrencies like Bitcoin", "Email communication"],
            answer: "Cryptocurrencies like Bitcoin"
        },
        {
            question: "A hash function can be easily reversed to find the original input data.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "In the context of hashing, what is meant by 'data integrity'?",
            options: ["Protecting data from unauthorized access", "Ensuring that data is not altered or tampered with", "Reducing the size of data for storage", "Encrypting data for secure transmission"],
            answer: "Ensuring that data is not altered or tampered with"
        },
        {
            question: "Hash tables in databases use hashes of data as unique identifiers for quick retrieval.",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "What happens when the data in a blockchain block is altered?",
            options: ["The block is automatically deleted", "The hash of the block remains the same", "The hash of the block changes", "The size of the block increases"],
            answer: "The hash of the block changes"
        },
        {
            question: "Using hashing in password security stores the actual password on the website.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "What is the purpose of encrypting the hash in a digital signature?",
            options: ["To verify the sender's identity", "To increase the size of the email", "To compress the email's content", "To change the email's format"],
            answer: "To verify the sender's identity"
        },
        {
            question: "Hashing ensures that even if someone accesses stored passwords, they can see the actual passwords.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "Which of these is a challenge faced by hashing?",
            options: ["Easy reversibility", "Vulnerability to brute force attacks", "Slow processing times", "Limited application scope"],
            answer: "Vulnerability to brute force attacks"
        },
        {
            question: "A small change in the input data of a hash function should cause a significant change in the output hash.",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "What is the function of bcrypt in terms of hash functions?",
            options: ["To encrypt data", "To create unique identifiers", "To slow down the hash generation process", "To reduce data size"],
            answer: "To slow down the hash generation process"
        },
        {
            question: "Hash functions can only process textual data.",
            options: ["True", "False"], 
            answer: "False"
        },
        {
            question: "Why do VPNs and SSL/TLS protocols rely on hashing?",
            options: ["To speed up data transfer", "To ensure data integrity", "To reduce data size", "To encrypt data"],
            answer: "To ensure data integrity"
        },
        {
            question: "Hashing is a process that converts data into a variable-size string of characters.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "What does hashing do to the password 'Blue123' in the context of storing passwords securely?",
            options: ["Converts it into a fixed-size string like '81d3fa9a...'", "Keeps it as 'Blue123' for easy recall", "Encrypts it into a complex symbol", "Splits it into multiple parts for storage"],
            answer: "Converts it into a fixed-size string like '81d3fa9a...'"
        },
        {
            question: "The same hash can be used to confirm the authenticity and integrity of an email.",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "What is the primary benefit of using hashing in digital signatures?",
            options: ["To authenticate and verify the integrity of the content", "To compress the content of the message", "To encrypt the entire message", "To make the signature visually appealing"],
            answer: "To authenticate and verify the integrity of the content"
        },
        {
            question: "In hashing, a unique hash is produced for each unique input, with no exceptions.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "What is the significance of a hash function's speed in its application?",
            options: ["It ensures data security", "It allows for real-time communication", "It enables quick processing of large volumes of data", "It simplifies the hash algorithm"],
            answer: "It enables quick processing of large volumes of data"
        },
        {
            question: "Hashing in blockchain technology is primarily used for encryption.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "How does hashing contribute to data integrity in network security?",
            options: ["By encrypting the data", "By splitting the data into smaller parts", "By ensuring the data received matches the data sent", "By increasing the speed of data transmission"],
            answer: "By ensuring the data received matches the data sent"
        },
        {
            question: "Every hash function is unique and cannot have collisions.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "In the context of hashing, what does the term 'collision' refer to?",
            options: ["A failure in the hash function", "Two different inputs producing the same hash", "A hash function producing an error", "Two similar inputs producing different hashes"],
            answer: "Two different inputs producing the same hash"
        },
        {
            question: "The primary purpose of salting in hashing is to encrypt the password.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "Which of these is a use of hashing in everyday digital life?",
            options: ["In password recovery systems", "In creating digital signatures", "In speeding up internet connections", "In enhancing graphic design"],
            answer: "In creating digital signatures"
        },
        {
            question: "Modern hash functions are designed to make collisions extremely rare.",
            options: ["True", "False"], 
            answer: "True"
        },
        {
            question: "What role does hashing play in storing passwords securely?",
            options: ["It stores passwords in plain text", "It converts passwords into a unique hash", "It memorizes passwords for users", "It sends passwords over the network"],
            answer: "It converts passwords into a unique hash"
        },
        {
            question: "Adaptive hash functions, like bcrypt, are designed to be fast for increased efficiency.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "Why is unpredictability a crucial property of hash functions?",
            options: ["To make it easy to memorize hashes", "To make hash functions reversible", "To enhance security by making output hashes hard to predict", "To increase the speed of hashing"],
            answer: "To enhance security by making output hashes hard to predict"
        },
        {
            question: "Hashing is used only in the field of digital security.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "In the context of hashing, what does it mean when we say a hash function has 'uniqueness'?",
            options: ["Each user's password is different", "Each hash function is different", "Each unique input ideally produces a unique hash", "The hash is always a unique set of symbols"],
            answer: "Each unique input ideally produces a unique hash"
        },
        {
            question: "The primary goal of hashing in data storage is to encrypt the data.",
            options: ["True", "False"],
            answer: "False"
        }
    ];
    
    
    
let randomQuestions = [];

function getRandomQuestions(arr, num){
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
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
