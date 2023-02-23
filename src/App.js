import {BrowserRouter} from 'react-router-dom';
import {useState, useEffect} from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import { decodeToken } from 'react-jwt';
import LocalProvisionsUserAPI from './api/baseurl/api';
import UserContext from './UserContext';
import NavBar from './NavBar';
import Routing from './routing-nav/Routing';
import './App.css';


/**  A key to store token in local storage */
export const TOKEN_STORAGE_ID = 'local-provisions-token';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID)
  const [infoLoaded, setInfoLoaded] = useState(false);


   useEffect(function getUserInfo(){
    
    const getCurrUser = async () => {
      if (token){
        try{
          let {username} = decodeToken(token);
          LocalProvisionsUserAPI.token = token;
          let currUser = await LocalProvisionsUserAPI.getCurrUser(username);
          setCurrentUser(currUser);
        }catch(err){
          console.err("App getUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getCurrUser()
  }, [token]);

  /** Handles site-wide logout  */

   const logout = () => {
    setCurrentUser(null);
    setToken(null);
   }

  /** Handle site-wide login */

  const login = async (data) => {
    try{
      let res = await LocalProvisionsUserAPI.userLogin(data);
      setToken(res);
      return {success: true};
    }catch(err){
      console.error('Login Failed', err);
      return {success: false, err}
    }
  }

  /** Handle site-wide sign up 
   * Sets Token upon sign up
  */

  const signup = async (data) => {
    try{
      let res = await LocalProvisionsUserAPI.userSignup(data)
      setToken(res);
      return {success: true};
    }catch(err){
      console.error('Signup Failed', err);
      return {success: false, err};
    }
  }
  
  

  return (

        <UserContext.Provider value={{currentUser, setCurrentUser,}}>
          <div className='App'>
            <header className='App-header'>
              <BrowserRouter>
                <NavBar logout={logout} />
              </BrowserRouter>
            </header>
            <Routing login={login} signup={signup} />
          </div>
        </UserContext.Provider>

  );
}

export default App;
 