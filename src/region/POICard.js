import {
    Card,
    CardTitle,
    CardBody,
    CardText,
    Button
} from 'reactstrap';

const POICard = ({name, rating, url}) => {
    
    return (
        <Card>
            <CardBody>
                <CardTitle>
                    {name}
                </CardTitle>
                <CardText>
                    Rating: {rating}
                    Website: {url}
                </CardText>
                <Button>
                  Add to Favorites!
                </Button>
            </CardBody>
        </Card>

    )
};

export default POICard;