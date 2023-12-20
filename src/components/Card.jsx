const Card = ({ card, manageClick }) => {
  return (
    <div
      className="card-container"
      onClick={() => {
        manageClick(card.id);
      }}
    >
      <div className="card">
        <img src={card.src} alt="" />
      </div>
    </div>
  );
};

export default Card;
