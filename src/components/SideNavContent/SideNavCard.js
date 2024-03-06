import {Card} from 'react-bootstrap';

import "./SideNavCard.scss";

const SideNavCard = ({title, body, image}) => {
    return (
        <Card
            className="mb-4"
        >
            <Card.Body>
                {title &&<Card.Title>
                    <h5 className="header">{title}</h5>
                </Card.Title>}
                <Card.Text className="body" as={'div'}>
                    {image &&<span className={'project-image'}>{image}</span>}
                    {body}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default SideNavCard;
