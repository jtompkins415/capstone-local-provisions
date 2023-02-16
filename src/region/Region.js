import {useState, useEffect} from 'react';
import axios from 'axios';
import { Spinner, CardGroup } from 'reactstrap';

import POICard from './POICard'
import regionMap from './regionMap';
import API_KEY from '../api/baseurl/APIKey';
import BASE_URL from '../BaseUrl';

import './Region.css';

const Region = ({regName}) => {
    
    const [isLoaded, setIsLoaded] = useState(false);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null); 
    const [pois, setPois] = useState([]);
    
    /** Access Google Geocoding API
     *  get latitude and longitude from region name 
     * set latitude & lng state w/ API data
     * 
     * */

    useEffect(() => {
        async function getLatLng(){
            let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${regName}&key=${API_KEY}`)
                
            const {lat, lng} = res.data.results[0].geometry.location;
            setLatitude(lat);
            setLongitude(lng);
            setIsLoaded(true);
        }
        getLatLng();
    })

    /** Access Google Places API
     * use latitude and longitude state 
     * Return nearby places of interest
     */
    useEffect(() => {
        async function getPOIs(){
            let res = await axios.get(`${BASE_URL}location?lat=${latitude}&lng=${longitude}&radius=1500&type=restaurant&rankby=prominence&key=${API_KEY}`)
            
            setPois(res.data.results) 
        }
        getPOIs();
    },[])

    
    if (!isLoaded) return <Spinner color='warning'  style={{
        height: '3rem',
        width: '3rem',
        margin: '5rem'
      }} />
        
    let poiElm = pois.map(p => {
        return <POICard key={p.name} name={p.name} rating={p.rating} price_level={p.price_level} />
    })
    
    let imageUrl = regionMap[regName]

    

    if(imageUrl){
        return (
        <div className='Region'>
            <div className="Region-img">
                <img src={imageUrl} alt="city scape" />  
            </div>
            <div className="Region-title">
                <h1>{regName.toUpperCase()}</h1>
            </div>
            <div className='Region-body'>
                <CardGroup>
                    {poiElm};
                </CardGroup>
            </div>
        </div>
    )
    } else {
        return (
            <div className='Region'>
                <div className="Region-title">
                    <h1>SORRY, REGION NOT FOUND...</h1>
                </div>
            </div>
        )
    }
    
};

export default Region;