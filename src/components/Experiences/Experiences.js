import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";

import * as logos from "./experienceLogos";

import "./experiences.css";

function Experiences() {

  const experiences = [
    {
      "title": "Java ESD Intern",
      "organization": "Zensar Technologies",
      "organizationLogo": logos.zensarLogo,
      "duration": "Nov 2022 - Feb 2023",
      "description": [],
      "skills": "Springboot, PostgreSQL, Java, AWS",
      "experienceType": "Internship",
    },
    {
      "title": "Web Development Intern",
      "organization": "Edusha Eduversity",
      "organizationLogo": logos.edushaLogo,
      "duration": "Oct 2021 - Jan 2022",
      "description": [],
      "skills": "Software Development, Front-End Development,Git, User Interface Design, AJAX, Bootstrap, REST APIs, JavaScript",
      "experienceType": "Internship",
    },
    {
      "title": "Frontend Web Developer Intern",
      "organization": "Samagra Foundation",
      "organizationLogo": logos.samagraLogo,
      "duration": "Aug 2021 - Sep 2021",
      "description": [
        "Developed frontend for fundraising portal of the organization",
        "Assisting and collaborating with the teammates to work on HTML, CSS, JS, Bootstrap, PHP and various APIs"
      ],
      "skills": "Front-End Development, PHP, MySQL, JavaScript, HTML5, Cascading Style Sheets (CSS)",
      "experienceType": "Internship",
    },
    {
      "title": "Python Developer Associate",
      "organization": "TEN Labs",
      "organizationLogo": logos.tenlabsLogo,
      "duration": "May 2021 - Aug 2021",
      "description": [
        "Built an API using Django Rest Framework for the EdTech startup.",
        "Scraped websites for course information and built production ready API",
      ],
      "skills": "Object-Oriented Programming (OOP), Flask, Django REST Framework, Django, REST APIs, Python (Programming Language), Web Development",
      "experienceType": "Internship",
    },
    {
      "title": "Web Developer",
      "organization": "Mozilla Opensource Club, ZCOER",
      "organizationLogo": logos.mozillaLogo,
      "duration": "Oct 2020 - July 2021",
      "description": [],
      "skills": "Front-End Development",
      "experienceType": "College Club",
    },
  ]

  return (
    <Container className="py-5 mt-5">
      <Particle />
      <div className="main-timeline">
        {
          experiences.map((experience, index) => {
            return (
              <div className={`timeline ${index % 2 === 0 ? "left" : "right"}`}>
                <ExperienceCard title={experience.title} duration={experience.duration} organization={experience.organization} description={experience.description} experienceType={experience.experienceType} skills={experience.skills} organizationLogo={experience.organizationLogo} disabledProps={["description", "scores"]} />
              </div>
            )
          })
        }
      </div>
    </Container>
  );
}

export default Experiences;