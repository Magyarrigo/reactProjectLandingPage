import "./AboutUs.css";
import Container from "../Container/Container";
import Associate from "./Associate/Associate";
import Photo from "./Photo/Photo";

function AboutUs() {
  return (
    <div id="aboutUs" className="aboutUs">
      <Container>
        <h1 className="aboutUsTitle">Nasi Specjaliści</h1>
        <div className="associateField">
          <Photo image="associate-2.gif" />
          <Associate
            name="Angelika"
            lastName="Podmuch"
            department="[dzial HR]"
          />
        </div>
        <div className="associateField">
          <Photo image="associate-1.gif" />
          <Associate
            name="Marta"
            lastName="Podsiadlo"
            department="[dzial HR]"
          />
        </div>
        <div className="associateField">
          <Photo image="associate-4.gif" />
          <Associate
            name="Marcelina"
            lastName="Grot"
            department="[dzial SALES]"
          />
        </div>
        <div className="associateField">
          <Photo image="associate-3.gif" />
          <Associate
            name="Kamil"
            lastName="Dodatkowy"
            department="[dzial SALES]"
          />
        </div>
      </Container>
    </div>
  );
}

export default AboutUs;
