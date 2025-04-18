import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import plant from "../../Assets/Projects/plant.png";
import ghar from "../../Assets/Projects/ghar.png";
import brick from "../../Assets/Projects/brickco.png";
import learnomic from "../../Assets/Projects/learnomic.png";
import book from "../../Assets/Projects/book.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learnomic}
              isBlog={false}
              title="Learnomic"
              description="A web application designed to assist students by providing easy access to previous year questions (PYQs) and study notes for various subjects. The platform categorizes materials based on semesters and subjects, ensuring seamless navigation. The application features a Google authentication system, ensuring secure access to study materials."
              ghLink="https://github.com/anupsinghh/learnomic"
              demoLink="https://learnomic.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plant}
              isBlog={false}
              title="Plant Disease Detection"
              description="A web-based application that detects plant diseases from leaf images using a custom-trained EfficientNetB0 model. The model was built from scratch using TensorFlow, trained on the PlantVillage dataset with data augmentation and fine-tuning for high accuracy. The app includes an intuitive GUI for image uploads, provides predictions with confidence scores."
              ghLink="https://github.com/anupsinghh/plant-disease-detection"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brick}
              isBlog={false}
              title="brickco"
              description="A web-based ERP solution built using React and Firebase to streamline brick factory operations. It includes modules for order tracking, inventory management, employee records, and real-time updates. Features secure authentication, responsive design, and intuitive dashboards for efficient workflow management."
              ghLink="https://github.com/anupsinghh/bricksCo"
              demoLink="https://bricks-co.vercel.app/login"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ghar}
              isBlog={false}
              title="Property Renting Website"
              description="A responsive frontend renting platform built with React. Includes property filtering, search, and authentication (Sign In/Sign Up) using Firebase. User uploads are stored locally, offering a smooth and intuitive experience for both renters and listers."
              ghLink="https://github.com/anupsinghh/MarwadiVilla"
              demoLink="https://ghar-dekho-brown.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Kitabo-ki-dukan"
              description="A static frontend web application for an online bookstore built using React. Designed to showcase book listings with category sections, intuitive layout, and a clean UI. Focused on layout, styling, and component structure without dynamic search or filtering functionality."
              ghLink="https://github.com/anupsinghh/Kitabo-ki-dukan"
              demoLink="https://booklo.vercel.app/" 
            />
          </Col>

      

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
