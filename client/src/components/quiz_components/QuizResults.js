import React, {useState, useEffect} from 'react'
import { findActiveUser, saveUserQuizData } from '../../LoginService'
import { Card } from '@mui/material'
import './QuizResults.css'


function QuizResults({score, quiz, user}) {

console.log(quiz.id)
console.log(quiz._id);

const updateUser = () => {  

  if(user.saved_quiz.length !== 0){
    let compareArray = user.saved_quiz.map(quiz => quiz._id)
    let quizFound = compareArray.includes(quiz.id)
    let quiz_length = quiz.questions.length
    let newQuizData = {
      id: quiz._id,
      name: quiz.name,
      score: score,
      incorrect: quiz_length - score
    }
    if (quizFound === false) {
      user.saved_quiz.push(newQuizData)
      saveUserQuizData(user._id, user.saved_quiz)
    }
    else{
      for (let index = 0; index < user.saved_quiz.length; index++) {
        let currentId = user.saved_quiz[index]
        if(currentId.id === quiz._id)
          currentId.score = score
          currentId.incorrect = quiz_length-score
      }
      
      saveUserQuizData(user._id, user.saved_quiz)
    }

  }else{
    let quiz_length = quiz.questions.length
    let QuizData = {
      id: quiz._id,
      name: quiz.name,
      score: score,
      incorrect: quiz_length - score
    }
    user.saved_quiz.push(QuizData)
    saveUserQuizData(user._id, user.saved_quiz)
  }
}




if(user){
  updateUser()
}

let percentage = Math.round((score / quiz.questions.length) * 100)


  return (
    
    <>
    <div className='quiz-results'>
      <Card
        elevation={12} 
        sx={{ 
                padding: 10,
            }}>
        <h1>Results:</h1>
        <h1>{score} out of {quiz.questions.length}</h1>
        <h3>Well done! You got {percentage}% </h3>
        <p>You can view your results in your profile page</p>
      </Card>
    </div>
    </>
  )
}

export default QuizResults