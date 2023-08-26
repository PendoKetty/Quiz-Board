$(document).ready(function() {
    const quizForm = $('#quiz');
    const submitButton = $('#submit');
    const resultContainer = $('#result');

    const questions = [
        {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Text Makeup Language"],
        correctAnswer: 0
    },
    {
        question: "What is the other name for Javascript?",
        options: ["ECMASCcript", "JS", "I dont' know"],
        correctAnswer: 1
    },
    {
        question: "Is C++ A low level laanguage?",
        options: ["Yes","No"],
        correctAnswer: 0
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

            output += `<div class="question mt-4">
                        <h4>${question.question}</h4>
                        ${options.join('')}
                    </div>`;
        });

        quizForm.html(output);
    }

    function showResults() {
        const answerContainers = quizForm.find('.question');
        let score = 0;

        questions.forEach((question, questionNumber) => {
            const selectedOption = answerContainers.eq(questionNumber).find(`input[name=question${questionNumber}]:checked`);
            const selectedAnswer = selectedOption.length > 0 ? parseInt(selectedOption.val()) : -1;

            if (selectedAnswer === question.correctAnswer) {
                score++;
                //answerContainers.eq(questionNumber).css('color', 'green');
            } else {
                answerContainers.eq(questionNumber).css('color', 'red');
            }
        });

        resultContainer.html(`You score is ${score}!`);
    }

    submitButton.click(showResults);

    buildQuiz();
});
