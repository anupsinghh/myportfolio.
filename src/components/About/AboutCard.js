import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I'm <span className="purple">Anup Singh</span> from{" "}
            <span className="purple">Mumbai, India</span>.
            <br />
            Currently, I'm pursuing a <strong>Computer Engineering</strong> degree (2022-2026) at{" "}
            <span className="purple">Marwadi University, Rajkot</span>.
            <br />
            <br />
            I'm passionate about creating scalable solutions through full-stack development and modern technologies. I enjoy working on real-world projects that solve problems and enhance user experience.
            <br />
            <br />
            Outside of work, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
