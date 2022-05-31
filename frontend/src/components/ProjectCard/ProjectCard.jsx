import './ProjectCard.css';

function ProjectCard(props) {
  return (
    <div className="Project-Card">
      <div className="texts">
        <h1 className="project-title">{props.title}</h1>
        <p className="project-summary">{props.summary}</p>
      </div>
      
      {/* <img src="images/feirao-trabalho.jpg" alt="" /> */}
    </div>
  )
}

export default ProjectCard;