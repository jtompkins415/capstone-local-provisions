import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {useState, useEffect} from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import { decodeToken } from 'react-jwt';
import LocalProvisionsUserAPI from './api/baseurl/api';
import UserContext from './UserContext';

import Home from './Home';
import NavBar from './NavBar';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import Main from './Main';
import Region from './region/Region';
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
    <div className="App">
      <header className="App-header">
        <NavBar logout={logout}/>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUpForm signup={signup}/>} />
          <Route path='/main' element={<Main />} />
          <Route path='/login' element={<LoginForm login={login}/>} />
          <Route path='/sf-bayarea' element={<Region regName='san francisco'/>} />
          <Route path='/los-angeles' element={<Region regName='los angeles'/>} />
          <Route path='/new-york' element={<Region regName='new york'/>} />
          <Route path='/chicago' element={<Region regName='chicago'/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
