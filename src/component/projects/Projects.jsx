import "./projects.scss";
import { projects } from "../../data";
import Project from "../../component/project/Project.jsx";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h2 className="p-title">My Projects</h2>
      <p className="p-desc">Here is what I developed in my course.</p>

      <div className="project">
        {projects.map((item) => (
          <Project
            key={item.id}
            img={item.img}
            name={item.name}
            techs={item.techs.map((tech) => (
              <li>{tech}</li>
            ))}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
