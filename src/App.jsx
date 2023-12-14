import { useState } from "react";
import cards from "./components/cardInfo";
import "./App.css";

function App() {
  const [currentDeck, setCurrentDeck] = useState(cards);

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

  return (
    <>
      <h1>The Many Faces of Ozzy</h1>
      <div className="cards-container">
        {currentDeck.map((card) => (
          <div className="card-container" key={card.id} onClick={shuffleCards}>
            <img src={card.src} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
