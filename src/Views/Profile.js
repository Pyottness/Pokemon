import background from '../Assets/Images/PokemonBackground.png';
import '../App.css';
import * as React from 'react';
import { NavLink, useParams, useNavigate } from "react-router-dom";

export default function Profile() {

  const { username } = useParams();
  const navigate = useNavigate();
  const token = JSON.parse(window.localStorage.getItem("token"))
  const [character, setCharacter] = React.useState()
  const [profileUser, setProfileuser] = React.useState(false)
  const [search, setSearch] = React.useState("")

  //Badges achieved
  //Gen 1 Badges

  const [boulderBadge, setBoulderbadge] = React.useState(false)
  const [cascadeBadge, setCascadebadge] = React.useState(false)
  const [thunderBadge, setThunderbadge] = React.useState(false)
  const [rainbowBadge, setRainbowbadge] = React.useState(false)
  const [soulBadge, setSoulbadge] = React.useState(false)
  const [marshBadge, setMarshbadge] = React.useState(false)
  const [volcanoBadge, setVolcanobadge] = React.useState(false)
  const [earthBadge, setEarthbadge] = React.useState(false)

  //Gen 2 Badges

  const [zephyrBadge, setZephyrbadge] = React.useState(false)
  const [hiveBadge, setHivebadge] = React.useState(false)
  const [plainBadge, setPlainbadge] = React.useState(false)
  const [fogBadge, setFogbadge] = React.useState(false)
  const [stormBadge, setStormbadge] = React.useState(false)
  const [mineralBadge, setMineralbadge] = React.useState(false)
  const [glacierBadge, setGlacierbadge] = React.useState(false)
  const [risingBadge, setRisingbadge] = React.useState(false)

  //Gen 3 Badges

  const [stoneBadge, setStonebadge] = React.useState(false)
  const [knuckleBadge, setKnucklebadge] = React.useState(false)
  const [dynamoBadge, setDynamobadge] = React.useState(false)
  const [heatBadge, setHeatbadge] = React.useState(false)
  const [balanceBadge, setBalancebadge] = React.useState(false)
  const [featherBadge, setFeatherbadge] = React.useState(false)
  const [mindBadge, setMindbadge] = React.useState(false)
  const [rainBadge, setRainbadge] = React.useState(false)

  //Gen 4 Badges

  const [coalBadge, setCoalbadge] = React.useState(false)
  const [forestBadge, setForestbadge] = React.useState(false)
  const [cobbleBadge, setCobblebadge] = React.useState(false)
  const [fenBadge, setFenbadge] = React.useState(false)
  const [relicBadge, setRelicbadge] = React.useState(false)
  const [mineBadge, setMinebadge] = React.useState(false)
  const [icicleBadge, setIciclebadge] = React.useState(false)
  const [beaconBadge, setBeaconbadge] = React.useState(false)

  //Gen 5 Badges

  const [trioBadge, setTriobadge] = React.useState(false)
  const [basicBadge, setBasicbadge] = React.useState(false)
  const [insectBadge, setInsectbadge] = React.useState(false)
  const [boltBadge, setBoltbadge] = React.useState(false)
  const [quakeBadge, setQuakebadge] = React.useState(false)
  const [jetBadge, setJetbadge] = React.useState(false)
  const [freezeBadge, setFreezebadge] = React.useState(false)
  const [legendBadge, setLegendbadge] = React.useState(false)
  const [toxicBadge, setToxicbadge] = React.useState(false)
  const [waveBadge, setWavebadge] = React.useState(false)

  //Gen 6 Badges

  const [bugBadge, setBugbadge] = React.useState(false)
  const [cliffBadge, setCliffbadge] = React.useState(false)
  const [rumbleBadge, setRumblebadge] = React.useState(false)
  const [plantBadge, setPlantbadge] = React.useState(false)
  const [voltageBadge, setVoltagebadge] = React.useState(false)
  const [fairyBadge, setFairybadge] = React.useState(false)
  const [psychicBadge, setPsychicbadge] = React.useState(false)
  const [icebergBadge, setIcebergbadge] = React.useState(false)

  //Gen 7 Badges

  const [grassBadge, setGrassbadge] = React.useState(false)
  const [waterBadge, setWaterbadge] = React.useState(false)
  const [fireBadge, setFirebadge] = React.useState(false)
  const [fightingBadge, setFightingbadge] = React.useState(false)
  const [rockBadge, setRockbadge] = React.useState(false)
  const [darkBadge, setDarkbadge] = React.useState(false)
  const [dragonBadge, setDragonbadge] = React.useState(false)
  const [ghostBadge, setGhostbadge] = React.useState(false)
  const [iceBadge, setIcebadge] = React.useState(false)
  const [fairy2Badge, setFairy2badge] = React.useState(false)

  //Show or Hide edit

  const EditProfile = () => {
    if(profileUser === true){
      return (<NavLink to="/" className="button" style={({ isActive }) => {
      return {backgroundColor: isActive ? "cyan" : ""};}} onClick={() => {window.localStorage.removeItem('token')}} alt="log out">Log out</NavLink>)
    } else {
      return <></>
    }

  }

  // Handle user Search

  const handleSearch = () => {

    navigate(`/profile/${search.toLowerCase()}`)
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
        if(result.message === 'Profile owner'){

          setCharacter(result.character)
          setProfileuser(true)

          //Gen 1 Badges

          setBoulderbadge(result.boulder)
          setCascadebadge(result.cascade)
          setThunderbadge(result.thunder)
          setRainbowbadge(result.rainbow)
          setSoulbadge(result.soul)
          setMarshbadge(result.marsh)
          setVolcanobadge(result.volcano)
          setEarthbadge(result.earth)

          //Gen 2 Badges

          setZephyrbadge(result.zephyr)
          setHivebadge(result.hive)
          setPlainbadge(result.plain)
          setFogbadge(result.fog)
          setStormbadge(result.storm)
          setMineralbadge(result.mineral)
          setGlacierbadge(result.glacier)
          setRisingbadge(result.rising)

          //Gen 3 Badges

          setStonebadge(result.stone)
          setKnucklebadge(result.knuckle)
          setDynamobadge(result.dynamo)
          setHeatbadge(result.heat)
          setBalancebadge(result.balance)
          setFeatherbadge(result.feather)
          setMindbadge(result.mind)
          setRainbadge(result.rain)

          //Gen 4 Badges

          setCoalbadge(result.coal)
          setForestbadge(result.forest)
          setCobblebadge(result.cobble)
          setFenbadge(result.fen)
          setRelicbadge(result.relic)
          setMinebadge(result.mine)
          setIciclebadge(result.icicle)
          setBeaconbadge(result.beacon)

          //Gen 5 Badges

          setTriobadge(result.trio)
          setBasicbadge(result.basic)
          setInsectbadge(result.insect)
          setBoltbadge(result.bolt)
          setQuakebadge(result.quake)
          setJetbadge(result.jet)
          setFreezebadge(result.freeze)
          setLegendbadge(result.legend)
          setToxicbadge(result.toxic)
          setWavebadge(result.wave)

          //Gen 6 Badges

          setBugbadge(result.bug)
          setCliffbadge(result.cliff)
          setRumblebadge(result.rumble)
          setPlantbadge(result.plant)
          setVoltagebadge(result.voltage)
          setFairybadge(result.fairy)
          setPsychicbadge(result.psychic)
          setIcebergbadge(result.iceberg)

          //Gen 7 Badges

          setGrassbadge(result.grass)
          setWaterbadge(result.water)
          setFirebadge(result.fire)
          setFightingbadge(result.fighting)
          setRockbadge(result.rock)
          setDarkbadge(result.dark)
          setDragonbadge(result.dragon)
          setGhostbadge(result.ghost)
          setIcebadge(result.ice)
          setFairy2badge(result.fairy2)

        } else if(result.message === 'Profile visitor') {

          setCharacter(result.character)
          setProfileuser(false)

          //Gen 1 Badges

          setBoulderbadge(result.boulder)
          setCascadebadge(result.cascade)
          setThunderbadge(result.thunder)
          setRainbowbadge(result.rainbow)
          setSoulbadge(result.soul)
          setMarshbadge(result.marsh)
          setVolcanobadge(result.volcano)
          setEarthbadge(result.earth)

          //Gen 2 Badges

          setZephyrbadge(result.zephyr)
          setHivebadge(result.hive)
          setPlainbadge(result.plain)
          setFogbadge(result.fog)
          setStormbadge(result.storm)
          setMineralbadge(result.mineral)
          setGlacierbadge(result.glacier)
          setRisingbadge(result.rising)

          //Gen 3 Badges

          setStonebadge(result.stone)
          setKnucklebadge(result.knuckle)
          setDynamobadge(result.dynamo)
          setHeatbadge(result.heat)
          setBalancebadge(result.balance)
          setFeatherbadge(result.feather)
          setMindbadge(result.mind)
          setRainbadge(result.rain)

          //Gen 4 Badges

          setCoalbadge(result.coal)
          setForestbadge(result.forest)
          setCobblebadge(result.cobble)
          setFenbadge(result.fen)
          setRelicbadge(result.relic)
          setMinebadge(result.mine)
          setIciclebadge(result.icicle)
          setBeaconbadge(result.beacon)

          //Gen 5 Badges

          setTriobadge(result.trio)
          setBasicbadge(result.basic)
          setInsectbadge(result.insect)
          setBoltbadge(result.bolt)
          setQuakebadge(result.quake)
          setJetbadge(result.jet)
          setFreezebadge(result.freeze)
          setLegendbadge(result.legend)
          setToxicbadge(result.toxic)
          setWavebadge(result.wave)

          //Gen 6 Badges

          setBugbadge(result.bug)
          setCliffbadge(result.cliff)
          setRumblebadge(result.rumble)
          setPlantbadge(result.plant)
          setVoltagebadge(result.voltage)
          setFairybadge(result.fairy)
          setPsychicbadge(result.psychic)
          setIcebergbadge(result.iceberg)

          //Gen 7 Badges

          setGrassbadge(result.grass)
          setWaterbadge(result.water)
          setFirebadge(result.fire)
          setFightingbadge(result.fighting)
          setRockbadge(result.rock)
          setDarkbadge(result.dark)
          setDragonbadge(result.dragon)
          setGhostbadge(result.ghost)
          setIcebadge(result.ice)
          setFairy2badge(result.fairy2)

        } else {
          setProfileuser(false)
          navigate("/error")
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

  return (
    <div className="App" style={ divStyle }>

    <div className="pokedexForm" alt="profile" style={{height: "85%", width: "85%"}}>

      <div className="search" alt="search" style={{color: "white", textAlign: "center"}}>Search:
      <input className="search" alt="search" value={search} onChange={event => setSearch(event.target.value)} style={{width: "40%", margin: "1%"}} placeholder="Find a user..." />
      <button className="button" type="button" style={{height: "40px", width: "40px", fontSize: "20px"}} onClick={() => {handleSearch()}}>🔍</button>
      </div>

      <div className="userInfo" alt="user information">

      <h1 style={{color: "white", textAlign: "center"}}>{ username.charAt(0).toUpperCase() + username.slice(1) }</h1>
      <div style={{textAlign: "center", fontSize: "50px"}}>{ character }</div>
      <p style={{color: "white", textAlign: "center"}}>Badges</p>

      <label>Generation I:</label>
      <div>
      <img className="badge" src={ boulder } alt="boulder badge" style={ { filter: boulderBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ cascade } alt="cascade badge" style={ { filter: cascadeBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ thunder } alt="thunder badge" style={ { filter: thunderBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ rainbow } alt="rainbow badge" style={ { filter: rainbowBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ soul } alt="soul badge" style={ { filter: soulBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ marsh } alt="marsh badge" style={ { filter: marshBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ volcano } alt="volcano badge" style={ { filter: volcanoBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ earth } alt="earth badge" style={ { filter: earthBadge === false ? "brightness(0)" : "brightness()"} } />
      </div>

      <label>Generation II:</label>
      <div>
      <img className="badge" src={ zephyr } alt="zephyr badge" style={ { filter: zephyrBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ hive } alt="hive badge" style={ { filter: hiveBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ plain } alt="plain badge" style={ { filter: plainBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ fog } alt="fog badge" style={ { filter: fogBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ storm } alt="storm badge" style={ { filter: stormBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ mineral } alt="mineral badge" style={ { filter: mineralBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ glacier } alt="glacier badge" style={ { filter: glacierBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ rising } alt="rising badge" style={ { filter: risingBadge === false ? "brightness(0)" : "brightness()"} } />
      </div>

      <label>Generation III:</label>
      <div>
      <img className="badge" src={ stone } alt="stone badge" style={ { filter: stoneBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ knuckle } alt="knuckle badge" style={ { filter: knuckleBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ dynamo } alt="dynamo badge" style={ { filter: dynamoBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ heat } alt="heat badge" style={ { filter: heatBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ balance } alt="balance badge" style={ { filter: balanceBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ feather } alt="feather badge" style={ { filter: featherBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ mind } alt="mind badge" style={ { filter: mindBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ rain } alt="rain badge" style={ { filter: rainBadge === false ? "brightness(0)" : "brightness()"} } />
      </div>

      <label>Generation IV:</label>
      <div>
      <img className="badge" src={ coal } alt="coal badge" style={ { filter: coalBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ forest } alt="forest badge" style={ { filter: forestBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ cobble } alt="cobble badge" style={ { filter: cobbleBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ fen } alt="fen badge" style={ { filter: fenBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ relic } alt="relic badge" style={ { filter: relicBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ mine } alt="mine badge" style={ { filter: mineBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ icicle } alt="icicle badge" style={ { filter: icicleBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ beacon } alt="beacon badge" style={ { filter: beaconBadge === false ? "brightness(0)" : "brightness()"} } />
      </div>

      <label>Generation V:</label>
      <div>
      <img className="badge" src={ trio } alt="trio" style={ { filter: trioBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ basic } alt="basic badge" style={ { filter: basicBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ insect } alt="insect badge" style={ { filter: insectBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ bolt } alt="bolt badge" style={ { filter: boltBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ quake } alt="quake badge" style={ { filter: quakeBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ jet } alt="jet badge" style={ { filter: jetBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ freeze } alt="freeze badge" style={ { filter: freezeBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ legend } alt="legend badge" style={ { filter: legendBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ toxic } alt="toxic badge" style={ { filter: toxicBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ wave } alt="wave badge" style={ { filter: waveBadge === false ? "brightness(0)" : "brightness()"} } />
      </div>

      <label>Generation VI:</label>
      <div>
      <img className="badge" src={ bug } alt="bug badge" style={ { filter: bugBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ cliff } alt="cliff badge" style={ { filter: cliffBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ rumble } alt="rumble badge" style={ { filter: rumbleBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ plant } alt="plant badge" style={ { filter: plantBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ voltage } alt="voltage" style={ { filter: voltageBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ fairy } alt="fairy badge" style={ { filter: fairyBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ psychic } alt="psychic badge" style={ { filter: psychicBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ iceberg } alt="iceberg badge" style={ { filter: icebergBadge === false ? "brightness(0)" : "brightness()"} } />
      </div>

      <label>Generation VII:</label>
      <div>
      <img className="badge" src={ grass } alt="grass badge" style={ { filter: grassBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ water } alt="water badge" style={ { filter: waterBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ fire } alt="fire badge" style={ { filter: fireBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ fighting } alt="fighting badge" style={ { filter: fightingBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ fairy2 } alt="fairy badge" style={ { filter: fairy2Badge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ rock } alt="rock badge" style={ { filter: rockBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ dark } alt="dark badge" style={ { filter: darkBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ dragon } alt=" dragon badge" style={ { filter: dragonBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ ghost } alt="ghost badge" style={ { filter: ghostBadge === false ? "brightness(0)" : "brightness()"} } />
      <img className="badge" src={ ice } alt="ice badge" style={ { filter: iceBadge === false ? "brightness(0)" : "brightness()"} } />
      </div>

      </div>

      <div alt="links" style={ { display: "flex", justifyContent: "center", alignItems: "center" } }>

      <NavLink to="/" className="button" style={({ isActive }) => {
        return {backgroundColor: isActive ? "cyan" : ""};}} alt="FirstGeneration">Home</NavLink>
      <EditProfile />

      </div>

    </div>

    </div>
  );
}
