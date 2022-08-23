import React, {useState, useEffect, useReducer} from 'react'
import { findActiveUser, saveUserData } from '../../LoginService'


function QuizResults({score, quiz}) {

  const [activeUser, setActiveUser] = useState();
  const [quizData, setQuizData] = useState({
    "id": quiz._id,
    "name": quiz.name,
    "score": score
  })


  useEffect(() => {
    findActiveUser().then((result => { setActiveUser(result)} ))
  }, [])
  
// console.log(activeUser)

  if(activeUser){
    let user = activeUser
    let compareArray = activeUser.saved_quiz.map(quiz => quiz.id)
    let isQuizSaved = compareArray.includes(quizData.id)
    if (isQuizSaved === false){
      user.saved_quiz.push(quizData)
      // setActiveUser(user)
      // console.log(activeUser)
    
    } else{
      let index = user.saved_quiz.findIndex(quiz =>  quiz.id === quizData.id);
      console.log(index)
    }
    }
    

  






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