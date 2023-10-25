import axios from "axios";
import React from "react";
import { useState } from "react";
const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    alert("Sorry, your subcription plan is over. Subcribe again to continue...")
    const authObject = {
      "project-ID": "342f7cc9-96a9-4cdb-a337-c14ca07502c3",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
        setError('Oops! incorect credentials')
    }

  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            className="input"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="password"
            value={password}
            className="input"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chating</span>
            </button>
          </div>
          <h2 className='error'>{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
