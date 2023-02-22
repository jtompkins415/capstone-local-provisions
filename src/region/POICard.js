import {useEffect} from 'react';
import API_KEY from '../api/baseurl/APIKey';
import {BASE_URL_PHOTO} from '../BaseUrl';
import axios from 'axios';
import dollarSignImage from '../dollar-sign.svg';
import {
    Card,
    CardTitle,
    CardBody,
    CardText,
    Button
} from 'reactstrap';
import './POICard.css'

const POICard = ({name, rating, price_level, img}) => {

    // useEffect(() => {
    //     async function getImg(){
    //         let results = await axios.get(`${BASE_URL_PHOTO}?maxwidth=400&photo_reference=${img}
    //         &key=${API_KEY}`)
            
    //         console.log(results);
    //     }
        
    //     getImg();
    // })

    let dollarSigns = '$'.repeat(price_level);
    
    return (
   
        <Card className='poiCard'>
            <CardBody>
                <CardTitle className='poiCard-title'>
                    {name}
                </CardTitle>
                <CardText>
                    Rating: {rating}
                    <br/>
                    Price: {dollarSigns}
                </CardText>
                <Button className='poiCard-button'>
                  Add to Favorites!
                </Button>
            </CardBody>
        </Card>
   
    )
};

export default POICard;