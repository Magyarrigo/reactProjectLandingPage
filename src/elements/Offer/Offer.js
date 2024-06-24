import "./Offer.css";
import Container from "../Container/Container";
import OfferItem from "./OfferItem/OfferItem";
import offers from "../../data/offerData";

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
