import React, { useState } from "react";
import { loginUser as loginUserApi } from "../api/api";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const loginUser = async () => {
    try {
      const response = await loginUserApi({
        username: formData.username,
        password: formData.password,
      });

      // Process the API response
      setSuccess(true);
      setError(null);
      console.log("API Response:", response.data);
    } catch (error) {
      // Handle API error
      setSuccess(false);
      setError("Login failed");
      console.error("API Error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <div className="container">
      <h2 className="text-center">Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">Login successful!</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn block">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
