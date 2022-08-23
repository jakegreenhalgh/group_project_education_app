import React from 'react'
import { useState } from 'react'
function QuizCard ({number, question, choices, handleClick}) {

    // State allows only one click for each question with an if statement 'gate'. Not sure if it's the most elegant solution.
    const [hasBeenClicked, setHasBeenClicked] = useState(false)

    // Allows passing of answer back up to QuizContainer via handleClick IF hasBeenClicked is not true.
    const clicked = (selectedChoice) => {
        if(!hasBeenClicked){
            handleClick(selectedChoice)
            setHasBeenClicked(true)
        }        
    }

    //  Maps out each question choice
    const choicesArray = choices.map((choice) => {
        return(
        <p key={choice.id} onClick={() => clicked(choice.isCorrect)}>{choice.text}</p>
        )
    })

  return (
    <>
    <h3>Number {number}:</h3>
    <h4>{question}</h4>
    {choicesArray}
    </>
  )
}

export default QuizCard



//*  Previous idea for one-click gate

    // const clicked = (selectedChoice) => {
    //     let hasBeenClicked = 0
    //     if(hasBeenClicked < 1){
    //         handleClick(selectedChoice)
    //         hasBeenClicked += 1
    //     }
    // }
