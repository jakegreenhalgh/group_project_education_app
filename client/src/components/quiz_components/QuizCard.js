import React from 'react'
import { useState } from 'react'
import './QuizCard.css'
import { Card } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';



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

          <p key={choice.id} onClick={() => clicked(choice.isCorrect)}>
          <FormControl
            disabled={hasBeenClicked}
            control={<Radio />}
          >
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              >
                <FormControlLabel value={choice.text} control={<Radio />} label={choice.text}  />
                
            </RadioGroup>
          </FormControl>
          </p>

        // <p key={choice.id} onClick={() => clicked(choice.isCorrect)}>{choice.text} </p>
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



//*  Previous idea for one-click gate

    // const clicked = (selectedChoice) => {
    //     let hasBeenClicked = 0
    //     if(hasBeenClicked < 1){
    //         handleClick(selectedChoice)
    //         hasBeenClicked += 1
    //     }
    // }
