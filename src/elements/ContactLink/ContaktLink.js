import "./ContactLink.css";

function ContactLink({ text }) {
  return (
    <li className="navElement">
      <a className="navLink contactButton" href="">
        {text}
      </a>
    </li>
  );
}

export default ContactLink;
