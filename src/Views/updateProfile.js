import background from '../Assets/Images/PokemonBackground.png';
import '../App.css';
import * as React from 'react';
import { NavLink, useParams } from "react-router-dom";

export default function Profile() {

  const { username } = useParams();
  const token = window.localStorage.getItem('token');
  const character = '🙋‍♀️‍';
  const badges = 0;

  var divStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
  }

  return (
    <div className="App" style={ divStyle }>

    <div className="pokedexForm" alt="profile" style={{height: "500px"}}>

      <div className="userInfo" alt="user information">

      <h1 style={{color: "white", textAlign: "center"}}>{ username }</h1>
      <p style={{textAlign: "center"}}>{ character }</p>
      <p style={{color: "white", textAlign: "center"}}>Badges</p>
      <p style={{color: "white"}}>Generation I: { badges }</p>
      <p style={{color: "white"}}>Generation II: { badges }</p>
      <p style={{color: "white"}}>Generation III: { badges }</p>
      <p style={{color: "white"}}>Generation IV: { badges }</p>
      <p style={{color: "white"}}>Generation V: { badges }</p>
      <p style={{color: "white"}}>Generation VI: { badges }</p>
      <p style={{color: "white"}}>Generation VII: { badges }</p>

      </div>

      <div alt="links">

      <NavLink to="/" className="button" style={({ isActive }) => {
        return {backgroundColor: isActive ? "cyan" : ""};}} alt="FirstGeneration">Home</NavLink>
      <NavLink to="/" className="button" style={({ isActive }) => {
        return {backgroundColor: isActive ? "cyan" : ""};}} onClick={() => {window.localStorage.removeItem('token')}} alt="log out">Log out</NavLink>

      </div>

    </div>

    </div>
  );
}
