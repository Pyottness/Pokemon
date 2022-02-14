import background from '../Assets/Images/PokemonBackground.png';
import '../App.css';
import * as React from 'react';
import { NavLink } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    //handle login submission

    fetch("/.netlify/functions/app/auth/register", {
      method: 'POST',
      body: JSON.stringify({"email": email,
                            "password": password}),
      headers: {
        'Content-Type': 'applications/json'
      }
    })
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
      }
    )
    .catch(error => {
      console.error(error);
    });
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
    <form action="/.netlify/functions/app/auth/login" method="post" onSubmit={handleSubmit} className="pokedexForm">

      <div alt="Login Form">

      <label alt="Email">Email</label>
      <input alt="Email" type="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="Enter Email" />

      <label alt="Password">Password</label>
      <input alt="Password" type="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Enter Password" />

      </div>

      <div>
        <button type="submit" className="button" alt="log in">Log in</button>
      </div>

      <p style={{color: 'white'}}>Don't have an account?</p>

      <div alt="links">

      <NavLink to="/register" className="button" style={({ isActive }) => {
        return {backgroundColor: isActive ? "cyan" : ""};}} alt="Register">Register</NavLink>
      <NavLink to="/" className="button" style={({ isActive }) => {
        return {backgroundColor: isActive ? "cyan" : ""};}} alt="FirstGeneration">Home</NavLink>

      </div>

      <div>
      <p style={{color: 'white'}}>Forgot your password?</p>
      </div>

    </form>
    </div>
    </div>
  );
}
