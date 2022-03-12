import background from '../Assets/Images/PokemonBackground.png';
import '../App.css';
import * as React from 'react';
import { NavLink } from "react-router-dom";

export default function About() {

  //Language settings

  const [language, setLanguage] = React.useState(
    () => JSON.parse(window.localStorage.getItem('language')) ?? "English"
  )

  React.useEffect(() => {
    window.localStorage.setItem('language', JSON.stringify(language))
  }, [language])

  var divStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
  }

  return (
    <div className="App" style={ divStyle }>

    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "white"}}>
    <div className="pokedexForm" alt="About" style={{ width: "70%", height: "80%" }}>

    <p><button className="pokedex-button" alt="pokedex-button" style={{ backgroundColor: "white", cursor: "pointer", borderStyle: "none" }} onClick={() => {language === "English" ? setLanguage("Spanish") : setLanguage("English")}}>{language === "English" ? "🇬🇧" : "🇪🇸"}</button>{language === "English" ? " Choose language." : "Elige idioma."}</p>
    <p>{language === "English" ? "This website has been developed by M. J. Pyott with the intention of practising Nodejs and Reactjs." : "Ésta página web ha sido desarrollada por M. J. Pyott con la intención de practicar Nodejs y Reactjs."}</p>
    <p>{language === "English" ? "Pokemon images and names have all been obtained from PokeAPI." : "Las imágenes y los nombres de los Pokémon han sido obtenidos de PokeAPI."}</p>
    <p>{language === "English" ? "Nintendo and The Pokemon Company hold all rights relating to the Pokemon images and names." : "Nintendo y The Pokémon Company mantienen todos los derechos en cuánto a las imágenes Pokémon y sus nombres."}</p>

      <div alt="links">

      <NavLink to="/register" className="button" style={({ isActive }) => {
        return {backgroundColor: isActive ? "cyan" : ""};}} alt="Register">{language === "English" ? "Register" : "Registrarse"}</NavLink>
      <NavLink to="/" className="button" style={({ isActive }) => {
        return {backgroundColor: isActive ? "cyan" : ""};}} alt="FirstGeneration">Home</NavLink>

      </div>

    </div>
    </div>

    </div>
  );
}
