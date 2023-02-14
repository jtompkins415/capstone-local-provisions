import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {useState} from 'react';
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import SignUpForm from './SignUpForm';
import Main from './Main';

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
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
