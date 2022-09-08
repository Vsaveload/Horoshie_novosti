import React from 'react';
import { NavLink } from 'react-router-dom';

export default function StartPage() {
  return (
    <div className="StartPage">
      <NavLink className="StartPagelink" to="/registration">Регистрация</NavLink>
      <NavLink className="StartPagelink" to="/login">Авторизация</NavLink>
    </div>
  );
}
