import {useEffect, useState} from 'react';
import API_KEY from '../api/baseurl/APIKey';
import {BASE_URL_PHOTO} from '../BaseUrl';
import {BASE_URL_DETAILS} from '../BaseUrl'
import axios from 'axios';
import {
    Card,
    CardTitle,
    CardBody,
    CardText,
    Button
} from 'reactstrap';
import './POICard.css'
import { Link } from 'react-router-dom';

const POICard = ({name, rating, price_level, place_id}) => {
    
    const [photoUrl, setPhotoUrl] = useState(null)
    const [poiUrl, setPoiUrl] = useState(null)

    
    //Async function to get details about a place based on the place_id, then use the photo reference to get photo for the location

    useEffect(() => {
        async function getPlaceDetails(){
            const response = await axios.get(`${BASE_URL_DETAILS}?place_id=${place_id}&fields=photo,url&key=${API_KEY}`);
            const photoRef = response.data.result?.photos?.[0]?.photo_reference;
            const url = response.data.result?.url
            
            if(url){
                setPoiUrl(url);
            }

            if(photoRef){
                const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${API_KEY}`;
                setPhotoUrl(photoUrl);
            }

            
        }
        getPlaceDetails();
    }, [place_id])

    
    let dollarSigns = '$'.repeat(price_level);
    
    return (
   
        <Card className='poiCard'>
            {photoUrl && (
                <div className='poiCard-img-wrapper'>
                    <img className='poiCard-img' src={photoUrl} alt={name} />
                </div>
            )}
            <CardBody>
                <CardTitle className='poiCard-title'>
                    {name}
                </CardTitle>
                <CardText>
                   <b> Rating: {rating}</b>
                    <br/>
                    Price: {dollarSigns}
                    <br/>
                    <Link href={poiUrl}>Go To Website</Link>
                </CardText>
                <Button className='poiCard-button'>
                  Add to Favorites!
                </Button>
            </CardBody>
        </Card>
   
    )
};

export default POICard;