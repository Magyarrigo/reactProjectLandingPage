import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Logo from "../Logo/Logo";
import Container from "../Container/Container";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footerContainer">
          <div className="logoAtFooterContainer">
            <Logo
              textFirst={"moja"}
              textSecond={"firma"}
              className="logoAtFooter"
            />
            <p className="footerText">Wszystkie prawa zastrzeżone @2023 </p>
          </div>
          <div className="footerContainerMediaIcons">
            <FontAwesomeIcon
              icon={faTwitter}
              color="white"
              className="mediaIcon"
            />

            <FontAwesomeIcon
              icon={faFacebook}
              color="white"
              className="mediaIcon"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
