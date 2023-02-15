import {useState} from 'react';
import POICard from './POICard';
import img from './SFcityscape.jpeg'
import './Region.css';

const Region = ({regName}) => {
    
    
    
    
    
    return (
        <div className='Region'>
            <div className="Region-img">
                <img src={img} alt="city scape" />
            </div>
            <div className="Region-title">
                <h1>{regName.toUpperCase()}</h1>
            </div>
        </div>
    )
};

export default Region;