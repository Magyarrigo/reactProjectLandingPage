import "./ContactLink.css";

function ContactLink({ text }) {
  return (
    <li className="navElement">
      <a className="navLink contactButton" id="contact" href="#contact">
        {text}
      </a>
    </li>
  );
}

export default ContactLink;
