import '../App.css';
import * as React from 'react';
import { NavLink } from "react-router-dom";

export default function Register() {

  const handleInput = () => {

  }

  return (
    <div>

      <div alt="Registration Form">

      <label alt="Username">Username</label>
      <input alt="Username" type="text" onChange={handleInput()} placeholder="Enter Username"></input>

      <label alt="Email">Email</label>
      <input alt="Email" type="email" onChange={handleInput()} placeholder="Enter Email"></input>

      <label alt="Password">Password</label>
      <input alt="Password" type="password" onChange={handleInput()} placeholder="Enter Password"></input>

      <label alt="Repeat Password">Repeat Password</label>
      <input alt="Repeat Password" type="password" onChange={handleInput()} placeholder="Retype Password"></input>

      </div>

      <div>
        <button type="submit">Submit</button>
      </div>

      <div alt="links">

      <NavLink to="/login" className="button buttonNav" style={({ isActive }) => {
        return {backgroundColor: isActive ? "cyan" : ""};}} alt="Login">Login</NavLink>
      <NavLink to="/" className="button buttonNav" style={({ isActive }) => {
        return {backgroundColor: isActive ? "cyan" : ""};}} alt="FirstGeneration">1</NavLink>

      </div>

    </div>
  );
}
