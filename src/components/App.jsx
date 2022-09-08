import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartPage from './StartPage';
import Signin from './Signin';
import Login from './Login';

export default function App() {
  return (
    <>
      <StartPage />
      <Routes>
        <Route path="/registration" element={<Signin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
