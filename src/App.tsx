import './index.css';
import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './components/login/Login';
import Main from './components/main/Main';
import MyInfo from './components/myInfo/MyInfo';
import Navbar from './components/navbar/Navbar';
import RecentlyViewed from './components/recentlyViewed/recentlyViewed';
import Searching from './components/search/Searching';
import SignUp from './components/signUp/SignUp';
import UserPost from './components/UserPost/UserPost';
import React from 'react';

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
        <Route path="/post" element={<UserPost />} />
        <Route path="/myInfo" element={<MyInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
