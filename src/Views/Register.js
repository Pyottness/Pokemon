import background from '../Assets/Images/PokemonBackground.png';
import '../App.css';
import * as React from 'react';
import { NavLink, useNavigate } from "react-router-dom";

export default function Register() {

  const [username, setUsername] = React.useState('')
  const [character, setCharacter] = React.useState('👨')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [rePassword, setRepassword] = React.useState('')

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault()

    //handle form submission

    fetch("/.netlify/functions/app/auth/register", {
      method: 'POST',
      body: JSON.stringify({"email": email,
                            "password": password,
                            "username": username,
                            "character": character}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(
      (result) => {
        if(result.message === 'User created successfully'){
          navigate('/');
        } else if(result.error.message.match('expected `username` to be unique.') && result.error.message.match('expected `email` to be unique.')){
          alert('User already created.')
        } else if(result.error.message.match('expected `username` to be unique.')){
          alert('Username already taken')
        } else if(result.error.message.match('expected `email` to be unique.')){
          alert('Email already in use.')
        } else {
          alert(result.error.message);
        }
      }
    )
    .catch(error => {
      console.log(error);
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
    <form onSubmit={handleSubmit} style={{height: "480px"}} className="pokedexForm">

      <div alt="Registration Form">

      <label alt="Username">Username</label>
      <input alt="Username" type="text" onChange={event => setUsername(event.target.value)} placeholder="Enter Username"></input>

      <label alt="Character">Character</label>
      <select alt="Character" onChange={event => setCharacter(event.target.value)}>
      <option value="👨">👨 Man</option>
      <option value="👩">👩 Woman</option>
      <option value="👦">👦 Boy</option>
      <option value="👧">👧 Girl</option>
      <option value="👨‍🔬">👨‍🔬 Scientist (m)</option>
      <option value="👩‍🔬‍‍">👩‍🔬‍ Scientist (f)</option>
      <option value="👨‍🍳‍‍">👨‍🍳 Chef (m)</option>
      <option value="👩‍🍳‍‍">👩‍🍳‍ Chef (f)</option>
      <option value="👨‍🎓‍‍">👨‍🎓 Student (m)</option>
      <option value="👩‍🎓">👩‍🎓‍ Student (f)</option>
      </select>

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
