import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ml2.png";
import projImg2 from "../assets/img/image.jpg";
import projImg3 from "../assets/img/m3.png";
import projImg4 from "../assets/img/vote.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
//import 'animate.css';
//import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Shooting Game",
      description: "Web Development",
      imgUrl: projImg1,
    },
    {
      title: "Smart Surveillance System ",
      description: "YOLO,OpenCV,Firebase",
      imgUrl: projImg2,
    },
    {
      title: "E-commerce website",
      description: "Web Development",
      imgUrl: projImg3,
    },
    {
      title: "Realtime Voting system",
      description: "Apache Kafka ,Apache Spark,PostgreSQL,Docker",
      imgUrl: projImg4,
    },
    {
      title: "Proxy Server",
      description: "Computer Networking",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
                <h2>Projects</h2>
                <p> 1. Developed a dynamic Ball Shooting Game using HTML, CSS, and JavaScript, showcasing interactive web design.<br/>
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
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">

                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
