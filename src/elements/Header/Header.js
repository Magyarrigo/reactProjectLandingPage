import "./Header.css";
import Container from "../Container/Container";
import ContactLink from "./ContactLink/ContactLink";
import Logo from "../Logo/Logo";
import Link from "./Link/Link";

function Header() {
  return (
    <header className="header">
      <Container>
        <div className="headerContainer">
          <Logo textFirst="moja" textSecond="firma" />
          <nav>
            <ul className="headerNav">
              <Link id="#aboutUs" text="o nas" />
              <Link id="#ourOffer" text="oferta" />
              <ContactLink text="kontakt" />
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
export default Header;
