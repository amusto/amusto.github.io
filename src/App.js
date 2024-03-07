import { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";

// import SkillsProgressBar from "./components/SkillsProgressBar/SkillsProgressBar";
// import Navbar from "./components/NavBarMobile/NavBar";

import ContentCard from "./components/ContentCard/ContentCard";
import SideNavContentCard from "./components/SideNavContent/SideNavCard";
import SkillsProgressBar from "./components/SkillsProgressBar/SkillsProgressBar";
import Navbar from "./components/NavBar/NavBar";
import { Icon } from "./components/Icon/Icon";

import { getProjects } from "./services";

import SkillsData from "./content/mySkills.json";

import profilePic from "./assets/images/armando-home-office-sm.png";
import remoteiScreenshot from "./assets/images/REMOTEi-screenshot.png";
import esteeLauderCodeAssessmentScreenshot from "./assets/images/EsteeLauderAssessment-screenshot.png";
import moduleFederationExampleScreenshot from "./assets/images/moduleFederationExampleScreenshot.png";
import amazonCardShufflerScreenshot from "./assets/images/52-card-pickup.png";

import './App.scss';

import { Linkedin, Github, GeoAlt, Envelope } from 'react-bootstrap-icons';

const SIDE_NAV_CONTENT = [
  // {
  //   title: 'About',
  //   icon: 'Person'
  // },
  {
    title: 'Works',
    icon: 'FileEarmarkText'
  }
];

function App() {
    const aboutMeCardProps = {
        title: 'About Me',
        body: `I'm enjoying my current role at uExamS where as the Principal Engineer & Solutions Architect we provide virtual learning resources for people with special needs or disabilities.`
    }

    const LocationDetails = () => {
        return <ul>
                <li className="list-inline-item mb-3" style={{display: 'flex'}}>
                    <GeoAlt color="grey" size={20} /> <span className={'ms-3'}>Gaithersburg, MD</span>
                </li>
                <li className="list-inline-item" style={{display: 'flex'}}>
                    <Envelope color="grey" size={20} /> <span className={'ms-3'}><a href={'mailto:armando.musto@gmail.com'}>armando.musto@gmail.com</a></span>
                </li>
            </ul>
    }

    // Should provide multiple projects (multiple list items)
    const ProjectRemoteDetails = () => {
        return <ul>
          <li className="list-inline-item mb-3" style={{display: 'flex'}}>
            <Image src={moduleFederationExampleScreenshot} rounded fluid className="project-image" />
            <div>
              <h3 className={'title'}>MFE Module Federation example (Using Lerna and Webpack)</h3>
              <p>I'm evaluating various implementations for MFE architectures in the hopes of better understanding benefits of multiple modules and reuse.</p>
              <p>Micro frontend anarchy refers to an MFE setup that mixes a range of competing technologies together. Understanding the drivers when designing a projects structure.</p>
              <p><a href={'https://github.com/amusto/lerna-mfe-example'} target={'_blank'}>Code</a> | <a href={'http://demo.musto.io/'} target={'_blank'}>Demo</a></p>
            </div>
          </li>
          <li className="list-inline-item mb-3" style={{display: 'flex', borderTopStyle: 'solid', borderTopColor: 'black', paddingTop: '20px'}}>
            <Image src={esteeLauderCodeAssessmentScreenshot} rounded fluid className="project-image" />
            <div>
              <h3 className={'title'}>FullStack Development - TypeAhead (React/Node/SASS))</h3>
              <p>I was asked in a code assessment where I used React and SASS on the front end and Node/Express to mimic the Typeahead backend services</p>
              <p>It was a fun weekend project and turned out real well. (Demo site coming soon!)</p>
              <p><a href={'https://github.com/amusto/typeahead-search-code-assessment'}>Code Repo</a></p>
            </div>
          </li>
          <li className="list-inline-item mb-3" style={{display: 'flex', borderTopStyle: 'solid', borderTopColor: 'black', paddingTop: '20px'}}>
              <Image src={remoteiScreenshot} rounded fluid className="project-image" />
              <div>
                  <h3 className={'title'}>Electron (React, Typescript) - REMOTEi Desktop Application</h3>
                  <p>A Virtual Learning Desktop application supporting persons with special needs and disabilities.</p>
                  <p>The desktop application was build using the Electron library (https://www.electronjs.org/), Typescript and React.js</p>
              </div>
          </li>
          <li className="list-inline-item mb-3" style={{display: 'flex', borderTopStyle: 'solid', borderTopColor: 'black', paddingTop: '20px'}}>
              <Image src={amazonCardShufflerScreenshot} rounded fluid className="project-image" />
              <div>
                  <h3 className={'title'}>(React, Recursion, Javascript Classes) 52 Pickup Card Shuffler</h3>
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

  const SideNavigationContent = () => {
    return SIDE_NAV_CONTENT.map(navItem => {
          const props = { title: navItem?.title}
          return <div className={'side-nav-item'} key={navItem?.title}>
            <Icon
              iconName={navItem?.icon}
              color="white"
              size={35}
              className="align-top"
            />
            <span>{navItem?.title}</span>
          </div>
        })
  }

    const SkillsDetails = () => {
        // const skillsText = `Over 20+ years experience across a range of disciplines in the Information Technology industry. \n\nI’ve enjoyed working on Enterprise-level projects with small to large development teams. This includes 10+ years working with Cloud solutions, specifically in AWS.`
        return <div>
            {SkillsData
                // .sort((a,b) => b.percentage - a.percentage)
                .map(skill => {
                    const compProps = { title: skill?.title, percentage: skill?.percentage}
                    return <div className={'mt-4'} key={skill?.title}>
                        <SkillsProgressBar key={`skill-${skill?.title}`} {...compProps} />
                    </div>
            })}
        </div>
    }

    const skillsCardProps = {
        title: '',
        body: <SkillsDetails />
    }
  const sideNavigationProps = {
    title: '',
    body: <SideNavigationContent />
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
          <Row className={'header-row'}>
            <Col className={'header-title'}>
              amusto.github.io
            </Col>
          </Row>
          <Row>
            <Col className={'main-container'}>
              <div className={'profile-column'}>
                <Card
                  className="mb-4"
                >
                  <Card.Body>
                    <Card.Title>
                      <div className={'profile-content'}>
                        <div className={'personal-info-image'}>
                          <Image src={profilePic} rounded fluid className="header-profile-image" />
                        </div>
                        <h4 className={'name'}>Armando Musto</h4>
                        <span className={'title mb-15'}>
                        Software Engineer / Architect
                      </span>

                        <div className={'contact-details'}>
                          <div className={'email mb-15'}>
                            <Icon
                              iconName="Envelope"
                              color="black"
                              size={25}
                              className="align-top icon-spacing"
                            />
                            <span className={'email-string'}>armando.musto@gmail.com</span>
                          </div>

                          <div className={'location mb-15'}>
                            <Icon
                              iconName="GeoAlt"
                              color="black"
                              size={25}
                              className="align-top icon-spacing"
                            />
                            <span>Gaithersburg, MD</span>
                          </div>
                        </div>

                        <div id={'profile-content-footer'}>
                          <ul className="social list-inline">
                            <li className="list-inline-item"><a href="https://www.linkedin.com/in/armandomusto/" target="_blank" rel={'noreferrer'}>
                              <Icon
                                iconName="Linkedin"
                                color="#0A66C2"
                                size={35}
                                className="align-top"
                              />
                            </a></li>
                            <li className="list-inline-item"><a href="https://github.com/amusto" target="_blank" rel={'noreferrer'}>
                              <Icon
                                iconName="Github"
                                color="black"
                                size={35}
                                className="align-top"
                              />
                            </a></li>
                          </ul>
                        </div>
                      </div>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div className={'main-column'}>
                <ContentCard {...projectsCardProps} />
              </div>
              {/*<div className={'main-column container-item'}>*/}
              {/*  <ContentCard {...projectsCardProps} />*/}
              {/*</div>*/}
              <div className={'sidenav-column'}>
                <SideNavContentCard {...sideNavigationProps} />
              </div>
            </Col>
          </Row>
        </Container>
    );
}

export default App;
