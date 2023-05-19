import {Card} from 'react-bootstrap';

import "./ContentCard.scss";

const ContentCard = ({title, body, image}) => {
    return (
        <Card
            className="mb-4"
        >
            <Card.Body>
                {title &&<Card.Title>
                    <h5 className="header">{title}</h5>
                </Card.Title>}
                <Card.Text className="body css-fix" as={'div'}>
                    {image &&<span className={'project-image'}>{image}</span>}
                    {body}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ContentCard;
