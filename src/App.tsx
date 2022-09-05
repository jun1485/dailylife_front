import './index.css';
import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login/index';
import Main from './components/main/Main';
import MyInfo from './components/myInfo/MyInfo';
import Navbar from './components/navbar';
import RecentlyViewed from './components/recentlyViewed/recentlyViewed';
import SignUp from './components/signUp/SignUp';
import Searching from 'components/navbar/searching/Searching';
import writePage from 'components/navbar/navlink/writePage/writePage';

function App() {
  // const dispatch = useDispatch();
  // const store = useSelector((state) => state);
  // const cardData = useSelector((state) => state.post);

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
        <Route path="/recentlyViewed" element={<RecentlyViewed />} />
        <Route path="/search" element={<Searching />} />
        <Route path="/post" element={<writePage />} />
        <Route path="/myInfo" element={<MyInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
