import background from '../Assets/Images/PokemonBackground.png';
import '../App.css';
import * as React from 'react';
import { NavLink } from "react-router-dom";

export default function About() {

  var divStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
  }

  return (
    <div className="App" style={ divStyle }>

    <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
    <div className="pokedexForm" alt="About">

      <p style={{color: 'white'}}>
      This website has been developed by <span alt="Developer" style={{color: 'yellow'}}>M. J. Pyott</span> with the intention of practising Nodejs and Reactjs.
      </p>
      <p style={{color: 'white'}}>
      Pokemon images and names have all been obtained from PokeAPI.
      </p>
      <p style={{color: 'white'}}>
      Nintendo and The Pokemon Company hold all rights relating to the Pokemon images and names.
      </p>

      <div alt="links">

      <NavLink to="/register" className="button" style={({ isActive }) => {
        return {backgroundColor: isActive ? "cyan" : ""};}} alt="Register">Register</NavLink>
      <NavLink to="/" className="button" style={({ isActive }) => {
        return {backgroundColor: isActive ? "cyan" : ""};}} alt="FirstGeneration">Home</NavLink>

      </div>

    </div>
    </div>

    </div>
  );
}
