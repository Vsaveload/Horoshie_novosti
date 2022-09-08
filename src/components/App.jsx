import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Regin from './Regin';
import StartPage from './StartPage';
import NewsPage from './NewsPage';

export default function App(userLogin) {
  const [user, setUser] = useState(userLogin || null);
  return (

    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/registration" element={<Regin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/news" element={<NewsPage />} />
    </Routes>
  );
}
