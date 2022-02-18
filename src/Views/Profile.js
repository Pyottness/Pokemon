import background from '../Assets/Images/PokemonBackground.png';
import '../App.css';
import * as React from 'react';
import { NavLink } from "react-router-dom";

export default function Profile() {

  const username = 'Jane';
  const character = '🙋‍♀️‍';
  const medals = 0;

  var divStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
  }

  return (
    <div className="App" style={ divStyle }>

    <div className="pokedexForm" alt="About">

      <div className="userInfo" alt="user information">

      <h1 style={{color: "white"}}>{ username }</h1>
      <p>{ character }</p>
      <p style={{color: "white"}}>Medals: { medals }</p>



      </div>

      <div alt="links">

      <NavLink to="/" className="button" style={({ isActive }) => {
        return {backgroundColor: isActive ? "cyan" : ""};}} alt="FirstGeneration">Home</NavLink>

      </div>

    </div>

    </div>
  );
}
