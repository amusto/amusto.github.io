import { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import {
    ContentCard,
    SkillsProgressBar,
    Navbar
} from "./components";

import { getProjects } from "./services";

import SkillsData from "./content/mySkills.json";

import profilePic from "./assets/images/armando-home-office-sm.png";
import remoteiScreenshot from "./assets/images/REMOTEi-screenshot.png";
import esteeLauderCodeAssessmentScreenshot from "./assets/images/EsteeLauderAssessment-screenshot.png";
import amazonCardShufflerScreenshot from "./assets/images/52-card-pickup.png";

import './App.scss';

import { Linkedin, Github, GeoAlt, Envelope } from 'react-bootstrap-icons';

function App() {
    const [mySkillsList, setMySkillsList] = useState([]);
    const [myWorkHistory, setMyWorkHistory] = useState([]);

    // TODO: Setup to pull content from a backend resource (API)
    useEffect(() => {
      getProjects().then(response => setMySkillsList(response?.Items));
      getProjects()
        .then(response => {
          const workHistoryArray = response?.Items.sort((a,b) => {return new Date(b.startDate) - new Date(a.startDate)});
          setMyWorkHistory(workHistoryArray);
        });
    }, [setMySkillsList, setMyWorkHistory]);

    // useEffect(() => {
    //   // console.log({mySkillsList});
    //   console.log({myWorkHistory});
    // }, [mySkillsList, myWorkHistory]);

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
          {/*<li className="list-inline-item mb-3" style={{display: 'flex'}}>*/}
          {/*  <Image src={esteeLauderCodeAssessmentScreenshot} rounded fluid className="project-image" />*/}
          {/*  <div>*/}
          {/*    <h3 className={'title'}>TypeAhead Code Assessment (React/Node/SASS))</h3>*/}
          {/*    <p>I  was asked to complete a code assessment where I used React and SASS on the front end and Node/Express to mimic the Typeahead backend services</p>*/}
          {/*    <p>It was a fun weekend project and turned out real well. (Demo site coming soon!)</p>*/}
          {/*    <p><a href={'https://github.com/amusto/typeahead-search-code-assessment'}>Code Repo</a></p>*/}
          {/*  </div>*/}
          {/*</li>*/}
          <li className="list-inline-item mb-3" style={{display: 'flex', borderTopStyle: 'solid', borderTopColor: 'black', paddingTop: '20px'}}>
              <Image src={remoteiScreenshot} rounded fluid className="project-image" />
              <div>
                  <h3 className={'title'}>REMOTEi - A Desktop Application built using (Electron, React, Typescript)</h3>
                  <p>A Virtual Learning Desktop application supporting persons with special needs and disabilities.</p>
                  <p>The desktop application was build using the Electron library (https://www.electronjs.org/), Typescript and React.js</p>
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
        title: 'Projects & Code Samples',
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
            {myWorkHistory.map((workRecord) => {
              return <li key={workRecord.projectId} className="list-inline-item mb-3" style={{display: 'flex'}}>
                <div>
                  <h3 className={'title'}>{workRecord.name} - {workRecord.company} ({new Date(Date.parse(workRecord.startDate)).toLocaleDateString('en-us', { year:"numeric", month:"short"})} - {workRecord.endDate ? workRecord.endDate : 'Present'})</h3>
                  <p>{workRecord.description}</p>
                </div>
              </li>
            })}
        </ul>
    }

    const workExperienceCardProps = {
        title: 'Work Experience',
        body: <WorkExperienceDetails />
    }

    const navProps = {
        sticky: 'top',
        title: 'Armando Musto - Software Engineer',
        links: [{ name: 'About Me', link: 'aboutMe' }]
    }

    return (
        <Container fluid className="App">
            <Row className='d-block d-sm-none'>
                <Navbar {...navProps} />
            </Row>
            <Row className="App-header">
                <Col>
                    <a name='home' />
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
                <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                    <Row>
                        <ContentCard {...aboutMeCardProps} />
                    </Row>
                    <Row className='d-none d-sm-block'>
                        <ContentCard {...projectsCardProps} />
                    </Row>
                    {/*<Row>*/}
                    {/*    <a name='work' />*/}
                    {/*    <ContentCard {...workExperienceCardProps} />*/}
                    {/*</Row>*/}
                </Col>
                <Col>
                    <ContentCard {...locationCardProps} />

                    <a name='skills' />
                    <ContentCard {...skillsCardProps} />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
