import background from '../Assets/Images/PokemonBackground.png';
import '../App.css';
import * as React from 'react';
import { NavLink } from "react-router-dom";
import psyduck from "../../node_modules/pokemon-sprites/sprites/pokemon/other/official-artwork/54.png";

export default function Error() {

  var divStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
  }

  return (
    <div className="App" style={ divStyle }>

    <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
    <div className="pokedexForm" alt="About" style={ { width: "90%", height: "90%" } }>

      <img className="error" alt="error" src={psyduck} style={ {display: "block", marginLeft: "auto", marginRight: "auto", width: "25%" } } />
      <h1 style={ { color: "white", textAlign: "center" } }>Error!</h1>
      <p style={ { color: "white", textAlign: "center" } }>Psyyyy???</p>

      <div alt="links" style={ { display: "flex", justifyContent: "center", alignItems: "center" } }>

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
