import React, { useEffect, useState } from "react";
import QuizList from "../components/quiz_components/QuizList";

function QuizContainer({quiz}) {

    const [score, setScore] = useState(0);
    // const [currentQuestion, setCurrentQuestion] = useState(0);


    const handleClick = (isCorrect) => {
        if (isCorrect == "true") {
            setScore(score + 1)
        }

        // if (currentQuestion + 1 < quiz.length) {
        //     setCurrentQuestion(currentQuestion + 1)
        // }


    };


    return (
        <>
        <img src={quiz.images[0].header}/>
        <h1>{quiz.name}</h1>
        <h3>Current Score: {score} / {quiz.questions.length}</h3>

        <QuizList handleClick={handleClick} quiz={quiz} />
       
        </>

    )

}

export default QuizContainer;