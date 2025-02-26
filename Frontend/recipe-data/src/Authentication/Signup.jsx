import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/signup.css';

export const Signup = () => {
  const [Username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post('https://recepie-server.onrender.com/auth/register', {
        Username,
        email,
        password,
      });
      
      console.log('Signup successful:', response.data);
      
      if (response.data.message === 'User registered successfully') {
        alert('User registered successfully')
        setName('');
        setEmail('');
        setPassword('');
        navigate('/login');
      }
    } catch (error) {
      console.log('Something went wrong:', error);
      alert('Something went wrong')
    }
  }

  return (
    <div className="signup_container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="signup_form">
        <input
          type="text"
          value={Username}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Username"
          required
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          required
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          required
        />

        <button type="submit" className="signup_button">
          Submit
        </button>
      </form>
    </div>
  );
};
