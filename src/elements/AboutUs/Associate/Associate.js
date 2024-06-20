import "./Associate.css";

function Associate({ name, lastName, department }) {
  return (
    <div className="associateData">
      <div className="associateDataTitle">
        <h2>{name} {lastName} {department}</h2>
        
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa
        et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id
        malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in,
        varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt
        libero ultrices in. Morbi vel massa et lacus egestas cursus a non magna.
        Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer
        felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis
        efficitur lacinia enim, non tincidunt libero ultrices in.
      </p>
    </div>
  );
}

export default Associate;
