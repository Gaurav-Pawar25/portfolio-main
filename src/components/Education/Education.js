import { Container } from "react-bootstrap";
import ExperienceCard from "../Experiences/ExperienceCard";
import Particle from "../Particle";
import Certifications from "./Certifications";
import Conferences from "./Conferences";

import { OGMGLogo,AMISLogo,ZCOERLogo } from "./educationLogos";

export default function Education() {
    const education = [
        {
            title: "B.E. in Information Technology",
            organization: "Zeal College of Engineering & Research, Pune",
            duration: "Aug 2019 - June 2023",
            description: "As a student of Computer Science and Engineering, I have learned a lot about the fundamentals of Information Technology and Engineering. I have also learned a lot about the practical aspects of Computer Science and Engineering.",
            scores: <span>8.48 CGPA</span>,
            experienceType: "Full Time",
            organizationLogo: ZCOERLogo,
        },
        {
            title: "Higher Secondary Certificate",
            organization: "Atma Malik International School, Kokamthan",
            organizationLogo: AMISLogo,
            duration: "2019",
            description: [],
            scores: "85.20 %",
            experienceType: "",

        },
        {
            title: "Secondary School Certificate",
            organization: "Om Gurudev Secondary School, Kopargaon",
            organizationLogo: OGMGLogo,
            duration: "2017",
            description: [],
            scores: "91.40 %",
            experienceType: "",
        },
    ]
    return (
        <Container fluid className="education-section mt-5">
            <Particle />
            <Container className="pt-5">
                <h1 className="project-heading text-start">
                    Education
                    <strong className="purple">.</strong>
                </h1>
                <div className="education-cards-div ps-5 text-start">
                    {
                        education.map((education) => {
                            return (
                                <ExperienceCard 
                                    title={education.title} 
                                    description={education.description} 
                                    duration={education.duration} 
                                    organization={education.organization} 
                                    scores={education.scores} 
                                    experienceType={education.experienceType} 
                                    organizationLogo={education.organizationLogo}
                                    disabledProps={["skills"]}
                                    className="mb-2"
                                />
                            );
                        })
                    }
                </div>
            </Container>
            <Conferences />
            <Certifications />
        </Container>
    );
}