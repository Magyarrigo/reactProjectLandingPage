import "./PageBanner.css";
import Container from "../Container/Container";

function PageBanner({ title, description, buttonText }) {
  return (
    <section className="pageContainer">
      <div className="pageBanner">
        <Container>
          <h1 className="pageBannerTitle">{title}</h1>
          <p className="pageBannerDescription">{description}</p>
          <a href="#ourOffer" className="pageBannerLink">
            {buttonText}
          </a>
        </Container>
      </div>
    </section>
  );
}

export default PageBanner;
