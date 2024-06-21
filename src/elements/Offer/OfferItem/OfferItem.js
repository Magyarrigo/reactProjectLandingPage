import "./OfferItem.css";

function OfferItem({ offerName, isNew }) {
  if (isNew) {
    return (
      <div className="square squareNew">
        <div className="addNew">
          <p className="offerItemTitle">{offerName}</p>
          <p className="offerItemIndex">(nowosc)</p>
        </div>
      </div>
    );
  }
  return (
    <div className="square">
      <p className="offerItemTitle">{offerName}</p>
    </div>
  );
}

export default OfferItem;
