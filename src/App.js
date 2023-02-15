import {Routes, Route, BrowserRouter, useParams} from 'react-router-dom';
import {useState} from 'react';
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import Main from './Main';
import Region from './Region';

function App() {

  

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUpForm />} />
          <Route path='/main' element={<Main />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/sf-bayarea' element={<Region regName='sf / bay area'/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
