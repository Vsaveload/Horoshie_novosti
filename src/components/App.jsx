import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Regin from './Regin';
import StartPage from './StartPage';
import NewsPage from './NewsPage';
import Navbar from './Navbar';

export default function App({ userEmail }) {
  const [user, setUser] = useState(userEmail || null);
  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/registration" element={<Regin setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/news" element={<NewsPage setUser={setUser} />} />
      </Routes>
    </>
  );
}
