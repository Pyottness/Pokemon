import background from '../Assets/Images/PokemonBackground.png';
import '../App.css';
import * as React from 'react';
import { NavLink, useParams } from "react-router-dom";

export default function Profile() {

  const { username } = useParams();

  const character = JSON.parse(window.localStorage.getItem('character'))

  //Gen 1 badges

  const boulder = require('../Assets/Images/pokemon badges/Gen1 badges/Boulderbadge.png')
  const cascade = require('../Assets/Images/pokemon badges/Gen1 badges/Cascadebadge.png')
  const thunder = require('../Assets/Images/pokemon badges/Gen1 badges/Thunderbadge.png')
  const rainbow = require('../Assets/Images/pokemon badges/Gen1 badges/Rainbowbadge.png')
  const soul = require('../Assets/Images/pokemon badges/Gen1 badges/Soulbadge.png')
  const marsh = require('../Assets/Images/pokemon badges/Gen1 badges/Marshbadge.png')
  const volcano = require('../Assets/Images/pokemon badges/Gen1 badges/Volcanobadge.png')
  const earth = require('../Assets/Images/pokemon badges/Gen1 badges/Earthbadge.png')

  //Gen 2 Badges

  const zephyr = require('../Assets/Images/pokemon badges/Gen2 badges/Zephyrbadge.png')
  const hive = require('../Assets/Images/pokemon badges/Gen2 badges/Hivebadge.png')
  const plain = require('../Assets/Images/pokemon badges/Gen2 badges/Plainbadge.png')
  const fog = require('../Assets/Images/pokemon badges/Gen2 badges/Fogbadge.png')
  const storm = require('../Assets/Images/pokemon badges/Gen2 badges/Stormbadge.png')
  const mineral = require('../Assets/Images/pokemon badges/Gen2 badges/Mineralbadge.png')
  const glacier = require('../Assets/Images/pokemon badges/Gen2 badges/Glacierbadge.png')
  const rising = require('../Assets/Images/pokemon badges/Gen2 badges/Risingbadge.png')

  //Gen 3 Badges

  const stone = require('../Assets/Images/pokemon badges/Gen3 badges/Stonebadge.png')
  const knuckle = require('../Assets/Images/pokemon badges/Gen3 badges/Knucklebadge.png')
  const dynamo = require('../Assets/Images/pokemon badges/Gen3 badges/Dynamobadge.png')
  const heat = require('../Assets/Images/pokemon badges/Gen3 badges/Heatbadge.png')
  const balance = require('../Assets/Images/pokemon badges/Gen3 badges/Balancebadge.png')
  const feather = require('../Assets/Images/pokemon badges/Gen3 badges/Featherbadge.png')
  const mind = require('../Assets/Images/pokemon badges/Gen3 badges/Mindbadge.png')
  const rain = require('../Assets/Images/pokemon badges/Gen3 badges/Rainbadge.png')

  //Gen 4 Badges

  const coal = require('../Assets/Images/pokemon badges/Gen4 badges/Coalbadge.png')
  const forest = require('../Assets/Images/pokemon badges/Gen4 badges/Forestbadge.png')
  const cobble = require('../Assets/Images/pokemon badges/Gen4 badges/Cobblebadge.png')
  const fen = require('../Assets/Images/pokemon badges/Gen4 badges/Fenbadge.png')
  const relic = require('../Assets/Images/pokemon badges/Gen4 badges/Relicbadge.png')
  const mine = require('../Assets/Images/pokemon badges/Gen4 badges/Minebadge.png')
  const icicle = require('../Assets/Images/pokemon badges/Gen4 badges/Iciclebadge.png')
  const beacon = require('../Assets/Images/pokemon badges/Gen4 badges/Beaconbadge.png')

  //Gen 5 Badges

  const trio = require('../Assets/Images/pokemon badges/Gen5 badges/Triobadge.png')
  const basic = require('../Assets/Images/pokemon badges/Gen5 badges/Basicbadge.png')
  const insect = require('../Assets/Images/pokemon badges/Gen5 badges/Insectbadge.png')
  const bolt = require('../Assets/Images/pokemon badges/Gen5 badges/Boltbadge.png')
  const quake = require('../Assets/Images/pokemon badges/Gen5 badges/Quakebadge.png')
  const jet = require('../Assets/Images/pokemon badges/Gen5 badges/Jetbadge.png')
  const freeze = require('../Assets/Images/pokemon badges/Gen5 badges/Freezebadge.png')
  const legend = require('../Assets/Images/pokemon badges/Gen5 badges/Legendbadge.png')
  const toxic = require('../Assets/Images/pokemon badges/Gen5 badges/Toxicbadge.png')
  const wave = require('../Assets/Images/pokemon badges/Gen5 badges/Wavebadge.png')

  //Gen 6 Badges

  const bug = require('../Assets/Images/pokemon badges/Gen6 badges/Bugbadge.png')
  const cliff = require('../Assets/Images/pokemon badges/Gen6 badges/Cliffbadge.png')
  const rumble = require('../Assets/Images/pokemon badges/Gen6 badges/Rumblebadge.png')
  const plant = require('../Assets/Images/pokemon badges/Gen6 badges/Plantbadge.png')
  const voltage = require('../Assets/Images/pokemon badges/Gen6 badges/Voltagebadge.png')
  const fairy = require('../Assets/Images/pokemon badges/Gen6 badges/Fairybadge.png')
  const psychic = require('../Assets/Images/pokemon badges/Gen6 badges/Psychicbadge.png')
  const iceberg = require('../Assets/Images/pokemon badges/Gen6 badges/Icebergbadge.png')

  //Gen 7 Badges

  const grass = require('../Assets/Images/pokemon badges/Gen7 badges/GrassBadge.png')
  const water = require('../Assets/Images/pokemon badges/Gen7 badges/WaterBadge.png')
  const fire = require('../Assets/Images/pokemon badges/Gen7 badges/FireBadge.png')
  const fighting = require('../Assets/Images/pokemon badges/Gen7 badges/FightingBadge.png')
  const rock = require('../Assets/Images/pokemon badges/Gen7 badges/RockBadge.png')
  const dark = require('../Assets/Images/pokemon badges/Gen7 badges/DarkBadge.png')
  const dragon = require('../Assets/Images/pokemon badges/Gen7 badges/DragonBadge.png')
  const ghost = require('../Assets/Images/pokemon badges/Gen7 badges/GhostBadge.png')
  const ice = require('../Assets/Images/pokemon badges/Gen7 badges/IceBadge.png')
  const fairy2 = require('../Assets/Images/pokemon badges/Gen7 badges/FairyBadge.png')

  //Badge images

  var badgeImages = {
    maxWidth: "8%",
    maxHeight: "8%",
  }


  //Background image

  var divStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
  }

  return (
    <div className="App" style={ divStyle }>

    <div className="pokedexForm" alt="profile" style={{height: "620px", width: "300px"}}>

      <div className="userInfo" alt="user information">

      <h1 style={{color: "white", textAlign: "center"}}>{ username }</h1>
      <div style={{textAlign: "center", fontSize: "50px"}}>{ character }</div>
      <p style={{color: "white", textAlign: "center"}}>Badges</p>

      <label>Generation I:</label>
      <div>
      <img src={ boulder } alt="boulder badge" style={ badgeImages } />
      <img src={ cascade } alt="cascade badge" style={ badgeImages } />
      <img src={ thunder } alt="thunder badge" style={ badgeImages } />
      <img src={ rainbow } alt="rainbow badge" style={ badgeImages } />
      <img src={ soul } alt="soul badge" style={ badgeImages } />
      <img src={ marsh } alt="marsh badge" style={ badgeImages } />
      <img src={ volcano } alt="volcano badge" style={ badgeImages } />
      <img src={ earth } alt="earth badge" style={ badgeImages } />
      </div>

      <label>Generation II:</label>
      <div>
      <img src={ zephyr } alt="zephyr badge" style={ badgeImages } />
      <img src={ hive } alt="hive badge" style={ badgeImages } />
      <img src={ plain } alt="plain badge" style={ badgeImages } />
      <img src={ fog } alt="fog badge" style={ badgeImages } />
      <img src={ storm } alt="storm badge" style={ badgeImages } />
      <img src={ mineral } alt="mineral badge" style={ badgeImages } />
      <img src={ glacier } alt="glacier badge" style={ badgeImages } />
      <img src={ rising } alt="rising badge" style={ badgeImages } />
      </div>

      <label>Generation III:</label>
      <div>
      <img src={ stone } alt="stone badge" style={ badgeImages } />
      <img src={ knuckle } alt="knuckle badge" style={ badgeImages } />
      <img src={ dynamo } alt="dynamo badge" style={ badgeImages } />
      <img src={ heat } alt="heat badge" style={ badgeImages } />
      <img src={ balance } alt="balance badge" style={ badgeImages } />
      <img src={ feather } alt="feather badge" style={ badgeImages } />
      <img src={ mind } alt="mind badge" style={ badgeImages } />
      <img src={ rain } alt="rain badge" style={ badgeImages } />
      </div>

      <label>Generation IV:</label>
      <div>
      <img src={ coal } alt="coal badge" style={ badgeImages } />
      <img src={ forest } alt="forest badge" style={ badgeImages } />
      <img src={ cobble } alt="cobble badge" style={ badgeImages } />
      <img src={ fen } alt="fen badge" style={ badgeImages } />
      <img src={ relic } alt="relic badge" style={ badgeImages } />
      <img src={ mine } alt="mine badge" style={ badgeImages } />
      <img src={ icicle } alt="icicle badge" style={ badgeImages } />
      <img src={ beacon } alt="beacon badge" style={ badgeImages } />
      </div>

      <label>Generation V:</label>
      <div>
      <img src={ trio } alt="trio" style={ badgeImages } />
      <img src={ basic } alt="basic badge" style={ badgeImages } />
      <img src={ insect } alt="insect badge" style={ badgeImages } />
      <img src={ bolt } alt="bolt badge" style={ badgeImages } />
      <img src={ quake } alt="quake badge" style={ badgeImages } />
      <img src={ jet } alt="jet badge" style={ badgeImages } />
      <img src={ freeze } alt="freeze badge" style={ badgeImages } />
      <img src={ legend } alt="legend badge" style={ badgeImages } />
      <img src={ toxic } alt="toxic badge" style={ badgeImages } />
      <img src={ wave } alt="wave badge" style={ badgeImages } />
      </div>

      <label>Generation VI:</label>
      <div>
      <img src={ bug } alt="bug badge" style={ badgeImages } />
      <img src={ cliff } alt="cliff badge" style={ badgeImages } />
      <img src={ rumble } alt="rumble badge" style={ badgeImages } />
      <img src={ plant } alt="plant badge" style={ badgeImages } />
      <img src={ voltage } alt="voltage" style={ badgeImages } />
      <img src={ fairy } alt="fairy badge" style={ badgeImages } />
      <img src={ psychic } alt="psychic badge" style={ badgeImages } />
      <img src={ iceberg } alt="iceberg badge" style={ badgeImages } />
      </div>

      <label>Generation VII:</label>
      <div>
      <img src={ grass } alt="grass badge" style={ badgeImages } />
      <img src={ water } alt="water badge" style={ badgeImages } />
      <img src={ fire } alt="fire badge" style={ badgeImages } />
      <img src={ fighting } alt="fighting badge" style={ badgeImages } />
      <img src={ fairy2 } alt="fairy badge" style={ badgeImages } />
      <img src={ rock } alt="rock badge" style={ badgeImages } />
      <img src={ dark } alt="dark badge" style={ badgeImages } />
      <img src={ dragon } alt=" dragon badge" style={ badgeImages } />
      <img src={ ghost } alt="ghost badge" style={ badgeImages } />
      <img src={ ice } alt="ice badge" style={ badgeImages } />
      </div>

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
