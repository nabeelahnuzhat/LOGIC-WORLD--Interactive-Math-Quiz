let questions = [
    {
        question: "5 + 9= ?", 
        options: ["10", "12", "13", "14"],
        answer: "14"
    },
    {
        question: "12 - 4 = ?",
        options: ["6", "8", "9", "7"],
        answer: "8"
    },
    {
        question: "3 x 4 = ?",
        options: ["7", "12", "9", "10"],
        answer: "12"
    },
    {
        question: "15 ÷ 3 = ?",
        options: ["5", "3", "6", "4"],
        answer: "5"
    },
    {
        question: "Which is bigger?",
        options: ["2", "5", "1", "3"],
        answer: "5"
    },
    {
        question: "10 + 6 = ?",
        options: ["14", "15", "16", "17"],
        answer: "16"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

function showForm() {
    document.getElementById("landing").classList.add("hidden");
    document.getElementById("formSection").classList.remove("hidden");
}

function startQuiz() {
    document.getElementById("formSection").classList.add("hidden");
    document.getElementById("quizSection").classList.remove("hidden");
    document.getElementById("lessonSection").classList.remove("hidden");
}
function startQuestions() {
    document.getElementById("lessonSection").classList.add("hidden");
    document.getElementById("questionSection").classList.remove("hidden");
    showQuestion(); // This is what makes Question 1 actually appear
}



function showQuestion() {

    selectedAnswer = null;

    let questionObject = questions[currentQuestionIndex];

    document.getElementById("questionNumber").innerText =
        "Question No. " + (currentQuestionIndex + 1);

    document.getElementById("questionText").innerText =
        questionObject.question;

    let optionsList = document.getElementById("optionsList");
    optionsList.innerHTML = "";

    let letters = ["A", "B", "C", "D"];

    questionObject.options.forEach(function(option, index) {

        let li = document.createElement("li");

        let circle = document.createElement("div");
        circle.classList.add("option-letter");
        circle.innerText = letters[index];

        let text = document.createElement("span");
        text.innerText = option;

        li.appendChild(circle);
        li.appendChild(text);

        li.onclick = function() {

            let allCircles = document.querySelectorAll(".option-letter");

              allCircles.forEach(function(circle) {
              circle.classList.remove("selected");
              });

              circle.classList.add("selected");
              selectedAnswer = option;
        };

        optionsList.appendChild(li);
    });
}


function nextQuestion() {

    if (selectedAnswer === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {

    document.getElementById("quizSection").classList.add("hidden");
    document.getElementById("resultSection").classList.remove("hidden");

    let resultText = document.getElementById("resultText");

    if (score === questions.length) {
        resultText.innerText =
            "🎉 Congratulations! You got all answers correct!";
    } else {
        resultText.innerText =
            "You scored " + score + " out of " + questions.length;
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;

    document.getElementById("resultSection").classList.add("hidden");
    document.getElementById("landing").classList.remove("hidden");
}