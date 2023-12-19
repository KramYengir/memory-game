const Card = ({ card, areRotated, manageClick }) => {
  return (
    <div
      className={`card-container ${areRotated ? "flip" : ""}`}
      onClick={() => {
        manageClick(card.id);
      }}
    >
      <div className="card flipper">
        <div className="card front">
          <img src={card.src} alt="" />
        </div>
        <div className="card back"></div>
      </div>
    </div>
  );
};

export default Card;
