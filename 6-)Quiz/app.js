"use strict";

class Question {
    constructor(text, choies, answer) {
        this.text = text;
        this.choies = choies;
        this.answer = answer;
    }
    // Question Prototype
    checkAnswer(answer) {
        return this.answer === answer;
    }
}

//  Quiz Constructor
class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.score = 0;
        this.questionIndex = 0;
    }
    // Quiz Prototype
    getQuestion() {

        return this.questions[this.questionIndex];
    }
    //  Quiz isFinish
    isFinish() {
        return this.questions.length === this.questionIndex;
    }
    // Quiz guess
    guess(answer) {
        let question = this.getQuestion();

        if (question.checkAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;

    }
}

let q1 = new Question(" What's the best programing",["C++","JavaScript","Pyton","Java"],"JavaScript")
let q2 = new Question(" What's the most popular langue",["C#","PHP","Pyton","Java"],"Pyton")

let q3 = new Question(" What's the best modern programing langue",["C#","JavaScript","Pyton","Java"],"C#")

const questions = [q1,q2,q3];

// Start Quiz

let quiz = new Quiz(questions)

loadQuestion()

// soru yükleme fonksiyonu

function loadQuestion(){

    // quiz bittiyse scoru göster
    if(quiz.isFinish()){
        showScore()
    }

    // bitmediyse bidaki soruyu göster
    else{
        let question = quiz.getQuestion()
        let choices = question.choies
        document.querySelector("#question").textContent = question.text

        for(let i=0; i<choices.length; i++){
            let element = document.querySelector("#choice"+i)
            element.innerHTML = choices[i]

            guess("#btn"+i,choices[i])
        }
        showProgress()
    }
}

// guess funcction

function guess(id,guess){
        var btn = document.querySelector(id);
        btn.onclick= function(){
            quiz.guess(guess)
        loadQuestion()
        }
}
// Show score function

function showScore(){
    let html = `<h2>Score</h2><h4>${quiz.score}</h4>`

    document.querySelector(".card-body").innerHTML = html
}

function showProgress(){
    let totalQuestion = quiz.questions.length;
    let questionNumber = quiz.questionIndex+1
    document.querySelector("#progress").innerHTML = 
    "question" +" " + questionNumber +"  " +  "of" + " " + totalQuestion
}