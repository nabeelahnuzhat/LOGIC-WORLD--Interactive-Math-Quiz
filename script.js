let questions = [
    {
        question: "1/4 + 2/4= ?", 
        options: ["1/4", "1/2", "3/4", "1"],
        answer: "3/4"
    },
    {
        question: "Which one of the following is correct?",
        options: ["5/9 > 2/9", "5/9 < 2/9", "2/9 > 4/9", "5/9 = 2/9"],
        answer: "5/9 > 2/9"
    },
    {
        question: "8/9 __ 3/9=5/9; Which one of the following symbols will fit in the blank space?",
        options: ["+", "-", "×", "÷"],
        answer: "-"
    },
    {
        question: "Ria ate 1/4 of a cake. How much of the cake does Raisa need to eat to be equivalent to Ria?",
        options: ["2/4", "2/6", "1/8", "2/10"],
        answer: "2/10"
    },
    {
        question: "Which one of the following fraction is equal to 1?",
        options: ["4/6", "3/5", "3/4", "3/3"],
        answer: "3/3"
    },
    {
        question: "which one of the following fractions are eqivalent to 3/4 ?",
        options: ["3/8, 6/12, 9/16", "6/8, 9/12, 12/16", "6/8, 8/12, 12/16", "6/8, 9/12, 15/16"],
        answer: "6/8, 9/12, 12/16"
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