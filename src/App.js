import { useState, useEffect } from "react";
import { Container, Row, Col, Image, ProgressBar } from "react-bootstrap";

import {
    ContentCard,
    SkillsProgressBar
} from "./components";

import SkillsData from "./content/mySkills.json";

import profilePic from "./assets/images/armando-home-office-sm.png";
import remoteiScreenshot from "./assets/images/REMOTEi-screenshot.png";

import './App.scss';

import { Linkedin, Github, GeoAlt, Envelope } from 'react-bootstrap-icons';

function App() {
    const [mySkillsList, setMySkillsList] = useState();

    useEffect(() => {
        setMySkillsList({ loading: true });
        const user = `https://api.github.com/users/hacktivist123/repos`;
        fetch(user)
            .then((res) => res.json())
            .then((repos) => {
                setMySkillsList({ loading: false, repos: repos });
            });
    }, [setMySkillsList]);

    useEffect(() => {
        console.log({mySkillsList});
    }, [mySkillsList]);


    const aboutMeCardProps = {
        title: 'About Me',
        body: `I'm enjoying my current role at uExamS where as the Principal Engineer & Solutions Architect we provide virtual learning resources for people with special needs or disabilities.`
    }

    const LocationDetails = () => {
        return <ul>
                <li className="list-inline-item mb-3" style={{display: 'flex'}}>
                    <GeoAlt color="grey" size={20} /> <span className={'ms-3'}>Washington, DC</span>
                </li>
                <li className="list-inline-item" style={{display: 'flex'}}>
                    <Envelope color="grey" size={20} /> <span className={'ms-3'}><a href={'mailto:armando.musto@gmail.com'}>armando.musto@gmail.com</a></span>
                </li>
            </ul>
    }

    const locationCardProps = {
        body: <LocationDetails />
    }

    // Should provide multiple projects (multiple list items)
    const ProjectRemoteDetails = () => {
        return <ul>
            <li className="list-inline-item mb-3" style={{display: 'flex'}}>
                <Image src={remoteiScreenshot} rounded fluid className="project-image" />
                <div>
                    <h3 className={'title'}>REMOTEi - A Desktop Application built using (Electron, React, Typescript)</h3>
                    <p>A Virtual Learning Desktop application supporting persons with special needs and disabilities.</p>
                </div>
            </li>
        </ul>
    }

    const projectsCardProps = {
        title: 'Latest Projects',
        body: <ProjectRemoteDetails />
    }

    const SkillsDetails = () => {
        const skillsText = `Over 20+ years experience across a range of disciplines in the Information Technology industry. \n\nI’ve enjoyed working on Enterprise-level projects with small to large development teams. This includes 10+ years working with Cloud solutions, specifically in AWS.`
        return <div>
            <p className={'skills-header'}>
                {skillsText}
            </p>

            {SkillsData.map(skill => {
                const compProps = { title: skill?.title, percentage: skill?.percentage}
                return <SkillsProgressBar key={`skill-${skill?.title}`} {...compProps} />
            })}

        </div>
    }

    const skillsCardProps = {
        title: 'Skills',
        body: <SkillsDetails />
    }

    return (
        <Container fluid className="App">
            <Row className="App-header">
                <Col>
                    <Image src={profilePic} rounded fluid className="header-profile-image" />
                    <div className="profile-content">
                        <h1 className={'name'}>Armando Musto</h1>
                        <h2 className={'desc'}>Software Engineer / Solutions Architect</h2>
                        <ul className="social list-inline">
                            <li className="list-inline-item"><a href="https://www.linkedin.com/in/armandomusto/" target="_blank">
                                <Linkedin color="grey" size={40} />
                            </a></li>
                            <li className="list-inline-item"><a href="https://github.com/amusto" target="_blank">
                                <Github color="grey" size={40} />
                            </a></li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row className="main-container">
                <Col md={{ span: 8 }}>
                    <ContentCard {...aboutMeCardProps} />
                    <ContentCard {...projectsCardProps} />
                </Col>
                <Col>
                    <ContentCard {...locationCardProps} />
                    <ContentCard {...skillsCardProps} />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
