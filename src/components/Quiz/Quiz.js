import './Quiz.css';
import React from 'react';
import {useState} from "react";
var flag = Boolean (false)
 
 
export const Quiz = () =>{
    const [currentQuestions, setCurrentQuestions]= useState(0)
    const [score,setScore] = useState(0)
    const handleAnswerOptionClick = (isCorrect) =>{
        if ((isCorrect)&&(currentQuestions == questions.length-1)&&(flag == false)){
            setScore(score+1)
            flag = true
        }
        else if ((isCorrect)&&(currentQuestions == questions.length-1)&&(flag == true)){
            setScore(score)
        }
        else
        if (isCorrect){
            setScore(score+1)
        }
        const nextQuestions = currentQuestions +1
        if(nextQuestions <questions.length){
            setCurrentQuestions(nextQuestions)
        }
    }
    const questions =[
        {
            questionsText:'Какие кроссовки тебе нравятся?',
            answerOptions:[
                {answerText:"Монархи",isCorrect:false},
                {answerText:"Джорданы",isCorrect:false},
                {answerText:"Форсы",isCorrect:true},
            ]
        },
        {
            questionsText:'Какой цвет тебе нравится в кроссовках?',
            answerOptions:[
                {answerText:"Белый",isCorrect:false},
                {answerText:"Черный",isCorrect:false},
                {answerText:"Красный",isCorrect:true},
            
            ]
        }
    ]
    return(
        <div>
            <div className="quiz">
             <div className='questions_section'>
                <div className="questions_count">
                    <span>Вопрос{currentQuestions+1}</span>/{questions.length}
                </div>
                <div className='question_text'>{questions[currentQuestions].questionsText}</div>
              </div>
              <div className = "answer_section">
              <div className = "score_answer"> </div>
              {questions[currentQuestions].answerOptions.map(
                item => (<button className="answer_button" onClick=
                {() => handleAnswerOptionClick(item.isCorrect)}>
                    {item.answerText}
                </button>
              ))}
               <div className = "score_section">
        Правильных ответов {score} из {questions.length}
        </div>
              </div>
        </div>
            </div>
    )

}

 