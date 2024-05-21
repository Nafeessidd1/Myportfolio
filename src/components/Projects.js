import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ml2.png";
import projImg2 from "../assets/img/ml1.png";
import projImg3 from "../assets/img/m3.png";
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
      imgUrl: https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.labellerr.com%2Fblog%2F6-smart-surveillance-use-cases-using-vision-ai%2F&psig=AOvVaw28WzJPy-eNJSLS_neR4WSN&ust=1716403765614000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCa_ri0n4YDFQAAAAAdAAAAABAE,
    },
    {
      title: "E-commerce website",
      description: "Web Development",
      imgUrl: projImg3,
    },
    {
      title: "Image frogery Detection",
      description: "Deep Learning",
      imgUrl: projImg1,
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
                <p>
Developed a dynamic Ball Shooting Game using HTML, CSS, and JavaScript, showcasing interactive web design. Crafted an E-commerce Website with HTML, CSS, JavaScript, and React for seamless user experience. Implemented a Machine Learning project for house prediction, combining coding skills with data analysis and model development..</p>
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
