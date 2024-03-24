class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionAtCurrentIndex() {
        return this.questions[this.questionIndex];
    }

    updateScoreAndIndex(answer) {
        if (this.getQuestionAtCurrentIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }

}

function displayQuestion() {
    if (quiz.isEnded()) {
        showFinalScores();
    } else {
        let question_element = document.getElementById('question');
        question_element.innerHTML = quiz.getQuestionAtCurrentIndex().text;

        //Get choices of the current question
        let choices = quiz.getQuestionAtCurrentIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            //Harek choice element ma data populate gareko
            let choice_element = document.getElementById('choice' + i);
            choice_element.textContent = choices[i];

            //harek choice element ma event listener rakheko
            guess('btn' + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess_choice) {
    let button = document.getElementById(id);
    button.onclick = function () {
        //updateScoreAndIndex vitra isCorrectAnswer call vacha
        quiz.updateScoreAndIndex(guess_choice);
        displayQuestion();
    }
}

function showProgress() {
    let current_question_number = quiz.questionIndex + 1;
    let progress_element = document.getElementById('progress');
    progress_element.textContent = `Question ${current_question_number} of ${quiz.questions.length}`;
}

function showFinalScores() {
    let score_html = `<div id="score-box">
    <h1>Quiz Finished</h1>
    <div class="quiz-header">
      <p id="score">Your score is:  ${quiz.score} of ${quiz.questions.length}</p>
      <hr>
    </div>
    <button id="take-again"><a href="index.html">Take quiz again</a></button>
  </div>`;
  let el_quiz = document.getElementById('quiz');
  el_quiz.innerHTML = score_html; 

}

let questions = [
    new Question("What is the capital city of Nepal?", ["Kathmandu", "Thimpu", "Pokhara", "Chitwan"], "Kathmandu"),
    new Question("What is the capital city of India?", ["Kolkata", "Bharat", "New Delhi", "Dhaka"], "New Delhi"),
    new Question("What is the capital city of Pakistan?", ["Kabul", "Islamabad", "Lahore", "Balochistan"], "Islamabad"),
    new Question("What is the capital city of UK?", ["Liverpool", "Paris", "Manchester", "London"], "London"),
    new Question("What is the capital city of USA?", ["New York", "San Francisco", "Washington DC", "Houston"], "Washington DC"),
];

let quiz = new Quiz(questions);

displayQuestion();


let time = 1;
let time_in_secs = time*60;
let el_countdown = document.getElementById('countdown');

function setCountdown(time_in_secs){

    const interval = setInterval(()=>{
        if(time_in_secs<=0){
            showFinalScores();
            clearInterval(interval);

        }else{
            time_in_secs--;
            let mins = Math.floor(time_in_secs/60).toString();
            let secs = (time_in_secs%60).toString();
            
            el_countdown.textContent = `${mins}:${secs}`
    
        }
    },1000)
}

setCountdown(time_in_secs);