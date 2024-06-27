import "./ContactLink.css";

function ContactLink({ text }) {
  return (
    <li className="navElement">
      <p className="navLink contactButton">{text}</p>
    </li>
  );
}

export default ContactLink;
