import { Container, Row, Col } from "react-bootstrap";

import { Card } from "./components";
import profilePic from "./assets/images/professional-profile-pic.jpg";

import './App.scss';

function App() {

    const profileCardProps = {
        title: 'Armando Musto - Software Engineer / Solutions Architect',
        image: profilePic,
        description: 'Senior Software Engineer/Architect with experience spanning over 20 years.'
    }

    return (
        <Container fluid className="App">
            <Row>
                <Col md={3}>
                    <Card {...profileCardProps} />
                </Col>
                <Col md={9}></Col>
            </Row>
        </Container>
    );
}

export default App;
