import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "../Main";
import SignUpForm from "../SignUpForm";
import LoginForm from "../LoginForm";
import Region from "../region/Region";
import About from "../About";
import Profile from "../Profile";


const Routing =  ({login, signup}) =>{
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to='/main' />} />
                <Route path='/signup' element={<SignUpForm signup={signup}/>} />
                <Route path='/main' element={<Main />} />
                <Route path='/login' element={<LoginForm login={login}/>} /> 
                <Route path='/sf-bayarea' element={<Region regName='san francisco'/>} />
                <Route path='/los-angeles' element={<Region regName='los angeles'/>} />
                <Route path='/new-york' element={<Region regName='new york'/>} />
                <Route path='/chicago' element={<Region regName='chicago'/>} />
                <Route path='/about' element={<About />} /> 
                <Route exact path='/details/:username' element={<Profile />} /> 
            </Routes>
        </BrowserRouter>
        </>
    )
};

export default Routing; 