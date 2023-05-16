import { Container, Row, Col, Image } from "react-bootstrap";

import {
    Card,
    ContentCard
} from "./components";
import profilePic from "./assets/images/armando-home-office-sm.png";

import './App.scss';

function App() {

    const profileCardProps = {
        title: 'Armando Musto - Software Engineer / Solutions Architect',
        image: profilePic,
        description: 'Senior Software Engineer/Architect with experience spanning over 20 years.'
    }

    return (
        <Container fluid className="App">
            <Row className="App-header">
                <Col>
                    <Image src={profilePic} rounded fluid className="header-profile-image" />
                    <div className="profile-content">
                        <h1 className={'name'}>Armando Musto</h1>
                        <h2 >Software Engineer / Solutions Architect</h2>
                    </div>
                </Col>
            </Row>
            <Row className="main-container">
                <Col md={{ span: 8 }}>
                    <ContentCard />
                </Col>
                <Col>
                    <ContentCard />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
