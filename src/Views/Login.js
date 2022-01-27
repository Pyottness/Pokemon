import '../App.css';
import * as React from 'react';
import { NavLink } from "react-router-dom";

export default function Login() {

  const emailRef = React.useRef()
  const passwordRef = React.useRef()

  const handleInput = () => {

  }

  return (
    <form>

      <div alt="Login Form">

      <label alt="Email">Email</label>
      <input alt="Email" type="email" ref={emailRef} onChange={handleInput()} placeholder="Enter Email"></input>

      <label alt="Password">Password</label>
      <input alt="Password" type="password" ref={passwordRef} onChange={handleInput()} placeholder="Enter Password"></input>

      </div>

      <div>
        <button type="submit">Submit</button>
      </div>

      <div alt="links">

      <NavLink to="/register" className="button buttonNav" style={({ isActive }) => {
        return {backgroundColor: isActive ? "cyan" : ""};}} alt="Register">Register</NavLink>
      <NavLink to="/" className="button buttonNav" style={({ isActive }) => {
        return {backgroundColor: isActive ? "cyan" : ""};}} alt="FirstGeneration">1</NavLink>

      </div>

    </form>
  );
}
