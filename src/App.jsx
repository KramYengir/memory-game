import { useState } from "react";
import cards from "./components/cardInfo";
import "./App.css";
import Card from "./components/Card";
import GameOver from "./components/GameOver";

// ... (other imports)

function App() {
  const [currentDeck, setCurrentDeck] = useState(cards);
  const [score, setScore] = useState(0);
  const [hiScore, setHiScore] = useState(0);
  const [areRotated, setAreRotated] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  function manageClick(cardId) {
    let clickedCard = currentDeck.find((card) => card.id === cardId);

    if (clickedCard.clicked) {
      setIsGameOver(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Optional: Adds smooth scrolling behavior
      });
    } else {
      setAreRotated(true);
      setTimeout(() => {
        setAreRotated(false);
        handleCardClick(clickedCard);
      }, 200);
    }
  }

  function handleCardClick(clickedCard) {
    clickedCard.clicked = true;
    setScore((oldScore) => oldScore + 1);

    if (score + 1 >= hiScore) setHiScore(score + 1);

    shuffleCards();
  }

  function shuffleCards() {
    const shuffledArray = [...currentDeck];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    setCurrentDeck(shuffledArray);
  }

  function resetGame() {
    setIsGameOver(false);
    setCurrentDeck(
      cards.map((card) => {
        card.clicked = false;
        return card;
      })
    );
    setScore(0);
  }

  return (
    <>
      {isGameOver && (
        <GameOver
          message={score == 12 ? "Well Done!" : "Game Over!"}
          score={score}
          onclick={resetGame}
        />
      )}
      <h1>The Many Faces of Ozzy</h1>
      <div className="scores">
        <h2>Score: {score} </h2>
        <h2>Hi-Score: {hiScore}</h2>
      </div>
      <div className="cards-container">
        {currentDeck.map((card) => (
          <Card
            key={card.id}
            card={card}
            areRotated={areRotated}
            manageClick={manageClick}
          />
        ))}
      </div>
    </>
  );
}

export default App;
