import { Container, Nav, Navbar } from 'react-bootstrap';
import { Icon } from "../Icon/Icon";

const NavBar = (props) => <Navbar bg="light" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand href="#home" style={{fontSize: '14px'}}>{props?.title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      {props?.links.map((item) => <Nav.Link key={item.title} href={item.link}>
                        <Icon
                          iconName={item.icon}
                          color="black"
                          size={25}
                          className="align-top icon-spacing mr-1"
                        />
                        <span>{item.title}</span>
                      </Nav.Link>)}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>;

export default NavBar;
