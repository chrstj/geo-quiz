"use client";
import React, { useState, useEffect } from "react";
import FlagCard from "./FlagCard";

const Quiz = ({ continentFlags }) => {
  const [flags, setFlags] = useState([]);
  const [currentFlagIndex, setCurrentFlagIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [feedbackColor, setFeedbackColor] = useState("black");
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    // Shuffle the continent flags and pick 15 random ones
    const shuffledFlags = [...continentFlags].sort(() => 0.5 - Math.random());
    setFlags(shuffledFlags.slice(0, 12)); // Select 15 random flags for the quiz
    setQuizStarted(true);
  };

  const handleAnswer = (isCorrect, correctAnswer) => {
    if (isCorrect) {
      setScore(score + 1);
      setFeedback("Riktig");
      setFeedbackColor("green");
    } else {
      setFeedback(`${correctAnswer}`);
      setFeedbackColor("red");
    }

    if (currentFlagIndex < flags.length - 1) {
      setTimeout(() => {
        setFeedback("");
        setCurrentFlagIndex(currentFlagIndex + 1);
      }, 1000);
    } else {
      setTimeout(() => {
        setIsQuizOver(true);
      }, 1000);
    }
  };

  const handlePlayAgain = () => {
    const shuffledFlags = [...continentFlags].sort(() => 0.5 - Math.random());
    setFlags(shuffledFlags.slice(0, 12));
    setCurrentFlagIndex(0);
    setScore(0);
    setIsQuizOver(false);
    setFeedback("");
    setFeedbackColor("black");
    setQuizStarted(false); // Reset to show the start button again
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {!quizStarted ? (
        <button onClick={startQuiz} style={{}}>
          Start Quiz
        </button>
      ) : isQuizOver ? (
        <div>
          <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
            {score} av 12
          </h2>
          <button
            onClick={handlePlayAgain}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            Spill igjen
          </button>
        </div>
      ) : (
        flags.length > 0 && (
          <div>
            <FlagCard
              flag={flags[currentFlagIndex]}
              onAnswer={(isCorrect) =>
                handleAnswer(isCorrect, flags[currentFlagIndex].name)
              }
            />
            {feedback && (
              <p
                style={{
                  fontSize: "18px",
                  color: feedbackColor,
                  marginTop: "10px",
                }}
              >
                {feedback}
              </p>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Quiz;
