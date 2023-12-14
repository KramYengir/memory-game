import { useState } from "react";
import cards from "./components/cardInfo";
import "./App.css";

function App() {
  const [currentDeck, setCurrentDeck] = useState(cards);
  const [score, setScore] = useState(0);
  const [hiScore, setHiScore] = useState(0);

  function manageClick(cardId) {
    let clickedCard = currentDeck.filter((card) => card.id === cardId)[0];
    if (clickedCard.clicked) {
      alert("you die");
      resetGame();
    } else {
      clickedCard.clicked = true;
      shuffleCards();
      setScore((oldScore) => {
        return (oldScore += 1);
      });
    }
  }

  function shuffleCards() {
    // Clone the array to avoid modifying the original
    const shuffledArray = [...cards];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements at i and j
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    setCurrentDeck(shuffledArray);
  }

  function resetGame() {
    setCurrentDeck(cards);
    setScore(0);
  }

  return (
    <>
      <h1>The Many Faces of Ozzy</h1>
      <h2>{score}</h2>
      <div className="cards-container">
        {currentDeck.map((card) => (
          <div
            className="card-container"
            key={card.id}
            onClick={() => {
              manageClick(card.id);
            }}
          >
            <img src={card.src} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
