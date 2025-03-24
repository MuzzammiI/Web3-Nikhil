import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User registered:", user);
    navigate("/login"); // Redirect to Login after registration
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-100">
        <h2 className="text-2xl font-bold text-yellow-400 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-2 my-2 bg-gray-800 text-white rounded"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 my-2 bg-gray-800 text-white rounded"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 my-2 bg-gray-800 text-white rounded"
            onChange={handleChange}
            required
          />
          <button type="submit" className="w-full bg-yellow-500 text-black p-2 rounded mt-4 hover:bg-yellow-400">
            Register
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-yellow-400">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
