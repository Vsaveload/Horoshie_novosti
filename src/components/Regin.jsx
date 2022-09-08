import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Regin({ setUser }) {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/regin', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    if (response.ok) {
      const data = await response.json();
      setUser(data.name);
      setInputs({ name: '', email: '', password: '' });
      navigate('/');
    }
  };

  return (

    <div className="container ">
      <h1>Registration Page</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Name</label>
          <input name="name" onChange={inputHandler} value={inputs.name} type="name" className="form-control" id="exampleInputName" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input name="email" onChange={inputHandler} value={inputs.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
          <input name="password" onChange={inputHandler} value={inputs.password} type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">Зарегестрироваться</button>
        </div>
      </form>
    </div>

  );
}
