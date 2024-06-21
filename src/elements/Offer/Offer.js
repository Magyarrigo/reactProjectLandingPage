import "./Offer.css";
import Container from "../Container/Container";
import OfferItem from "./OfferItem/OfferItem";

const offers = [
  {
    offerName: "audi 4x4",
    isNew: false,
  },
  {
    offerName: "BMW",
    isNew: false,
  },
  {
    offerName: "kia",
    isNew: true,
  },
  {
    offerName: "toyota",
    isNew: false,
  },
  {
    offerName: "subaru",
    isNew: false,
  },
  {
    offerName: "tesla",
    isNew: true,
  },
  {
    offerName: "new cars",
    isNew: true,
  },
  {
    offerName: "FIAT",
    isNew: true,
  },
];

function Offer({ offerTitle }) {
  return (
    <section className="offerContainer" id="ourOffer">
      <Container>
        <h1 className="ourOfferTitle">{offerTitle}</h1>
        <div className="ourOffersContainer">
          {offers.map(function (item, index) {
            return (
              <OfferItem
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
