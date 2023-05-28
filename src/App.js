import { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import {
    ContentCard,
    SkillsProgressBar
} from "./components";

import { getProjects } from "./services";

import SkillsData from "./content/mySkills.json";

import profilePic from "./assets/images/armando-home-office-sm.png";
import remoteiScreenshot from "./assets/images/REMOTEi-screenshot.png";
import amazonCardShufflerScreenshot from "./assets/images/52-card-pickup.png";

import './App.scss';

import { Linkedin, Github, GeoAlt, Envelope } from 'react-bootstrap-icons';

function App() {
    const [mySkillsList, setMySkillsList] = useState([]);

    // TODO: Setup to pull content from a backend resource (API)
    useEffect(() => {
        getProjects().then(response => setMySkillsList(response?.Items));
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
            <li className="list-inline-item mb-3" style={{display: 'flex', borderTopStyle: 'solid', borderTopColor: 'black', paddingTop: '20px'}}>
                <Image src={amazonCardShufflerScreenshot} rounded fluid className="project-image" />
                <div>
                    <h3 className={'title'}>52 Pickup Card Shuffler</h3>
                    <p>During an interview at Amazon I was asked to build a simple card shuffler app. The original ask was to use Javascript Classes and I took it a bit further.</p>
                    <p>Demo: <a href={'http://react-52-card-pickup.armandomusto.com/'} target="_blank" rel={'noreferrer'}>http://react-52-card-pickup.armandomusto.com</a></p>
                    <p>Github: <a href={'https://github.com/amusto/react-shuffle-deck/'} target="_blank" rel={'noreferrer'}>https://github.com/amusto/react-shuffle-deck</a></p>
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
            {SkillsData
                .sort((a,b) => b.percentage - a.percentage)
                .map(skill => {
                    const compProps = { title: skill?.title, percentage: skill?.percentage}
                    return <div className={'mt-4'} key={skill?.title}>
                        <SkillsProgressBar key={`skill-${skill?.title}`} {...compProps} />
                    </div>
            })}
        </div>
    }

    const skillsCardProps = {
        title: 'Skills',
        body: <SkillsDetails />
    }


    const WorkExperienceDetails = () => {
        const uexamsJobDesc = `As the Principal Engineer & Solutions Architect at uExamS I enjoy working closely with the founding members and team of highly-skilled engineers. Leading architecture initiatives and development workload I closely interact with leadership, aligning features and solutions with our Technology Stack and roadmap.`
        return <ul>
            <li className="list-inline-item mb-3" style={{display: 'flex'}}>
                <div>
                    <h3 className={'title'}>Principal Engineer / Solutions Architect - uExamS (2020 - Present)</h3>
                    <p>{uexamsJobDesc}</p>
                </div>
            </li>
            <li className="list-inline-item mb-3" style={{display: 'flex'}}>
                <div>
                    <h3 className={'title'}>Senior Software Engineer - College Board (2019 - 2020)</h3>
                    <p>{`Worked as a Senior Developer leading and mentoring developers on a variety of solutions covering both backend and front end. As a Technical Lead on our team of 5 developers.`}</p>
                </div>
            </li>
            {/*<li className="list-inline-item mb-3" style={{display: 'flex', borderTopStyle: 'solid', borderTopColor: 'black', paddingTop: '20px'}}>*/}
            {/*    <Image src={amazonCardShufflerScreenshot} rounded fluid className="project-image" />*/}
            {/*    <div>*/}
            {/*        <h3 className={'title'}>52 Pickup Card Shuffler</h3>*/}
            {/*        <p>During an interview at Amazon I was asked to build a simple card shuffler app. The original ask was to use Javascript Classes and I took it a bit further.</p>*/}
            {/*        <p>Demo: <a href={'http://react-52-card-pickup.armandomusto.com/'} target="_blank">http://react-52-card-pickup.armandomusto.com</a></p>*/}
            {/*        <p>Github: <a href={'https://github.com/amusto/react-shuffle-deck/'} target="_blank">https://github.com/amusto/react-shuffle-deck</a></p>*/}
            {/*    </div>*/}
            {/*</li>*/}
        </ul>
    }

    const workExperienceCardProps = {
        title: 'Work Experience',
        body: <WorkExperienceDetails />
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
                            <li className="list-inline-item"><a href="https://www.linkedin.com/in/armandomusto/" target="_blank" rel={'noreferrer'}>
                                <Linkedin color="grey" size={40} />
                            </a></li>
                            <li className="list-inline-item"><a href="https://github.com/amusto" target="_blank" rel={'noreferrer'}>
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
                    <ContentCard {...workExperienceCardProps} />
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
