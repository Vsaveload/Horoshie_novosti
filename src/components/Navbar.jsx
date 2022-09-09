import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  const logoutHandler = async () => {
    const response = await fetch('/api/v1/auth/logout');
    if (response.ok) {
      setUser(null);
      navigate('/');
    }
  };
  return (
    <div>
      {!user
        ? '' : (
          <nav className="navbarfixed-top">
            <div className="container-fluid">
              <NavLink to="/news" className="navbar-brand">Хорошие новости</NavLink>
              <NavLink to="/personalaccount" className="nav-link middle">Личный кабинет</NavLink>
              <NavLink to="" onClick={logoutHandler} className="nav-link" href="">Выход</NavLink>
            </div>
          </nav>
        )}
    </div>
  );
}
