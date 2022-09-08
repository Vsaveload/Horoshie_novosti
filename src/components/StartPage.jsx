import React from 'react';
import { NavLink } from 'react-router-dom';

export default function StartPage() {
  //   return (
  //     <div className="StartPage">
  //       <NavLink className="StartPagelink" to="/registration">Регистрация</NavLink>
  //       <NavLink className="StartPagelink" to="/login">Авторизация</NavLink>
  //     </div>
  //   );
  // }

  return (
    <>
      <div className="top"><h1>Хорошие новости</h1></div>
      <div className="wrapper">
        <div className="startPage-block">
          <p className="p1">Зарегистрируйтесь или войдите в свой аккаунт, пожалуйста!</p>
          <div className="authBtns">
            <NavLink className="btn" to="/registration">Регистрация</NavLink>
            <NavLink className="btn" to="/login">Авторизация</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
