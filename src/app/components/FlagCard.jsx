import React, { useState } from "react";

const FlagCard = ({ flag, onAnswer }) => {
  const [userAnswer, setUserAnswer] = useState("");

  const handleSubmit = () => {
    const isCorrect = userAnswer.toLowerCase() === flag.name.toLowerCase();
    onAnswer(isCorrect, flag.name);
    setUserAnswer("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      <img
        src={flag.image}
        alt={flag.name}
        style={{
          width: "300px",
          height: "200px",
          marginBottom: "20px",
        }}
      />
      <input
        type='text'
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          marginBottom: "10px",
          color: "black",
        }}
      />
      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Svar
      </button>
    </div>
  );
};

export default FlagCard;
