import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";

import ContentCard from "./components/ContentCard/ContentCard";
import SideNavContentCard from "./components/SideNavContent/SideNavCard";
import Navbar from "./components/NavBar/NavBar";
import { Icon } from "./components/Icon/Icon";

import profilePic from "./assets/images/armando-home-office-sm.png";
import remoteiScreenshot from "./assets/images/REMOTEi-screenshot.png";
import esteeLauderCodeAssessmentScreenshot from "./assets/images/EsteeLauderAssessment-screenshot.png";
import moduleFederationExampleScreenshot from "./assets/images/moduleFederationExampleScreenshot.png";
import amazonCardShufflerScreenshot from "./assets/images/52-card-pickup.png";

import './App.scss';

const NAV_CONTENT = [
  {
    title: 'About',
    icon: 'Person',
    link: '#about'
  },
  {
    title: 'Works',
    icon: 'FileEarmarkText',
    link: '#works'
  }
];

const aboutMeCardProps = {
  title: 'About Me',
  body: `I’m a Software Engineer, with over 20 years of experience. I'm currently focused on serverless and data centric development. I am strong and familiar with backend and front end development and am ready to share more in detail.

I’ve had the opportunity to work on teams as a Senior engineer and as a Technical Lead. I enjoy both roles and can lead as well as follow. I’m a fan of collaboration and find that team members find me very approachable when it comes to asking for help or sharing details.

I’m looking forward to answering any questions you might have regarding the depth of my experience around React, Typescript, backend, frontend, CI/CD, event driven architecture, code practices and what approaches I use when contributing to develop world class solutions.

  `
}

function App() {
  const [currentUrl, setCurrentUrl] = useState(window.location.hash);

  const handleUrlChange = () => {
    setCurrentUrl(window.location.hash);
  };

  useEffect(() => {
    window.addEventListener('popstate', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  useEffect(() => {
    console.log({currentUrl});
    if(currentUrl === '') setCurrentUrl("#works")
  }, [currentUrl]);

    // Should provide multiple projects (multiple list items)
    const ProjectRemoteDetails = () => {
        return <ul>
          <li className="list-inline-item mb-3" style={{display: 'flex'}}>
            <Image src={moduleFederationExampleScreenshot} rounded fluid className="project-image" />
            <div>
              <h3 className={'title'}>MFE Module Federation example (Using Lerna and Webpack)</h3>
              <p>I'm evaluating various implementations for MFE architectures in the hopes of better understanding benefits of multiple modules and reuse.</p>
              <p>Micro frontend anarchy refers to an MFE setup that mixes a range of competing technologies together. Understanding the drivers when designing a projects structure.</p>
              <p><a href={'https://github.com/amusto/lerna-mfe-example'} target={'_blank'} rel="noreferrer">Code</a> | <a href={'http://demo.musto.io/'} target={'_blank'} rel="noreferrer">Demo</a></p>
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
        title: 'Works',
        body: <ProjectRemoteDetails />
    }

  const SideNavigationContent = () => NAV_CONTENT.map(navItem => <a href={`${navItem?.link}`} className={currentUrl === navItem.link ? 'side-nav-item btn btn-primary active' : 'side-nav-item btn btn-primary'} key={navItem?.title}>
            <Icon
              iconName={navItem?.icon}
              color="white"
              size={35}
              className="align-top"
            />
            <span>{navItem?.title}</span>
          </a>
        );

  const sideNavigationProps = {
    title: '',
    body: <SideNavigationContent />
  }

    const navProps = {
        sticky: 'top',
        title: 'Armando Musto - Software Engineer',
        links: NAV_CONTENT
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
              <div className={'main-column container-item'}>
                {currentUrl === "#about" &&<ContentCard {...aboutMeCardProps} />}
                {currentUrl === "#works" &&<ContentCard {...projectsCardProps} />}
              </div>
              <div className={'sidenav-column'}>
                <SideNavContentCard {...sideNavigationProps} />
              </div>
            </Col>
          </Row>
        </Container>
    );
}

export default App;
