import {
    Card,
    CardTitle,
    CardBody,
    CardText,
    Button
} from 'reactstrap';

const POICard = ({name, rating, price_level}) => {
    
    return (
        <Card style={{
            width: '10px'
        }} >
            <CardBody>
                <CardTitle>
                    {name}
                </CardTitle>
                <CardText>
                    Rating: {rating}
                    Website: {price_level}
                </CardText>
                <Button>
                  Add to Favorites!
                </Button>
            </CardBody>
        </Card>

    )
};

export default POICard;