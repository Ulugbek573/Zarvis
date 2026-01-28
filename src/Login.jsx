import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import hero from './hero.png'

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      alert("Username kiriting");
      return;
    }

    localStorage.setItem("username", username);
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={hero} alt="Login illustration" />
      </div>

      <div className="login-right">
        <h2 className="logo">ZARVIS</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
