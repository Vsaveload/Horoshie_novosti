import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Regin from './Regin';

export default function App(userLogin) {
  const [user, setUser] = useState(userLogin || null);
  return (
    <Routes>
      <Route path="/regin" element={<Regin setUser={setUser} />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
    </Routes>
  );
}
