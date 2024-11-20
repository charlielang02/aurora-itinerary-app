import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginDropdown.css';

const LoginDropdown = ({ setLoggedIn, setIsOrganizer }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const users = [
    { email: "tourist@travel.com", password: "vacation", role: "user" },
    { email: "organizer@event.com", password: "events", role: "organizer" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setLoggedIn(true);
      setIsOrganizer(user.role === "organizer");
    } else {
      alert("Invalid email or password");
    }
  };

  const handleRegister = () => {
    setLoggedIn(true);
    setIsOrganizer(false);
  };

  return (
    <div className="login-dropdown">
      <form className="login-form" onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
        <p className="register-prompt">
            Don't have an account?
        </p>
        <div>
            <Link to="/" onClick={handleRegister} className="register-link">
                Register Here
            </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginDropdown;
