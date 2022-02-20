import "./project.scss";

export default function Project({ img, name, techs, link }) {
  return (
    <div className="item">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" />
      </a>
      <h3>{name}</h3>
      <ul>{techs}</ul>
    </div>
  );
}
