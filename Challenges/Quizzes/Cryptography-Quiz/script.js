document.addEventListener('DOMContentLoaded', (event) => {
    const questions = [
        {
            question: "What is the primary goal of cryptography?",
            options: ["Data analysis", "Communication enhancement", "Providing confidentiality, integrity, and authenticity in communication", "Data storage"],
            answer: "Providing confidentiality, integrity, and authenticity in communication"
        },
        {
            question: "Cryptography dates back to:",
            options: ["The 20th century", "Ancient civilizations", "The Renaissance era", "The Industrial Revolution"],
            answer: "Ancient civilizations"
        },
        {
            question: "Which of the following is not a characteristic of the Caesar Cipher?",
            options: ["It's a symmetric-key algorithm", "It uses alphabetical rotation", "It's a polyalphabetic cipher", "It involves a fixed shift of letters in the alphabet"],
            answer: "It's a polyalphabetic cipher"
        },
        {
            question: "In a Caesar Cipher, if the key is 3, what does 'A' become?",
            options: ["C", "D", "E", "B"],
            answer: "D"
        },
        {
            question: "What makes the Monoalphabetic Substitution Cipher different from the Caesar Cipher?",
            options: ["It uses multiple alphabets", "It shifts letters in a uniform manner", "It changes each letter to a different, specific letter", "It's more secure"],
            answer: "It changes each letter to a different, specific letter"
        },
        {
            question: "A Monoalphabetic Substitution Cipher is vulnerable to:",
            options: ["Brute force attacks", "Frequency analysis", "Keylogging", "Phishing attacks"],
            answer: "Frequency analysis"
        },
        {
            question: "What is a key characteristic of Polyalphabetic Ciphers?",
            options: ["They use a single alphabet", "They use a single substitution method", "They use multiple alphabets for encryption", "They are less secure than Monoalphabetic Ciphers"],
            answer: "They use multiple alphabets for encryption"
        },
        {
            question: "The Vigenère Cipher uses:",
            options: ["A tabula recta", "A single alphabet", "A fixed number shift", "A digital algorithm"],
            answer: "A tabula recta"
        },
        {
            question: "Which of the following is true about the Vigenère Cipher?",
            options: ["It's less secure than the Caesar Cipher", "It's a monoalphabetic cipher", "It uses a keyword for encryption", "It's a modern digital encryption method"],
            answer: "It uses a keyword for encryption"
        },
        {
            question: "The strength of the Vigenère Cipher heavily depends on:",
            options: ["The length of the plaintext", "The complexity of the tabula recta", "The choice and length of the keyword", "The number of alphabets used"],
            answer: "The choice and length of the keyword"
        },
        {
            question: "T/F: Cryptography is only about keeping secrets.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "T/F: The Caesar Cipher is an example of a polyalphabetic cipher.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "T/F: In the Caesar Cipher, a shift of 0 effectively encrypts the text.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "T/F: The Monoalphabetic Substitution Cipher uses a fixed shift for all letters.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "T/F: Frequency analysis is ineffective against the Monoalphabetic Substitution Cipher.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "T/F: Polyalphabetic ciphers are more secure than monoalphabetic ciphers because they use multiple substitution methods.",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "T/F: The Vigenère Cipher was developed in the 20th century.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "T/F: The key in a Vigenère Cipher is typically a single letter.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "T/F: Decrypting a message encrypted with the Vigenère Cipher does not require knowledge of the keyword.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "T/F: The Caesar Cipher was used by Julius Caesar in political communications.",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "What type of cipher is the Caesar Cipher classified as?",
            options: ["Transposition cipher", "Substitution cipher", "Polyalphabetic cipher", "Asymmetric cipher"],
            answer: "Substitution cipher"
        },
        {
            question: "How many possible keys exist for the Caesar Cipher?",
            options: ["25", "26", "10", "Unlimited"],
            answer: "25"
        },
        {
            question: "In a Monoalphabetic Substitution Cipher, what does each letter in the plaintext correspond to?",
            options: ["A unique number", "The same letter in the cipher alphabet", "A unique letter in a scrambled alphabet", "A letter shifted by a fixed number"],
            answer: "A unique letter in a scrambled alphabet"
        },
        {
            question: "What is a significant limitation of the Caesar Cipher?",
            options: ["Its complexity", "The unlimited number of keys", "Its susceptibility to frequency analysis", "The requirement of multiple alphabets"],
            answer: "Its susceptibility to frequency analysis"
        },
        {
            question: "The Vigenère Cipher is more secure than the Caesar Cipher because it:",
            options: ["Uses a single alphabet", "Employs multiple alphabets", "Has a shorter keyword", "Is a digital cipher"],
            answer: "Employs multiple alphabets"
        },
        {
            question: "In the Vigenère Cipher, what determines the row used for encryption in the Vigenère table?",
            options: ["The letter of the plaintext", "The length of the message", "The letter of the keyword", "The position of the letter in the alphabet"],
            answer: "The letter of the keyword"
        },
        {
            question: "The Vigenère Cipher was vulnerable to attacks if the keyword was:",
            options: ["Long and complex", "Short or had a pattern", "A single letter", "A number"],
            answer: "Short or had a pattern"
        },
        {
            question: "How does the Vigenère Cipher handle the plaintext 'HELLO' with the keyword 'KEY'?",
            options: ["It remains 'HELLO'", "Becomes 'ITSSG'", "Transforms to 'RIJVS'", "Changes to 'KFAJQ'"],
            answer: "RIJVS"
        },
        {
            question: "Which method is used to break the Vigenère Cipher through keyword length analysis?",
            options: ["Frequency analysis", "Kasiski examination", "Brute force", "Differential cryptanalysis"],
            answer: "Kasiski examination"
        },
        {
            question: "The term 'cryptography' originates from Greek words meaning:",
            options: ["Secret writing", "Digital encryption", "Code breaking", "Hidden messages"],
            answer: "Secret writing"
        },
        {
            question: "T/F: The Vigenère Cipher is a type of symmetric-key algorithm.",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "T/F: The Caesar Cipher was one of the earliest examples of encryption.",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "T/F: The Monoalphabetic Substitution Cipher treats uppercase and lowercase lettersdifferently.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "T/F: Cryptography plays a crucial role in securing online transactions.",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "T/F: The Caesar Cipher is highly effective against modern cryptographic attacks.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "T/F: The Vigenère Cipher was unbreakable until the 19th century.",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "T/F: A single scrambled alphabet is used for all messages in a MonoalphabeticSubstitution Cipher.",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "T/F: The Caesar Cipher is named after a Roman emperor.",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "T/F: In a Monoalphabetic Substitution Cipher, 'A' can be substituted by different letters indifferent parts of the message.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "T/F: Understanding cryptography is essential for experts only, not for regular digitaltechnology users.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "The Caesar Cipher is primarily known for its:",
            options: ["Complexity", "Use of multiple alphabets", "Simplicity and historical significance", "Resistance to cryptanalysis"],
            answer: "Simplicity and historical significance"
        },
        {
            question: "In a Monoalphabetic Substitution Cipher, the key is essentially:",
            options: ["The number of positions to shift each letter", "The scrambled version of the alphabet", "A single letter", "A numerical code"],
            answer: "The scrambled version of the alphabet"
        },
        {
            question: "What aspect of language makes Monoalphabetic Ciphers vulnerable?",
            options: ["Syntax rules", "Letter frequency patterns", "Grammar", "Spelling variations"],
            answer: "Letter frequency patterns"
        },
        {
            question: "Polyalphabetic Ciphers were developed to:",
            options: ["Simplify encryption methods", "Address vulnerabilities in monoalphabetic ciphers", "Make decryption easier", "Encrypt numeric data only"],
            answer: "Address vulnerabilities in monoalphabetic ciphers"
        },
        {
            question: "A key feature of the Vigenère Cipher is:",
            options: ["Its digital nature", "The use of a single alphabet in different positions", "The use of a keyword to determine the shift in each letter", "Its resistance to all forms of cryptanalysis"],
            answer: "The use of a keyword to determine the shift in each letter"
        },
        {
            question: "Decrypting the Vigenère Cipher requires:",
            options: ["The same tabula recta used for encryption", "Knowledge of the keyword", "A different keyword", "A complex mathematical formula"],
            answer: "Knowledge of the keyword"
        },
        {
            question: "Which of the following is a characteristic of the digital age of cryptography?",
            options: ["Decreased importance of cryptography", "Use of simple manual systems", "Sophisticated mathematical algorithms", "Exclusive use of the Caesar Cipher"],
            answer: "Sophisticated mathematical algorithms"
        },
        {
            question: "The term 'cipher' in cryptography refers to:",
            options: ["A secret message", "The algorithm used for encryption and decryption", "The key used in encryption", "The science of breaking codes"],
            answer: "The algorithm used for encryption and decryption"
        },
        {
            question: "The primary purpose of encryption is to:",
            options: ["Speed up communication", "Make data unreadable to unauthorized individuals", "Store data securely", "Create complex algorithms"],
            answer: "Make data unreadable to unauthorized individuals"
        },
        {
            question: "The Caesar Cipher was used for:",
            options: ["Commercial purposes", "Political and military communication", "Personal messages", "Educational purposes"],
            answer: "Political and military communication"
        },
        {
            question: "T/F: The Caesar Cipher offers a high level of security in modern times.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "T/F: The Vigenère Cipher is considered a breakthrough in the history of cryptography.",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "T/F: Polyalphabetic ciphers are easier to break than monoalphabetic ciphers due to their complexity.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "T/F: Frequency analysis is a technique used in breaking polyalphabetic ciphers.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "T/F: Cryptography has become less relevant with the advent of digital technology.",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "T/F: The Vigenère table is a grid of alphabets shifted in different directions.",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "T/F: The encryption key in a Caesar Cipher can be any number from 1 to 25.",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "T/F: In a Monoalphabetic Substitution Cipher, the same plaintext letter is always replaced with the same cipher alphabet letter.",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "T/F: The Monoalphabetic Substitution Cipher and the Vigenère Cipher are both examples of symmetric-key algorithms.",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "T/F: Knowledge of cryptographic methods is unnecessary for understanding digital security measures.",
            options: ["True", "False"],
            answer: "False"
        },
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

        localStorage.setItem('quizResults', JSON.stringify({ score, wrongAnswers }));
        window.location.href = 'results.html';
    }

    document.getElementById('submit-quiz').addEventListener('click', function(event) {
        event.preventDefault();
        submitQuiz();
    });

    loadQuestions();
});