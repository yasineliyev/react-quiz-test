import { useState } from "react";
import "./App.css";
import { questions } from "./questionsData";

function App() {
  const [showFinalResult, setShowFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowFinalResult(true);
    }
  };

  const restartTest = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowFinalResult(false);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Bilik testi</h1>
        <h2>Topladığın xal: {score}</h2>
        {showFinalResult ? (
          <div className="result">
            <h1>Nəticə</h1>
            <h2>
              Doğru cavab: {score} ({(score / questions.length) * 100}%)
            </h2>
            <button onClick={() => restartTest()}>Yenidən başla</button>
          </div>
        ) : (
          <div className="question-card">
            <h2>
              Ümumi sual sayı: {questions.length} <br />
              İndiki sual: {currentQuestion + 1}
            </h2>
            <h3>{questions[currentQuestion].text}</h3>
            <ul>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li
                    onClick={() => optionClicked(option.isCorrect)}
                    key={option.id}
                  >
                    {option.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
