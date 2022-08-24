import React, {useState, useEffect} from 'react'
import { findActiveUser, saveUserQuizData } from '../../LoginService'

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

//   const handleUpdate = () => {
//     if(!user){
//     booking.checked_in = "true";
//     updateCheckedIn(booking._id)
//     updateBookings(booking._id, booking)
//     }
//     else{
//         booking.checked_in = "false";
//         updateCheckedIn(booking._id)
//         updateBookings(booking._id, booking)
//     }
// }
  



  return (
    <>
    <h2>Results</h2>
    <h3>Final Score: {score} / {quiz.questions.length}</h3>
    <h5>Well done, you got {(score / quiz.questions.length) * 100}% ! </h5>
    <p>SHARE RESULTS??</p>
    </>
  )
}

export default QuizResults