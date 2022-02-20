import "./intro.scss";
import profile from "../../img/sakihobbit.png";
import Cv from "../../document/CV.pdf";

export default function About() {
  return (
    <div className="intro" id="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h1 className="i-title">Hello, I'm Saki</h1>
          <h2 className="i-subtitle">Software Developer</h2>
          <p className="i-desc">
            I recently completed Graduate Diploma in IT. Based in Auckland, New
            Zealand.
          </p>
          <div className="i-btn">
            <button
              className="btn-project"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "#projects";
              }}
            >
              My Projects
            </button>
            <a className="btn-cv" href={Cv} target="_blank">
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-right-wrapper">
          <div className="i-card bg"></div>
          <div className="i-card">
            <img src={profile} alt="profile-img" className="i-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
