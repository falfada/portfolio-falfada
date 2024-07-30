import "../scss/modules/Project.scss";
function Project(props) {
  return (
    <section className="container">
      {props.projects.map((item, index) => (
        <div key={index} className="project-container">
          <div className="project-screenshot">
            <img src={item.img} />
          </div>
          <h2 className="project-name">
            {item.projectName}
            <div className="project-links">
              <a
                href={item.githubRepo}
                className="project-link"
                rel="noreferrer"
                target="_blank"
                data-name="github repo"
              >
                github repo
              </a>
              <a
                href={item.deployedLink}
                className="project-link"
                rel="noreferrer"
                target="_blank"
                data-name="deployed application"
              >
                deployed applilcation
              </a>
            </div>
          </h2>
        </div>
      ))}
    </section>
  );
}

export default Project;
