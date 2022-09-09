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
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/news">Хорошие новости</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <NavLink className="nav-link active" aria-current="page" to="/personalaccount">Личный кабинет</NavLink>
                  <NavLink className="nav-link active" to="" onClick={logoutHandler}>Выход</NavLink>
                </div>
              </div>
            </div>
          </nav>
        )}
    </div>
  );
}
