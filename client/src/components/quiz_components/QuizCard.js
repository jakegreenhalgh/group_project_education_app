import React from 'react'
import { useState } from 'react'
const QuizCard = ({number, question, choices, handleClick}) => {

    // const clicked = (selectedChoice) => {
    //     let hasBeenClicked = 0
    //     if(hasBeenClicked < 1){
    //         handleClick(selectedChoice)
    //         hasBeenClicked += 1
    //     }
    // }



    // allows only one click per question. Not sure if it's the most elegant solution.

    const [hasBeenClicked, setHasBeenClicked] = useState(false)

    const clicked = (selectedChoice) => {
        if(!hasBeenClicked){
            handleClick(selectedChoice)
            setHasBeenClicked(true)
        }        
    }


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