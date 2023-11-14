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

let q1 = new Question(" What's the best programing",["C#","JavaScript","Pyton","Java"],"JavaScript")
let q2 = new Question(" What's the most popular langue",["C#","JavaScript","Pyton","Java"],"Pyton")

let q3 = new Question(" What's the best modern programing langue",["C#","JavaScript","Pyton","Java"],"C#")

const questions = [q1,q2,q3];

let quiz = new Quiz(questions)


console.log(quiz.isFinish())

console.log(quiz.getQuestion())
quiz.guess("JavaScript")

console.log(quiz.getQuestion())
quiz.guess("Pyton")

console.log(quiz.getQuestion())
quiz.guess("C#")

console.log(quiz.score)
console.log(quiz.isFinish())
