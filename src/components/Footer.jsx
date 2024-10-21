import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-content1">
            <div className="footer-content1-title">Address</div>
            181.B Sahkar Nagar near R.R Cat Square
            <br />
            <br />
            <div className="footer-content1-title">CONTACT US</div>
            +91 1234567890
            <br />
            <b>Email Us:</b>
            <br />
            MON-FRI 9am-6pm PT
            <br />
            <span>
              <a href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} className="icon" />
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/abhishek-sah-703ba8271/">
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
              </a>
            </span>
            <span>
              <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
              </a>
            </span>
            <span>
              <a href="https://twitter.com">
                {" "}
                <FontAwesomeIcon icon={faTwitter} className="icon" />
              </a>
            </span>
          </div>
          <div className="footer-content1 ">
            <div className="footer-content1-title">Explore</div>
            <br />
            Design
            <br />
            Protyping
            <br />
            Development Features
            <br />
            Design systems
          </div>
          <div className="footer-content1 ">
            <div className="footer-content1-title">Resources</div>
            <br />
            Blog
            <br />
            Best practices
            <br />
            Colors
            <br />
            Color wheel
          </div>
          <div className="footer-content1 "></div>
        </div>
      </div>
    </>
  );
}

export default Footer;
