import {Card} from 'react-bootstrap';

import "./ContentCard.scss";

const ContentCard = ({title, body}) => {
    return (
        <Card
            className="mb-2"
        >
            <Card.Body>
                {title &&<Card.Title>
                    <h5 className="header">{title}</h5>
                </Card.Title>}
                <Card.Text className="body" as={'div'}>
                    {body}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ContentCard;
