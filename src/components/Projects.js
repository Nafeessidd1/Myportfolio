import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ml2.png";
import projImg2 from "../assets/img/Image.jpg";
import projImg3 from "../assets/img/m3.png";
import projImg4 from "../assets/img/vote.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {

  const projects = [
    {
      title: "Shooting Game",
      description: "Web Development",
      imgUrl: projImg1,
      githubUrl: "https://github.com/your-username/shooting-game",
    },
    {
      title: "Smart Surveillance System",
      description: "YOLO, OpenCV, Firebase",
      imgUrl: projImg2,
      githubUrl: "https://github.com/your-username/smart-surveillance-system",
    },
    {
      title: "E-commerce Website",
      description: "Web Development",
      imgUrl: projImg3,
      githubUrl: "https://github.com/your-username/e-commerce-website",
    },
    {
      title: "Realtime Voting System",
      description: "Apache Kafka, Apache Spark, PostgreSQL, Docker",
      imgUrl: projImg4,
      githubUrl: "https://github.com/your-username/realtime-voting-system",
    },
    {
      title: "Proxy Server",
      description: "Computer Networking",
      imgUrl: projImg2,
      githubUrl: "https://github.com/your-username/proxy-server",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      githubUrl: "https://github.com/your-username/business-startup",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>1. Developed a dynamic Ball Shooting Game using HTML, CSS, and JavaScript, showcasing interactive web design.<br/>
               2. Developed a smart surveillance system for CCTV that triggers an alarm upon detecting unauthorized entry into restricted areas and uses real-time Firebase for facial recognition.<br/>
               3. Crafted an E-commerce Website with HTML, CSS, JavaScript, and React for a seamless user experience.<br/>
               4. Developed a real-time voting system using Apache Kafka, Apache Spark, PostgreSQL, Streamlit, and Docker.<br/>
               5. Implemented a Machine Learning project for house prediction, combining coding skills with data analysis and model development.
            </p>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard
                        key={index}
                        {...project}
                      />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {/* Add content for Tab 2 here */}
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  {/* Add content for Tab 3 here */}
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
};
