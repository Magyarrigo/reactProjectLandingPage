import "./Offer.css";
import Container from "../Container/Container";
import Square from "./Square/Square";

const offerArray = [
  {
    offerName: "Offer one",
    isNew: false,
  },
  {
    offerName: "Offer two",
    isNew: false,
  },
  {
    offerName: "Offer three",
    isNew: true,
  },
  {
    offerName: "Offer four",
    isNew: false,
  },
  {
    offerName: "Offer five",
    isNew: false,
  },
  {
    offerName: "Offer six",
    isNew: true,
  },
  {
    offerName: "New Car rental",
    isNew: "true",
  },
  {
    offerName: "satelite",
    isNew: "true",
  },
];

function Offer({ offerTitle }) {
  return (
    <section className="offerContainer" id="ourOffer">
      <Container>
        <h1 className="ourOfferTitle">{offerTitle}</h1>
        <div className="ourOffersContainer">
          {offerArray.map(function (item, index) {
            return (
              <Square
                offerName={item.offerName}
                isNew={item.isNew}
                key={index}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Offer;
