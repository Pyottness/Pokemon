import background from '../Assets/Images/PokemonBackground.png';
import '../App.css';
import * as React from 'react';
import { NavLink } from "react-router-dom";

export default function Register() {

  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [rePassword, setRepassword] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(username)
    console.log(email)
    console.log(password)
    console.log(rePassword)
  }

  var divStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
  }

  return (
    <div className="App" style={ divStyle }>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center"}}>
    <form onSubmit={handleSubmit} style={{height: "420px"}} className="pokedexForm">

      <div alt="Registration Form">

      <label alt="Username">Username</label>
      <input alt="Username" type="text" onChange={event => setUsername(event.target.value)} placeholder="Enter Username"></input>

      <label alt="Email">Email</label>
      <input alt="Email" type="email" onChange={event => setEmail(event.target.value)} placeholder="Enter Email"></input>

      <label alt="Password">Password</label>
      <input alt="Password" type="password" style={password === rePassword && password.length !== 0  ? {backgroundColor: "green"} : password.length === 0 ? {backgroundColor: "black"} : {backgroundColor: "red"}} onChange={event => setPassword(event.target.value)} placeholder="Enter Password"></input>

      <label alt="Repeat Password">Repeat Password</label>
      <input alt="Repeat Password" type="password" style={password === rePassword && password.length !== 0  ? {backgroundColor: "green"} : rePassword.length === 0 ? {backgroundColor: "black"} : {backgroundColor: "red"}} onChange={event => setRepassword(event.target.value)} placeholder="Retype Password"></input>

      </div>

      <div>
        <button type="submit" disabled={password === rePassword && password.length !== 0 && username.length !== 0 && email.length !== 0 ? false : true} className="button" alt="register">Register</button>
      </div>

      <p style={{color: "white"}}>Already a user?</p>

      <div alt="links">

      <NavLink to="/login" className="button" style={({ isActive }) => {
        return {backgroundColor: isActive ? "cyan" : ""};}} alt="Login">Login</NavLink>
      <NavLink to="/" className="button" style={({ isActive }) => {
        return {backgroundColor: isActive ? "cyan" : ""};}} alt="FirstGeneration">Home</NavLink>

      </div>

    </form>
    </div>
    </div>
  );
}
