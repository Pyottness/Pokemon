import background from '../Assets/Images/PokemonBackground.png';
import '../App.css';
import * as React from 'react';
import { NavLink, useNavigate } from "react-router-dom";

export default function Register() {

  //Language settings

  const [language] = React.useState(
    () => JSON.parse(window.localStorage.getItem('language')) ?? "English"
  )

  React.useEffect(() => {
    window.localStorage.setItem('language', JSON.stringify(language))
  }, [language])

  const [username, setUsername] = React.useState('')
  const [character, setCharacter] = React.useState('👨')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [rePassword, setRepassword] = React.useState('')
  const [emailError, setEmailerror] = React.useState('')
  const [usernameError, setUsernameerror] = React.useState('')

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault()

    //handle form submission

    fetch("/.netlify/functions/app/auth/register", {
      method: 'POST',
      body: JSON.stringify({"email": email,
                            "password": password,
                            "username": username,
                            "character": character,
                            "boulder": false,
                            "cascade": false,
                            "thunder": false,
                            "rainbow": false,
                            "soul": false,
                            "marsh": false,
                            "volcano": false,
                            "earth": false,
                            "zephyr": false,
                            "hive": false,
                            "plain": false,
                            "fog": false,
                            "storm": false,
                            "mineral": false,
                            "glacier": false,
                            "rising": false,
                            "stone": false,
                            "knuckle": false,
                            "dynamo": false,
                            "heat": false,
                            "balance": false,
                            "feather": false,
                            "mind": false,
                            "rain": false,
                            "coal": false,
                            "forest": false,
                            "cobble": false,
                            "fen": false,
                            "relic": false,
                            "mine": false,
                            "icicle": false,
                            "beacon": false,
                            "trio": false,
                            "basic": false,
                            "insect": false,
                            "bolt": false,
                            "quake": false,
                            "jet": false,
                            "freeze": false,
                            "legend": false,
                            "toxic": false,
                            "wave": false,
                            "bug": false,
                            "cliff": false,
                            "rumble": false,
                            "plant": false,
                            "voltage": false,
                            "fairy": false,
                            "psychic": false,
                            "iceberg": false,
                            "boulder7": false,
                            "cascade7": false,
                            "thunder7": false,
                            "rainbow7": false,
                            "soul7": false,
                            "marsh7": false,
                            "volcano7": false,
                            "earth7": false,
                            "grass": false,
                            "water": false,
                            "fire": false,
                            "fighting": false,
                            "fairy2": false,
                            "rock": false,
                            "dark": false,
                            "dragon": false,
                            "ghost": false,
                            "ice": false}),
      headers: {
        'Content-Type': 'application/json',
        'authorization': process.env.REACT_APP_AUTH
      }
    })
    .then(res => res.json())
    .then(
      (result) => {
        if(result.message === 'User created successfully'){
          navigate('/login');
        } else if(result.error.message.match('expected `username` to be unique.') && result.error.message.match('expected `email` to be unique.')){
          setUsernameerror('*User already created.')
          setEmailerror('*User already created.')
        } else if(result.error.message.match('expected `username` to be unique.')){
          setUsernameerror('*Username already taken')
        } else if(result.error.message.match('expected `email` to be unique.')){
          setEmailerror('*Email already in use.')
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
    <form onSubmit={handleSubmit} style={{height: "90%"}} className="pokedexForm">

      <div alt="Registration Form">

      <label alt="Username">{language === "English" ? "Username" : "Usuario"}</label>
      <input alt="Username" type="text" onChange={event => setUsername(event.target.value.toLowerCase())} placeholder={language === "English" ? "Enter Username" : "Introduzca Usuario"}></input>
      <div style={{color: "red", width: "90%", height: "25px"}}>{usernameError}</div>

      <label alt="Character">{language === "English" ? "Character" : "Personaje"}</label>
      <select alt="Character" onChange={event => setCharacter(event.target.value)}>
      <option value="👨">👨 {language === "English" ? "Man" : "Hombre"}</option>
      <option value="👩">👩 {language === "English" ? "Woman" : "Mujer"}</option>
      <option value="👦">👦 {language === "English" ? "Boy" : "Niño"}</option>
      <option value="👧">👧 {language === "English" ? "Girl" : "Niña"}</option>
      <option value="👨‍🔬">👨‍🔬 {language === "English" ? "Scientist (m)" : "Científico"}</option>
      <option value="👩‍🔬‍‍">👩‍🔬‍ {language === "English" ? "Scientist (f)" : "Científica"}</option>
      <option value="👨‍🍳‍‍">👨‍🍳 {language === "English" ? "Chef (m)" : "Cocinero"}</option>
      <option value="👩‍🍳‍‍">👩‍🍳‍ {language === "English" ? "Chef (f)" : "Cocinera"}</option>
      <option value="👨‍🎓‍‍">👨‍🎓 {language === "English" ? "Student (m)" : "Alumno"}</option>
      <option value="👩‍🎓">👩‍🎓‍ {language === "English" ? "Student (f)" : "Alumna"}</option>
      </select>

      <label alt="Email">Email</label>
      <input alt="Email" type="email" onChange={event => setEmail(event.target.value)} placeholder={language === "English" ? "Enter Email" : "Introduzca Email"}></input>
      <div style={{color: "red", width: "90%", height: "25px"}}>{emailError}</div>

      <label alt="Password">{language === "English" ? "Password" : "Contraseña"}</label>
      <input alt="Password" type="password" style={password === rePassword && password.length !== 0  ? {backgroundColor: "green"} : password.length === 0 ? {backgroundColor: "black"} : {backgroundColor: "red"}} onChange={event => setPassword(event.target.value)} placeholder={language === "English" ? "Enter Password" : "Introduzca Contraseña"}></input>

      <label alt="Repeat Password">{language === "English" ? "Repeat Password" : "Repetir Contraseña"}</label>
      <input alt="Repeat Password" type="password" style={password === rePassword && password.length !== 0  ? {backgroundColor: "green"} : rePassword.length === 0 ? {backgroundColor: "black"} : {backgroundColor: "red"}} onChange={event => setRepassword(event.target.value)} placeholder={language === "English" ? "Retype Password" : "Repita Contraseña"}></input>

      </div>

      <div>
        <button className="button" alt="register" type="submit" disabled={password === rePassword && password.length !== 0 && username.length !== 0 && email.length !== 0 ? false : true} onClick={() => {setEmailerror(''); setUsernameerror('');}}>{language === "English" ? "Register" : "Registrarse"}</button>
      </div>

      <p style={{color: "white"}}>{language === "English" ? "Already a user?" : "Ya eres usuario?"}</p>

      <div alt="links">

      <NavLink to="/login" className="button" style={({ isActive }) => {
        return {backgroundColor: isActive ? "cyan" : ""};}} alt="Login">{language === "English" ? "Login" : "Conectarse"}</NavLink>
      <NavLink to="/" className="button" style={({ isActive }) => {
        return {backgroundColor: isActive ? "cyan" : ""};}} alt="FirstGeneration">Home</NavLink>

      </div>

    </form>
    </div>
    </div>
  );
}
