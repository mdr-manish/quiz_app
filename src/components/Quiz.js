import React, { useState } from "react";
import { QuizData } from "../Data/QuizData";
import QuizResult from "./QuizResult";

function Quiz() {
  // for the question state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // for the score state
  const [score, setScore] = useState(0);
  // for the clickedoption state
  const [clickedOption, setClickedOption] = useState(0);
  // for the show result state
  const [showResult, setShowResult] = useState(false);
  // for the next button change handler
  const changeQuestion = () => {
    // updateScore();
    if(clickedOption !== 0 ){
      updateScore()
      if (currentQuestion < QuizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setClickedOption(0);
      } else {
        setShowResult(true);
      }
    }
  };
  // function for the selected option correction or not
  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
  };
  return (
    <div>
      <p className="heading-txt"> Quiz App</p>
      <div className="container">
        {showResult ? (
          <QuizResult
            score={score}
            totalScore={QuizData.length}
            tryAgain={resetAll}
          />
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}.</span>
              <br/>
              <span id="question-txt">
              {QuizData[currentQuestion].question}
              </span>
            </div>
            <div className="option-container">
              {QuizData[currentQuestion].options.map((option, index) => {
                return (
                  <button
                    key={index}
                    // className="option-btn"
                    className={`option-btn ${
                      clickedOption === index + 1 ? "checked" : null
                    }`}
                    onClick={() => setClickedOption(index + 1)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <input
              type="button"
              value="Next"
              id="next-button"
              onClick={changeQuestion}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
