import img from './NYstorefronts.jpeg'
import './About.css';


const About = () => {
    return (
        <div className='About'>
            <header className='About-title'>
               <h1> WHO ARE WE? </h1> 
            </header>
            <div className='About-img'>
                <img src={img} alt='store fronts'/>
            </div>
           <div className="About-body">
                <p> Here at Local Provisions, we look to connect users with their local food scene. Whether your looking for a fantastic spot to catch dinner, the local watering hole, or a great shop to grab a few items, Local Provisions is the place to find your new favorite spot and more importantly... <br/><br/><b> Eat. Drink. Explore.</b> </p>
            </div>
            
        </div>
    )
};

export default About;

