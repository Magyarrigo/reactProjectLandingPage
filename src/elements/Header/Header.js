import "./Header.css";
import Link from "../Link/Link";
import ContactLink from "../ContactLink/ContaktLink";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";

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
