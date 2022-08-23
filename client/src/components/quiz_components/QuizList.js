import React from 'react'
import QuizCard from './QuizCard'

function QuizList({quiz, handleClick}) {

    // Maps out quiz questions

    const questionsArray = quiz.questions.map((question) => {
        return (
            <QuizCard key={question.number} number={question.number} question={question.title} choices={question.choices} handleClick={handleClick} />
        )

    })

  return (
    <>
    <ul>
        {questionsArray}
    </ul>
    </>
  )
}

export default QuizList