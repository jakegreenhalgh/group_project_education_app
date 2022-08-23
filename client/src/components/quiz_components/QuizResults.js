import React from 'react'

function QuizResults({score, quiz}) {
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