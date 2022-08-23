import React, { useEffect, useState } from "react";
import QuizList from "../components/quiz_components/QuizList";
import QuizResults from "../components/quiz_components/QuizResults";

function QuizContainer({quiz}) {

    // State for score, total questions attempted, boolean for showing results component

    const [score, setScore] = useState(0);
    const [questionsAttempted, setQuestionsAttempted] = useState(0);
    const [showResults, setShowResults] = useState(false);


    // function to modify state passed down to Quizcard

    const handleClick = (isCorrect) => {
        if (isCorrect == "true") {
            setScore(score + 1)
        };

        if (questionsAttempted + 1 < quiz.questions.length) {
            setQuestionsAttempted(questionsAttempted + 1)
        }
        else {
            setShowResults(true)
        };


    };

    // showResults ternary defines when QuizResults is rendered instead of QuizList

    return (
        <>
        <img src={quiz.images[0].header}/>
        <h1>{quiz.name}</h1>
        
        <h4>State Updates</h4>
        <p>Current Score: {score} / {quiz.questions.length} </p>
        <p>Questions Attempted: {questionsAttempted}</p>

        {showResults ? 
            <QuizResults score={score} quiz={quiz}/>
        :
            <QuizList handleClick={handleClick} quiz={quiz} />
        }       
        </>

    )

}

export default QuizContainer;