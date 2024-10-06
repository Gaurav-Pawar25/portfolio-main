import { Container } from "react-bootstrap";

import IJECSLogo from "../../Assets/conferences/citations5.jpg";
import ExperienceCard from "../Experiences/ExperienceCard";

export default function Conferences() {
    const conferences = [
        {
            title: "A SUPERVISED MACHINE LEARNING APPROACH USING K-NEAREST NEIGHBOR ALGORITHM TO DETECT FAKE REVIEWS ON AMAZON  ",
            organization: "INTERNATIONAL RESEARCH JOURNAL OF ENGINEERING AND TECHNOLOGY",
            duration: "2 February, 2023",
            description: "",
            scores: "",
            experienceType: "",
            organizationLogo: IJECSLogo,
            link: "https://www.ijecs.in/index.php/https://www.irjet.net/archives/V10/i2/IRJET-V10I2123.pdfijecs/article/view/4708/4054",
        },
    ]
    return (
        <Container className="pt-5" id="conferences">
            <h1 className="project-heading text-start">
                Publications
                <strong className="purple">.</strong>
            </h1>
            <div className="education-cards-div ps-5 text-start">
                    {
                        conferences && conferences.map((Conference) => {
                            return (
                                <ExperienceCard 
                                    title={Conference.title} 
                                    description={Conference.description} 
                                    duration={Conference.duration} 
                                    organization={Conference.organization} 
                                    scores={Conference.scores} 
                                    experienceType={Conference.experienceType} 
                                    organizationLogo={Conference.organizationLogo}
                                    link={Conference.link}
                                    disabledProps={["skills", "scores"]}
                                    className="mb-2"
                                />
                            );
                        })
                    }
                </div>
        </Container>
    );
}