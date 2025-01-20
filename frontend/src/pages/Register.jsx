import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../context/UserContext";
import { LoadingAnimation } from "../components/Loading";
import { PinData } from "../context/PinContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { registerUser, btnLoading } = UserData();
  const navigate = useNavigate();
  const { fetchPins } = PinData();

  const validatePassword = (password) => {
    let errors = [];
    if (password.length < 8) errors.push("Lenght of password must be 8 Character");
    if (!password.match(/[A-Z]/)) errors.push("an uppercase letter");
    if (!password.match(/[0-9]/)) errors.push("a number");
    if (!password.match(/[\^$*.\[\]{}()?\-"!@#%&/,><':;|_~`]/)) errors.push("a special character");
    return errors.length > 0 ? `Password must contain ${errors.join(", ")}.` : "";
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(validatePassword(newPassword));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!passwordError) {
      registerUser(name, email, password, navigate, fetchPins);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pinterest-logo.png/600px-Pinterest-logo.png"
            alt="Pinterest"
            className="h-12"
          />
        </div>
        <h2 className="text-2xl font-semibold text-center mb-6">
          Register to Pinterest
        </h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input type="text" id="name" className="common-input" value={name}
                   onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input type="email" id="email" className="common-input" value={email}
                   onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input type="password" id="password" className="common-input" value={password}
                   onChange={handlePasswordChange} required />
            {passwordError && <p className="text-red-500 text-xs italic">{passwordError}</p>}
          </div>
          <button type="submit" className="common-btn" disabled={btnLoading}>
            {btnLoading ? <LoadingAnimation /> : "Register"}
          </button>
        </form>
        <div className="mt-6 text-center">
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">OR</span>
            </div>
          </div>
          <div className="mt-4 text-center text-sm">
            <span>
              Already have an account?
              <Link to="/login" className="font-medium text-pinterest hover:underline px-2">
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
