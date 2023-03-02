import {  useContext } from "react";
import UserContext from "./UserContext";
import './Profile.css';



const Profile = () => {

    // const [favorites, setFavorites] = useState([]);
    const {currentUser} = useContext(UserContext);
    
    
    const {username, firstName, lastName, email} = currentUser;   
    
    return (
        <div className='Profile'>
            <header className='Profile-header'>
                <h1>Account Details</h1>
            </header>
            <div className='Profile-body'>
                <h3>{firstName} {lastName}</h3>
                <ul>
                    <li>
                        Username: {username}
                    </li>
                    <li>
                        email: {email}
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Profile;