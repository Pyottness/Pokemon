import background from '../Assets/Images/PokemonBackground.png';
import '../App.css';
import * as React from 'react';
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [emailError, setEmailerror] = React.useState('')
  const [passwordError, setPassworderror] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    //handle login submission

    fetch("/.netlify/functions/app/auth/login", {
      method: 'POST',
      body: JSON.stringify({"email": email,
                            "password": password}),
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'welovePoke'
      }
    })
    .then(res => res.json())
    .then(
      (result) => {
        if(result.message === 'Connected'){

          window.localStorage.setItem('token', JSON.stringify(result.token))
          window.localStorage.setItem('username', JSON.stringify(result.username))
          window.localStorage.setItem('character', JSON.stringify(result.character))

          navigate(`/profile/${ result.username }`);
        } else if(result.message === 'User not found!') {
          setEmailerror(result.message)
        } else {
          setPassworderror(result.message)
        }
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
    <form onSubmit={handleSubmit} className="pokedexForm">

      <div alt="Login Form">

      <label alt="Email">Email</label>
      <input alt="Email" type="email" value={email} autoComplete="on" onChange={event => setEmail(event.target.value)} placeholder="Enter Email" />
      <div style={{color: "red", width: "90%", height: "25px"}}>{emailError}</div>

      <label alt="Password">Password</label>
      <input alt="Password" type="password" value={password} autoComplete="on" onChange={event => setPassword(event.target.value)} placeholder="Enter Password" />
      <div style={{color: "red", width: "90%", height: "25px"}}>{passwordError}</div>

      </div>

      <div>
        <button type="submit" className="button" alt="log in" onClick={() => {setEmailerror(''); setPassworderror('')}}>Log in</button>
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
