import {useState} from 'react';
import NavBar from './NavBar';
import {
    Button
} from 'reactstrap';
import image from './SFcityscape.jpeg'
import './Main.css'

const Main = () => {
    return (
        <div className="Main">
            <div className='Main-title'>
                <h1>LOCAL PROVISIONS</h1>
            </div>
            <div className="Main-title-img">
                <img src={image} alt="city scape"/>
            </div>
            <div className="Main-body">
                <a className='Main-location-link' href='/sf-bayarea'>SF / BAY AREA</a>
                <a className='Main-location-link' href='/los-angeles'>LOS ANGELES</a>
                <a className='Main-location-link' href='/new-york'>NEW YORK</a>
                <a className='Main-location-link' href='/chicago'>CHICAGO</a>
            </div>
        </div>
    )
}
 
export default Main;