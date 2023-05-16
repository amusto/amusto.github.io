import { Button, Card } from 'react-bootstrap';

const CardComponent = ({ title = 'Profile', image, description = 'Blah blah blah'}) => {

    return (
        <Card>
            {/*<a href="https://www.linkedin.com/in/armandomusto"><img src="https://www.gravatar.com/avatar/b7cf4d5a166284d7f2cb1b71c3e1ccdb"></a>*/}
            {/*<a href="https://www.linkedin.com/in/armandomusto"><img src="assets/linkedin.png"></a>*/}
            {image &&<Card.Img variant="top" src={image} />}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>
    );
}

export default CardComponent;
