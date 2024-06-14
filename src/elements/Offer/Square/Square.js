import "./Square.css";

function Square({ offerName, isNew }) {
  if (isNew) {
    return (
      <div className="square squareNew">
        <div className="addNew">
          <h2>{offerName}</h2>
          <h4>(nowosc)</h4>
        </div>
      </div>
    );
  }
  return (
    <div className="square">
      <h2>{offerName}</h2>
    </div>
  );
}

export default Square;
