$(document).ready(function() {
    const quizForm = $('#quiz');
    const submitButton = $('#submit');
    const resultContainer = $('#result');
    const performanceContainer= $('#performance')
    const resitButton = $('#resit');

    //Questions, multiple choices and position of correct answer
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
        submitButton.hide();
        const answerContainers = quizForm.find('.question');
        let score = 0;
        let scorePercentage=0;

        questions.forEach((question, questionNumber) => {
            const selectedOption = answerContainers.eq(questionNumber).find(`input[name=question${questionNumber}]:checked`);
            const selectedAnswer = selectedOption.length > 0 ? parseInt(selectedOption.val()) : -1;

            if (selectedAnswer === question.correctAnswer) {
                score++;
            } else {
                //
            }
        });
        quizForm.empty();
        //console.log(score);
        scorePercentage= (parseInt(score)/parseInt(questions.length))*100;
        resultContainer.html(`Your score is ${scorePercentage}%`);
        //console.log(scorePercentage);
        if (scorePercentage>= 80){
            performanceContainer.html(`You have passed excellently!`);
        }
        else{
            if (scorePercentage<80 && scorePercentage >=50){
                performanceContainer.html(`You have passed fairly!`);
            }
            if (scorePercentage<50){
                performanceContainer.html(`You have failed!You need to retake the test.`);
                resitButton.show();
            }
        }

    }

    submitButton.click(showResults);
    buildQuiz();
    
    resitButton.click(function() {
        location.reload(); // Reload the page when the resit button is clicked
    });


});
