import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
function Card() {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <FontAwesomeIcon
            icon={faLeaf}
            size="2px"
            color="green"
            className="leaf-icon"
          />
          <h3>Eco</h3>
        </div>
        <div className="card">
          <img src="src/image/fresh.png" alt="fresh-icon" />
          <h3>Fresh Produce</h3>
        </div>
        <div className="card">
          <img src="src/image/safety.png" alt="safety" />
          <h3>Safety First</h3>
        </div>
        <div className="card">
          <img src="src/image/easy.png" alt="easy-icon" />
          <h3>Simply First</h3>
        </div>
      </div>
    </>
  );
}

export default Card;
