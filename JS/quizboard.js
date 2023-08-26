const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Text Makeup Language"],
        correctAnswer: 0
    },
    {
        question: "What is the other name for Javascript?",
        options: ["ECMASCcript", "JS", "I dont' know"],
        correctAnswer: 2
    },
    {
        question: "Is C++ A low level laanguage?",
        options: ["Yes","No"],
        correctAnswer: 2
    },
    
];

function buildQuiz() {
    let output = '';

    questions.forEach((question, questionNumber) => {
        const options = [];
        for (let i = 0; i < question.options.length; i++) {
            options.push(
                `<div class="form-check">
                    <input class="form-check-input" type="radio" name="question${questionNumber}" id="q${questionNumber}option${i}" value="${i}">
                    <label class="form-check-label" for="q${questionNumber}option${i}">
                        ${question.options[i]}
                    </label>
                </div>`
            );
        }

        output += `<div class="question mt-3">
                    <h3>${question.question}</h3>
                    ${options.join('')}
                </div>`;
    });

    quizContainer.innerHTML = output;
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.question');
    let score = 0;

    questions.forEach((question, questionNumber) => {
        const selectedOption = answerContainers[questionNumber].querySelector(`input[name=question${questionNumber}]:checked`);
        const selectedAnswer = selectedOption ? parseInt(selectedOption.value) : -1;

        if (selectedAnswer === question.correctAnswer) {
            score++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultContainer.innerHTML = `You scored ${score} out of ${questions.length} questions correctly.`;
}

submitButton.addEventListener('click', showResults);

buildQuiz();
