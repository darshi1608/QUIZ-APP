const questions = [
    {
        question: " Which is largest animal in the world?",
        answers:[
            { text: "Shark",correct: false},
            { text: "Blue whale",correct: true},
            { text: "Elephant",correct: false},
            { text: "Girafee",correct: false},
        ]
    },
    {
        question: " Which is the smallest country in the world?",
        answers:[
            { text: "Vatician city",correct: true},
            { text: "Bhutan",correct: false},
            { text: "Nepal",correct: false},
            { text: "Sri lanka",correct: false},
        ]

    },
    {
        question: " Which is largest desert in the world?",
        answers:[
            { text: "Kalahari",correct: false},
            { text: "Gobi",correct: false},
            { text: "Sahara",correct: false},
            { text: "Antarctica",correct: true},
        ]
    },
    {
        question: " Which is the smallest continent in the world?",
        answers:[
            { text: "Asia",correct: false},
            { text: "Africa",correct: false},
            { text: "Australlia",correct: true},
            { text: "America",correct: false},
        ]
    },
     {
        question: " Which is the longest river in the world?",
        answers:[
            { text: "Amazon",correct: false},
            { text: "Nile",correct: true},
            { text: "Yangtze",correct: false},
            { text: "Mississippi",correct: false},
        ]
    },
     {
        question: " Which is the tallest mountain in the world?",
        answers:[
            { text: "Mount Everest",correct: true},
            { text: "Kilimanjaro",correct: false},
            { text: "K2",correct: false},
            { text: "Annapurna",correct: false},
        ]
    },
     {
        question: " Which is the largest island in the world?",
        answers:[
            { text: "Andaman and Nicobar",correct: false},
            { text: "Daman and diu",correct: false},
            { text: "Greenland",correct: true},
            { text: "Sri lanka",correct: false},
        ]
    },
     {
        question: " Which planet is the largest in the solar system?",
        answers:[
            { text: "Earth",correct: false},
            { text: "Saturn",correct: false},
            { text: "Mars",correct: false},
            { text: "Jupiter",correct: true},
        ]
    },
     {
        question: " Which bird lays the largest egg?",
        answers:[
            { text: "Eagle",correct: false},
            { text: "Ostrich",correct: true},
            { text: "Emu",correct: false},
            { text: "Sparrow",correct: false},
        ]
    },
     {
        question: " Which country won the 2011 ICC Cricket World Cup?",
        answers:[
            { text: "New Zealand",correct: false},
            { text: "Australlia",correct: false},
            { text: "India",correct: true},
            { text: "Sri lanka",correct: false},
        ]
    }
];
const questionElement= document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score=0;

function startquiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo+ ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "PlayAgain";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startquiz();
    }
})

startquiz();