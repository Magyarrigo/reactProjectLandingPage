import "./ContactLink.css";

function ContactLink({ text }) {
  return (
    <li className="navElement">
      <a className="navLink contactButton">{text}</a>
    </li>
  );
}

export default ContactLink;
