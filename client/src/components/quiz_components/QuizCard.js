import React from 'react'
import { useState } from 'react'
import './QuizCard.css'
import { Card } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';



function QuizCard ({number, question, choices, handleClick}) {

    // State allows only one click for each question with an if statement 'gate'.
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
          
          <p key={choice.id} onClick={() => clicked(choice.isCorrect)}>
            <FormControl
              disabled={hasBeenClicked}
              control={<Radio />}
            >
              <RadioGroup
                defaultValue="female"
                name="radio-buttons-group"
                >
                  <FormControlLabel value={choice.text} control={<Radio />} label={choice.text}  />
                  
              </RadioGroup>
            </FormControl>
          </p>

        )
    })

  return (
    <>
    <div className='quizcard'>
      <Card 
          elevation={12} 
          sx={{ 
                  padding: 3,
              }}>
        <h3>Question {number}:</h3>
        <h4>{question}</h4>
        <div className='individual-answer'>
        {choicesArray}
        </div>
      </Card>

    </div>
    </>
  )
}

export default QuizCard
