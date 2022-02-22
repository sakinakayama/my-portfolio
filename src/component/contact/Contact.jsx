import "./contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileLines } from "@fortawesome/free-solid-svg-icons";
import Github from "../../img/GitHub-Mark-32px.png";
import Cv from "../../document/CV_Saki.pdf";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h2>Get In Touch</h2>
      <div className="social-icons">
        <a href="https://github.com/sakinakayama" target="_blank">
          <img src={Github} className="icon-github" alt="" />
        </a>
        <a
          href=""
          onClick={() => (window.location = "mailto:saki110490@gmail.com?")}
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" className="icon-font" />
        </a>
        <a href={Cv} target="_blank">
          <FontAwesomeIcon icon={faFileLines} size="2x" className="icon-font" />
        </a>
      </div>
      <p className="copylight">© 2022 Saki Nakayama.</p>
    </div>
  );
}
