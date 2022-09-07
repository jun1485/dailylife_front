import './index.css';
import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login/index';
import Main from './components/main/Main';
import MyInfo from './components/myInfo/MyInfo';
import Navbar from './components/navbar';
import SignUp from './components/signUp/SignUp';
import SearchForm from 'components/navbar/searching/searchForm/searchForm';
import Searching from 'components/navbar/searching/Searching';

function App() {

  useEffect(() => {
    console.log('rendered App');
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/search" element={<SearchForm />} />
        <Route path="/myInfo" element={<MyInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
