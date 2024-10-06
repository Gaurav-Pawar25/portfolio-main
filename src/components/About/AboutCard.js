import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <p>Hi Everyone, I am 
            <span className="purple"> Gaurav Pawar </span> from
            <span className="purple"> Ch. Sambhajinagar, Maharashtra.</span></p>
            Currently working as a full-time freelancer, specializing in developing full-stack applications for various clients. If you need any custom development, I can create tailored solutions to meet your requirements.
            <br />
            Apart from coding, I love to
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Read about tech
            </li>
            <li className="about-activity">
              <ImPointRight /> write books.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
