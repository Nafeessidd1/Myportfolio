import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img style={{height: "250px"}} src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {githubUrl && (
            <div className="github-link">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </Col>
  );
};
