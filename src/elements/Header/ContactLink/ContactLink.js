import "./ContactLink.css";

function ContactLink({ text }) {
  return (
    <li className="navElement">
      <p className="navLink contactButton" id="contact" href="#contact">
        {text}
      </p>
    </li>
  );
}

export default ContactLink;
