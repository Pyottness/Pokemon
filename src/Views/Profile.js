import background from '../Assets/Images/PokemonBackground.png';
import '../App.css';
import * as React from 'react';
import { NavLink, useParams } from "react-router-dom";

export default function Profile() {

  const { username } = useParams();
  const token = JSON.parse(window.localStorage.getItem("token"))
  const [character, setCharacter] = React.useState()
  const [profileUser, setProfileuser] = React.useState(false)

  const EditProfile = () => {
    if(profileUser === true){
      return (<NavLink to="/" className="button" style={({ isActive }) => {
      return {backgroundColor: isActive ? "cyan" : ""};}} onClick={() => {window.localStorage.removeItem('token')}} alt="log out">Log out</NavLink>)
    } else {
      return <></>
    }

  }

  React.useEffect(() => {
    fetch("/.netlify/functions/app/auth/profile", {
      method: 'POST',
      body: JSON.stringify({"username": username}),
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + token
      }
    })
    .then(res => res.json())
    .then(
      (result) => {
        if(result.message === 'User found'){

          setCharacter(result.character)
          setProfileuser(true)

        } else {
          alert(result.error);
          setProfileuser(false)
        }
      }
    )
    .catch(error => {
      console.error(error);
    });
  })

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

  //Background image style

  var divStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
  }

  //Badges achieved

  const boulderBadge = window.localStorage.getItem('boulderBadge')
  const cascadeBadge = window.localStorage.getItem('cascadeBadge')
  const thunderBadge = window.localStorage.getItem('thunderBadge')
  const rainbowBadge = window.localStorage.getItem('rainbowBadge')
  const soulBadge = window.localStorage.getItem('soulBadge')
  const marshBadge = window.localStorage.getItem('marshBadge')
  const volcanoBadge = window.localStorage.getItem('volcanoBadge')
  const earthBadge = window.localStorage.getItem('earthBadge')

  //Gen 2 Badges

  const zephyrBadge = window.localStorage.getItem('zephyrBadge')
  const hiveBadge = window.localStorage.getItem('hiveBadge')
  const plainBadge = window.localStorage.getItem('plainBadge')
  const fogBadge = window.localStorage.getItem('fogBadge')
  const stormBadge = window.localStorage.getItem('stormBadge')
  const mineralBadge = window.localStorage.getItem('mineralBadge')
  const glacierBadge = window.localStorage.getItem('glacierBadge')
  const risingBadge = window.localStorage.getItem('risingBadge')

  //Gen 3 Badges

  const stoneBadge = window.localStorage.getItem('stoneBadge')
  const knuckleBadge = window.localStorage.getItem('knuckleBadge')
  const dynamoBadge = window.localStorage.getItem('dynamoBadge')
  const heatBadge = window.localStorage.getItem('heatBadge')
  const balanceBadge = window.localStorage.getItem('balanceBadge')
  const featherBadge = window.localStorage.getItem('featherBadge')
  const mindBadge = window.localStorage.getItem('mindBadge')
  const rainBadge = window.localStorage.getItem('rainBadge')

  //Gen 4 Badges

  const coalBadge = window.localStorage.getItem('coalBadge')
  const forestBadge = window.localStorage.getItem('forestBadge')
  const cobbleBadge = window.localStorage.getItem('cobbleBadge')
  const fenBadge = window.localStorage.getItem('fenBadge')
  const relicBadge = window.localStorage.getItem('relicBadge')
  const mineBadge = window.localStorage.getItem('mineBadge')
  const icicleBadge = window.localStorage.getItem('icicleBadge')
  const beaconBadge = window.localStorage.getItem('beaconBadge')

  //Gen 5 Badges

  const trioBadge = window.localStorage.getItem('trioBadge')
  const basicBadge = window.localStorage.getItem('basicBadge')
  const insectBadge = window.localStorage.getItem('insectBadge')
  const boltBadge = window.localStorage.getItem('boltBadge')
  const quakeBadge = window.localStorage.getItem('quakeBadge')
  const jetBadge = window.localStorage.getItem('jetBadge')
  const freezeBadge = window.localStorage.getItem('freezeBadge')
  const legendBadge = window.localStorage.getItem('legendBadge')
  const toxicBadge = window.localStorage.getItem('toxicBadge')
  const waveBadge = window.localStorage.getItem('waveBadge')

  //Gen 6 Badges

  const bugBadge = window.localStorage.getItem('bugBadge')
  const cliffBadge = window.localStorage.getItem('cliffBadge')
  const rumbleBadge = window.localStorage.getItem('rumbleBadge')
  const plantBadge = window.localStorage.getItem('plantBadge')
  const voltageBadge = window.localStorage.getItem('voltageBadge')
  const fairyBadge = window.localStorage.getItem('fairyBadge')
  const psychicBadge = window.localStorage.getItem('psychicBadge')
  const icebergBadge = window.localStorage.getItem('icebergBadge')

  //Gen 7 Badges

  const grassBadge = window.localStorage.getItem('grassBadge')
  const waterBadge = window.localStorage.getItem('waterBadge')
  const fireBadge = window.localStorage.getItem('fireBadge')
  const fightingBadge = window.localStorage.getItem('fightingBadge')
  const rockBadge = window.localStorage.getItem('rockBadge')
  const darkBadge = window.localStorage.getItem('darkBadge')
  const dragonBadge = window.localStorage.getItem('dragonBadge')
  const ghostBadge = window.localStorage.getItem('ghostBadge')
  const iceBadge = window.localStorage.getItem('iceBadge')
  const fairy2Badge = window.localStorage.getItem('fairy2Badge')

  return (
    <div className="App" style={ divStyle }>

    <div className="pokedexForm" alt="profile" style={{height: "620px", width: "300px"}}>

      <div className="userInfo" alt="user information">

      <h1 style={{color: "white", textAlign: "center"}}>{ username }</h1>
      <div style={{textAlign: "center", fontSize: "50px"}}>{ character }</div>
      <p style={{color: "white", textAlign: "center"}}>Badges</p>

      <label>Generation I:</label>
      <div>
      <img className="badge" src={ boulder } alt="boulder badge" style={ { filter: boulderBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ cascade } alt="cascade badge" style={ { filter: cascadeBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ thunder } alt="thunder badge" style={ { filter: thunderBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ rainbow } alt="rainbow badge" style={ { filter: rainbowBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ soul } alt="soul badge" style={ { filter: soulBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ marsh } alt="marsh badge" style={ { filter: marshBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ volcano } alt="volcano badge" style={ { filter: volcanoBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ earth } alt="earth badge" style={ { filter: earthBadge === null ? "brightness(0)" : "brightness()"} } />
      </div>

      <label>Generation II:</label>
      <div>
      <img className="badge" src={ zephyr } alt="zephyr badge" style={ { filter: zephyrBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ hive } alt="hive badge" style={ { filter: hiveBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ plain } alt="plain badge" style={ { filter: plainBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ fog } alt="fog badge" style={ { filter: fogBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ storm } alt="storm badge" style={ { filter: stormBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ mineral } alt="mineral badge" style={ { filter: mineralBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ glacier } alt="glacier badge" style={ { filter: glacierBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ rising } alt="rising badge" style={ { filter: risingBadge === null ? "brightness(0)" : "brightness()"} } />
      </div>

      <label>Generation III:</label>
      <div>
      <img className="badge" src={ stone } alt="stone badge" style={ { filter: stoneBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ knuckle } alt="knuckle badge" style={ { filter: knuckleBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ dynamo } alt="dynamo badge" style={ { filter: dynamoBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ heat } alt="heat badge" style={ { filter: heatBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ balance } alt="balance badge" style={ { filter: balanceBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ feather } alt="feather badge" style={ { filter: featherBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ mind } alt="mind badge" style={ { filter: mindBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ rain } alt="rain badge" style={ { filter: rainBadge === null ? "brightness(0)" : "brightness()"} } />
      </div>

      <label>Generation IV:</label>
      <div>
      <img className="badge" src={ coal } alt="coal badge" style={ { filter: coalBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ forest } alt="forest badge" style={ { filter: forestBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ cobble } alt="cobble badge" style={ { filter: cobbleBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ fen } alt="fen badge" style={ { filter: fenBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ relic } alt="relic badge" style={ { filter: relicBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ mine } alt="mine badge" style={ { filter: mineBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ icicle } alt="icicle badge" style={ { filter: icicleBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ beacon } alt="beacon badge" style={ { filter: beaconBadge === null ? "brightness(0)" : "brightness()"} } />
      </div>

      <label>Generation V:</label>
      <div>
      <img className="badge" src={ trio } alt="trio" style={ { filter: trioBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ basic } alt="basic badge" style={ { filter: basicBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ insect } alt="insect badge" style={ { filter: insectBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ bolt } alt="bolt badge" style={ { filter: boltBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ quake } alt="quake badge" style={ { filter: quakeBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ jet } alt="jet badge" style={ { filter: jetBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ freeze } alt="freeze badge" style={ { filter: freezeBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ legend } alt="legend badge" style={ { filter: legendBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ toxic } alt="toxic badge" style={ { filter: toxicBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ wave } alt="wave badge" style={ { filter: waveBadge === null ? "brightness(0)" : "brightness()"} } />
      </div>

      <label>Generation VI:</label>
      <div>
      <img className="badge" src={ bug } alt="bug badge" style={ { filter: bugBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ cliff } alt="cliff badge" style={ { filter: cliffBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ rumble } alt="rumble badge" style={ { filter: rumbleBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ plant } alt="plant badge" style={ { filter: plantBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ voltage } alt="voltage" style={ { filter: voltageBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ fairy } alt="fairy badge" style={ { filter: fairyBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ psychic } alt="psychic badge" style={ { filter: psychicBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ iceberg } alt="iceberg badge" style={ { filter: icebergBadge === null ? "brightness(0)" : "brightness()"} } />
      </div>

      <label>Generation VII:</label>
      <div>
      <img className="badge" src={ grass } alt="grass badge" style={ { filter: grassBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ water } alt="water badge" style={ { filter: waterBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ fire } alt="fire badge" style={ { filter: fireBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ fighting } alt="fighting badge" style={ { filter: fightingBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ fairy2 } alt="fairy badge" style={ { filter: fairy2Badge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ rock } alt="rock badge" style={ { filter: rockBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ dark } alt="dark badge" style={ { filter: darkBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ dragon } alt=" dragon badge" style={ { filter: dragonBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ ghost } alt="ghost badge" style={ { filter: ghostBadge === null ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ ice } alt="ice badge" style={ { filter: iceBadge === null ? "brightness(0)" : "brightness()"} } />
      </div>

      </div>

      <div alt="links">

      <NavLink to="/" className="button" style={({ isActive }) => {
        return {backgroundColor: isActive ? "cyan" : ""};}} alt="FirstGeneration">Home</NavLink>
      <EditProfile />

      </div>

    </div>

    </div>
  );
}
