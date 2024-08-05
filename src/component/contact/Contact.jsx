import "./contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faFileLines } from "@fortawesome/free-solid-svg-icons";
import Github from "../../img/GitHub-Mark-32px.png";
import Linkedin from "../../img/LI-In-Bug.png";
import Cv from "../../document/CV - Saki-Nakayama.pdf";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h2>Get In Touch</h2>
      <div className="social-icons">
        <a href="https://github.com/sakinakayama" target="_blank">
          <img src={Github} className="icon-github" alt="" />
        </a>
        <a
          href="https://linkedin.com/in/saki-nakayama-664837218"
          target="_blank"
        >
          <img src={Linkedin} className="icon-linkedin" alt="" />
        </a>
      </div>
      <p className="copylight">© 2024 Saki Nakayama.</p>
    </div>
  );
}
