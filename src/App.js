import { Container, Row, Col, Image } from "react-bootstrap";

import {
    Card,
    ContentCard
} from "./components";

import profilePic from "./assets/images/armando-home-office-sm.png";

import './App.scss';
import { Linkedin, Github, GeoAlt, Envelope } from 'react-bootstrap-icons';

function App() {

    const aboutMeCardProps = {
        title: 'About Me',
        body: 'Senior Software Engineer/Architect with experience spanning over 20 years.'
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

    return (
        <Container fluid className="App">
            <Row className="App-header">
                <Col>
                    <Image src={profilePic} rounded fluid className="header-profile-image" />
                    <div className="profile-content">
                        <h1 className={'name'}>Armando Musto</h1>
                        <h2 >Software Engineer / Solutions Architect</h2>
                        <ul className="social list-inline">
                            <li className="list-inline-item"><a href="https://www.linkedin.com/in/armandomusto/" target="_blank">
                                <Linkedin color="grey" size={50} />
                            </a></li>
                            <li className="list-inline-item"><a href="https://github.com/amusto" target="_blank">
                                <Github color="grey" size={50} />
                            </a></li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row className="main-container">
                <Col md={{ span: 8 }}>
                    <ContentCard {...aboutMeCardProps} />
                </Col>
                <Col>
                    <ContentCard {...locationCardProps} />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
