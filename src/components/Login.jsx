import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setUser }) {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    if (response.ok) {
      const data = await response.json();
      setUser(data.name);
      navigate('/');
    } else {
      // console.log('not authed');
      setError('Something went wrong');
    }
  };
  return (
    <div className="col-md-4 ">
      <h1>Login Page</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input name="email" onChange={inputHandler} value={inputs.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
          <input name="password" onChange={inputHandler} value={inputs.password} type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">Авторизация</button>
        </div>
      </form>
    </div>
  );
}
