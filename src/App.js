import NavBar from "./component/navbar/NavBar";
import Intro from "./component/intro/Intro";
import Projects from "./component/projects/Projects";
import Contact from "./component/contact/Contact";
import Project from "./component/project/Project";

function App() {
  return (
    <div>
      <NavBar />
      <Intro />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
