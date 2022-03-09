import background from '../Assets/Images/PokemonBackground.png';
import '../App.css';
import * as React from 'react';
import { NavLink, useParams, useNavigate } from "react-router-dom";

export default function Profile() {

  const { username } = useParams();
  const navigate = useNavigate();
  const token = JSON.parse(window.localStorage.getItem("token"))
  const [character, setCharacter] = React.useState()
  const characterOwner = JSON.parse(window.localStorage.getItem("character"))
  const [usernameOwner, setUsernameowner] = React.useState(
    () => JSON.parse(window.localStorage.getItem('usernameOwner')) ?? ""
  )
  const [profileUser, setProfileuser] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const [follow, setFollow] = React.useState(false)
  const [following, setFollowing] = React.useState([])
  const [followers, setFollowers] = React.useState([])

  const [showBadges, setShowbadges] = React.useState(true)
  const [showFollowing, setShowfollowing] = React.useState(false)
  const [showFollowers, setShowfollowers] = React.useState(false)

  const [ownerFollowing, setOwnerfollowing] = React.useState(
    () => JSON.parse(window.localStorage.getItem('ownerFollowing')) ?? []
  )

  const [ownerFollowers, setOwnerfollowers] = React.useState(
    () => JSON.parse(window.localStorage.getItem('ownerFollowers')) ?? []
  )

  //function to check if a string is in an array

  const checker = (needle, haystack) => haystack.includes(needle)

  React.useEffect(() => {
    if(checker(username, ownerFollowing) === true){
      setFollow(true)
    }
  }, [username, ownerFollowing])

  // Handle user logged in

  const userLoggedin = () => {
    navigate(`/profile/${usernameOwner}`)
  }

  // Handle user Search

  const handleSearch = () => {
    navigate(`/profile/${search.toLowerCase()}`)
  }

  // Handle follow

  const handleFollow = () => {

    //update database user followers

    fetch("/.netlify/functions/app/auth/follow", {
      method: 'PUT',
      body: JSON.stringify({"following": username,
                            "followers2": usernameOwner,
                            "username": username,
                            }),
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
      }
    })
    .then(res => res.json())
    .then(
      (result) => {
        if(result.message === 'Users updated successfully!'){
          setFollow(true)
        } else {
          setFollow(false)
        }
      }
    )
    .catch(error => {
      console.log(error);
      setFollow(false)
    });
  }


  // Handle unfollow

  const handleUnfollow = () => {

    //update database user followers

    fetch("/.netlify/functions/app/auth/unfollow", {
      method: 'PUT',
      body: JSON.stringify({"following": username,
                            "followers2": usernameOwner,
                            "username": username,
                            }),
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
      }
    })
    .then(res => res.json())
    .then(
      (result) => {
        if(result.message === 'Users updated successfully!'){
          setFollow(false)
        } else {
          setFollow(true)
        }
      }
    )
    .catch(error => {
      console.log(error);
      setFollow(true)
    });
  }


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

  const [boulderBadge7, setBoulderbadge7] = React.useState(false)
  const [cascadeBadge7, setCascadebadge7] = React.useState(false)
  const [thunderBadge7, setThunderbadge7] = React.useState(false)
  const [rainbowBadge7, setRainbowbadge7] = React.useState(false)
  const [soulBadge7, setSoulbadge7] = React.useState(false)
  const [marshBadge7, setMarshbadge7] = React.useState(false)
  const [volcanoBadge7, setVolcanobadge7] = React.useState(false)
  const [earthBadge7, setEarthbadge7] = React.useState(false)

  //Gen 8 Badges

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

  React.useEffect(() => {
    fetch("/.netlify/functions/app/auth/profile", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + token,
        "username": username
      }
    })
    .then(res => res.json())
    .then(
      (result) => {
        if(result.message === 'Profile owner'){

          setCharacter(result.character)
          setUsernameowner(result.username)
          setProfileuser(true)
          setOwnerfollowing(result.following)
          setOwnerfollowers(result.followers)

          //Gen 1 Badges

          setBoulderbadge(result.boulder)
          window.localStorage.setItem("boulderBadge", JSON.stringify(result.boulder))
          setCascadebadge(result.cascade)
          window.localStorage.setItem("cascadeBadge", JSON.stringify(result.cascade))
          setThunderbadge(result.thunder)
          window.localStorage.setItem("thunderBadge", JSON.stringify(result.thunder))
          setRainbowbadge(result.rainbow)
          window.localStorage.setItem("rainbowBadge", JSON.stringify(result.rainbow))
          setSoulbadge(result.soul)
          window.localStorage.setItem("soulBadge", JSON.stringify(result.soul))
          setMarshbadge(result.marsh)
          window.localStorage.setItem("marshBadge", JSON.stringify(result.marsh))
          setVolcanobadge(result.volcano)
          window.localStorage.setItem("volcanoBadge", JSON.stringify(result.volcano))
          setEarthbadge(result.earth)
          window.localStorage.setItem("earthBadge", JSON.stringify(result.earth))

          //Gen 2 Badges

          setZephyrbadge(result.zephyr)
          window.localStorage.setItem("zephyrBadge", JSON.stringify(result.zephyr))
          setHivebadge(result.hive)
          window.localStorage.setItem("hiveBadge", JSON.stringify(result.hive))
          setPlainbadge(result.plain)
          window.localStorage.setItem("plainBadge", JSON.stringify(result.plain))
          setFogbadge(result.fog)
          window.localStorage.setItem("fogBadge", JSON.stringify(result.fog))
          setStormbadge(result.storm)
          window.localStorage.setItem("stormBadge", JSON.stringify(result.storm))
          setMineralbadge(result.mineral)
          window.localStorage.setItem("mineralBadge", JSON.stringify(result.mineral))
          setGlacierbadge(result.glacier)
          window.localStorage.setItem("glacierBadge", JSON.stringify(result.glacier))
          setRisingbadge(result.rising)
          window.localStorage.setItem("risingBadge", JSON.stringify(result.rising))

          //Gen 3 Badges

          setStonebadge(result.stone)
          window.localStorage.setItem("stoneBadge", JSON.stringify(result.stone))
          setKnucklebadge(result.knuckle)
          window.localStorage.setItem("knuckleBadge", JSON.stringify(result.knuckle))
          setDynamobadge(result.dynamo)
          window.localStorage.setItem("dynamoBadge", JSON.stringify(result.dynamo))
          setHeatbadge(result.heat)
          window.localStorage.setItem("heatBadge", JSON.stringify(result.heat))
          setBalancebadge(result.balance)
          window.localStorage.setItem("balanceBadge", JSON.stringify(result.balance))
          setFeatherbadge(result.feather)
          window.localStorage.setItem("featherBadge", JSON.stringify(result.feather))
          setMindbadge(result.mind)
          window.localStorage.setItem("mindBadge", JSON.stringify(result.mind))
          setRainbadge(result.rain)
          window.localStorage.setItem("rainBadge", JSON.stringify(result.rain))

          //Gen 4 Badges

          setCoalbadge(result.coal)
          window.localStorage.setItem("coalBadge", JSON.stringify(result.coal))
          setForestbadge(result.forest)
          window.localStorage.setItem("forestBadge", JSON.stringify(result.forest))
          setCobblebadge(result.cobble)
          window.localStorage.setItem("cobbleBadge", JSON.stringify(result.cobble))
          setFenbadge(result.fen)
          window.localStorage.setItem("fenBadge", JSON.stringify(result.fen))
          setRelicbadge(result.relic)
          window.localStorage.setItem("relicBadge", JSON.stringify(result.relic))
          setMinebadge(result.mine)
          window.localStorage.setItem("mineBadge", JSON.stringify(result.mine))
          setIciclebadge(result.icicle)
          window.localStorage.setItem("icicleBadge", JSON.stringify(result.icicle))
          setBeaconbadge(result.beacon)
          window.localStorage.setItem("beaconBadge", JSON.stringify(result.beacon))

          //Gen 5 Badges

          setTriobadge(result.trio)
          window.localStorage.setItem("trioBadge", JSON.stringify(result.trio))
          setBasicbadge(result.basic)
          window.localStorage.setItem("basicBadge", JSON.stringify(result.basic))
          setInsectbadge(result.insect)
          window.localStorage.setItem("insectBadge", JSON.stringify(result.insect))
          setBoltbadge(result.bolt)
          window.localStorage.setItem("boltBadge", JSON.stringify(result.bolt))
          setQuakebadge(result.quake)
          window.localStorage.setItem("quakeBadge", JSON.stringify(result.quake))
          setJetbadge(result.jet)
          window.localStorage.setItem("jetBadge", JSON.stringify(result.jet))
          setFreezebadge(result.freeze)
          window.localStorage.setItem("freezeBadge", JSON.stringify(result.freeze))
          setLegendbadge(result.legend)
          window.localStorage.setItem("legendBadge", JSON.stringify(result.legend))
          setToxicbadge(result.toxic)
          window.localStorage.setItem("toxicBadge", JSON.stringify(result.toxic))
          setWavebadge(result.wave)
          window.localStorage.setItem("waveBadge", JSON.stringify(result.wave))

          //Gen 6 Badges

          setBugbadge(result.bug)
          window.localStorage.setItem("bugBadge", JSON.stringify(result.bug))
          setCliffbadge(result.cliff)
          window.localStorage.setItem("cliffBadge", JSON.stringify(result.cliff))
          setRumblebadge(result.rumble)
          window.localStorage.setItem("rumbleBadge", JSON.stringify(result.rumble))
          setPlantbadge(result.plant)
          window.localStorage.setItem("plantBadge", JSON.stringify(result.plant))
          setVoltagebadge(result.voltage)
          window.localStorage.setItem("voltageBadge", JSON.stringify(result.voltage))
          setFairybadge(result.fairy)
          window.localStorage.setItem("fairyBadge", JSON.stringify(result.fairy))
          setPsychicbadge(result.psychic)
          window.localStorage.setItem("psychicBadge", JSON.stringify(result.psychic))
          setIcebergbadge(result.iceberg)
          window.localStorage.setItem("icebergBadge", JSON.stringify(result.iceberg))

          //Gen 7 Badges

          setBoulderbadge7(result.boulder7)
          window.localStorage.setItem("boulder7Badge", JSON.stringify(result.boulder7))
          setCascadebadge7(result.cascade7)
          window.localStorage.setItem("cascade7Badge", JSON.stringify(result.cascade7))
          setThunderbadge7(result.thunder7)
          window.localStorage.setItem("thunder7Badge", JSON.stringify(result.thunder7))
          setRainbowbadge7(result.rainbow7)
          window.localStorage.setItem("rainbow7Badge", JSON.stringify(result.rainbow7))
          setSoulbadge7(result.soul7)
          window.localStorage.setItem("soul7Badge", JSON.stringify(result.soul7))
          setMarshbadge7(result.marsh7)
          window.localStorage.setItem("marsh7Badge", JSON.stringify(result.marsh7))
          setVolcanobadge7(result.volcano7)
          window.localStorage.setItem("volcano7Badge", JSON.stringify(result.volcano7))
          setEarthbadge7(result.earth7)
          window.localStorage.setItem("earth7Badge", JSON.stringify(result.earth7))

          //Gen 8 Badges

          setGrassbadge(result.grass)
          window.localStorage.setItem("grassBadge", JSON.stringify(result.grass))
          setWaterbadge(result.water)
          window.localStorage.setItem("waterBadge", JSON.stringify(result.water))
          setFirebadge(result.fire)
          window.localStorage.setItem("fireBadge", JSON.stringify(result.fire))
          setFightingbadge(result.fighting)
          window.localStorage.setItem("fightingBadge", JSON.stringify(result.fighting))
          setRockbadge(result.rock)
          window.localStorage.setItem("rockBadge", JSON.stringify(result.rock))
          setDarkbadge(result.dark)
          window.localStorage.setItem("darkBadge", JSON.stringify(result.dark))
          setDragonbadge(result.dragon)
          window.localStorage.setItem("dragonBadge", JSON.stringify(result.dragon))
          setGhostbadge(result.ghost)
          window.localStorage.setItem("ghostBadge", JSON.stringify(result.ghost))
          setIcebadge(result.ice)
          window.localStorage.setItem("iceBadge", JSON.stringify(result.ice))
          setFairy2badge(result.fairy2)
          window.localStorage.setItem("fairy2Badge", JSON.stringify(result.fairy2))

        } else if(result.message === 'Profile visitor') {

          setCharacter(result.character)
          setProfileuser(false)
          setFollowing(result.following)
          setFollowers(result.followers)

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

          setBoulderbadge7(result.boulder7)
          setCascadebadge7(result.cascade7)
          setThunderbadge7(result.thunder7)
          setRainbowbadge7(result.rainbow7)
          setSoulbadge7(result.soul7)
          setMarshbadge7(result.marsh7)
          setVolcanobadge7(result.volcano7)
          setEarthbadge7(result.earth7)

          //Gen 8 Badges

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
          navigate("/login")
        }
      }
    )
    .catch(error => {
      console.error(error);
    });
  }, [navigate, token, username, follow])

  React.useEffect(() => {
    window.localStorage.setItem('usernameOwner', JSON.stringify(usernameOwner))
  }, [usernameOwner])

  React.useEffect(() => {
    window.localStorage.setItem('ownerFollowing', JSON.stringify(ownerFollowing))
  }, [ownerFollowing])

  React.useEffect(() => {
    window.localStorage.setItem('ownerFollowers', JSON.stringify(ownerFollowers))
  }, [ownerFollowers])

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

  //Gen 7 badges

  const boulder7 = require('../Assets/Images/pokemon badges/Gen1 badges/Boulderbadge.png')
  const cascade7 = require('../Assets/Images/pokemon badges/Gen1 badges/Cascadebadge.png')
  const thunder7 = require('../Assets/Images/pokemon badges/Gen1 badges/Thunderbadge.png')
  const rainbow7 = require('../Assets/Images/pokemon badges/Gen1 badges/Rainbowbadge.png')
  const soul7 = require('../Assets/Images/pokemon badges/Gen1 badges/Soulbadge.png')
  const marsh7 = require('../Assets/Images/pokemon badges/Gen1 badges/Marshbadge.png')
  const volcano7 = require('../Assets/Images/pokemon badges/Gen1 badges/Volcanobadge.png')
  const earth7 = require('../Assets/Images/pokemon badges/Gen1 badges/Earthbadge.png')

  //Gen 8 Badges

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

  //Show or Hide edit

  const EditProfile = () => {
    if(profileUser === true){
      return (<NavLink to="/" className="button" style={({ isActive }) => {
      return {backgroundColor: isActive ? "cyan" : ""};}} onClick={() => {window.localStorage.removeItem('token')}} alt="log out">Log out</NavLink>)
    } else {
      return <></>
    }

  }

  //Show or Hide return to profile

  const ReturnProfile = () => {
    if(profileUser !== true){
      return (<button className="pokedex-button pokedex-init" alt="profile" style={{backgroundColor: "green", textDecoration: "none", padding: "5px", margin: "2%", fontSize: "20px", cursor: "pointer"}} onClick={() => { userLoggedin() }}>{characterOwner}</button>)
    } else {
      return <></>
    }

  }

  //Show or Hide follow buttons

  const Follow = () => {

    if(profileUser === true){
      return <></>
    } else {
      if(follow !== true){
        return (<div style={{textAlign: "center"}}>
                <button className="button" alt="follow" onClick={() => {
                  handleFollow();
                 }}>Follow</button>
                </div>
              )
      } else {
        return (<div style={{textAlign: "center"}}>
                <button className="button" alt="unfollow" onClick={() => {
                  handleUnfollow();
                }}>Unfollow</button>
                </div>
              )
      }
    }

  }

  //Show Badges

  const Badges = () => {
    if(showBadges === true){
      return(
        <div>
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
        <img className="badge" src={ boulder7 } alt="boulder badge" style={ { filter: boulderBadge7 === false ? "brightness(0)" : "brightness()"} } />
        <img className="badge" src={ cascade7 } alt="cascade badge" style={ { filter: cascadeBadge7 === false ? "brightness(0)" : "brightness()"} } />
        <img className="badge" src={ thunder7 } alt="thunder badge" style={ { filter: thunderBadge7 === false ? "brightness(0)" : "brightness()"} } />
        <img className="badge" src={ rainbow7 } alt="rainbow badge" style={ { filter: rainbowBadge7 === false ? "brightness(0)" : "brightness()"} } />
        <img className="badge" src={ soul7 } alt="soul badge" style={ { filter: soulBadge7 === false ? "brightness(0)" : "brightness()"} } />
        <img className="badge" src={ marsh7 } alt="marsh badge" style={ { filter: marshBadge7 === false ? "brightness(0)" : "brightness()"} } />
        <img className="badge" src={ volcano7 } alt="volcano badge" style={ { filter: volcanoBadge7 === false ? "brightness(0)" : "brightness()"} } />
        <img className="badge" src={ earth7 } alt="earth badge" style={ { filter: earthBadge7 === false ? "brightness(0)" : "brightness()"} } />
        </div>

        <label>Generation VIII:</label>
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
      )
    } else {
      return (<></>)
    }
  }

  //Show a list of followers

  const Followers = () => {
    if(showBadges === true){
      return (<></>)
    } else if(showFollowing === true){
      return (<></>)
    } else {
      if(profileUser === false){
        const listItems = followers.map((people) =>
        <div key={people.toString()}>
          <button style={{ border: "none", backgroundColor: "inherit", color: "white", cursor: "pointer", display: "inlineBlock" }} onClick={() => { navigate(`/profile/${people}`) }}>{people.charAt(0).toUpperCase() + people.slice(1)}</button>
        </div>
      );
      return (
        <div style={{ textAlign: "center" }}>{listItems}</div>
      );
      } else {
        const listItems = ownerFollowers.map((people) =>
        <div key={people.toString()}>
          <button style={{ border: "none", backgroundColor: "inherit", color: "white", cursor: "pointer", display: "inlineBlock" }} onClick={() => { navigate(`/profile/${people}`) }}>{people.charAt(0).toUpperCase() + people.slice(1)}</button>
        </div>
      );
      return (
        <div style={{ textAlign: "center" }}>{listItems}</div>
      );
      }
    }
  }

  //Show a list of following

  const Following = () => {
    if(showBadges === true){
      return (<></>)
    } else if(showFollowers === true){
      return (<></>)
    } else {
      if(profileUser === false){
        const listItems = following.map((people) =>
        <div key={people.toString()}>
          <button style={{ border: "none", backgroundColor: "inherit", color: "white", cursor: "pointer", display: "inlineBlock" }} onClick={() => { navigate(`/profile/${people}`) }}>{people.charAt(0).toUpperCase() + people.slice(1)}</button>
        </div>
      );
      return (
        <div style={{ textAlign: "center" }}>{listItems}</div>
      );
      } else {
        const listItems = ownerFollowing.map((people) =>
        <div key={people.toString()}>
          <button style={{ border: "none", backgroundColor: "inherit", color: "white", cursor: "pointer", display: "inlineBlock" }} onClick={() => { navigate(`/profile/${people}`) }}>{people.charAt(0).toUpperCase() + people.slice(1)}</button>
        </div>
      );
      return (
        <div style={{ textAlign: "center" }}>{listItems}</div>
      );
      }
    }
  }

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

      <ReturnProfile />
      <div className="search" alt="search" style={{color: "white", textAlign: "center"}}>Search:
      <input className="search" alt="search" value={search} onChange={event => setSearch(event.target.value)} onKeyDown={(e) => e.key === 'Enter' ? handleSearch() : null} style={{width: "40%", margin: "1%"}} placeholder="user..." />
      <button className="button" type="button" style={{height: "40px", width: "40px", fontSize: "20px"}} onClick={() => {handleSearch()}}>🔍</button>
      </div>

      <div className="userInfo" alt="user information">

      <h1 style={{color: "white", textAlign: "center"}}>{ username.charAt(0).toUpperCase() + username.slice(1) }</h1>
      <div style={{textAlign: "center", fontSize: "50px"}}>{ character === null ? 'loading...' : character }</div>
      <Follow />
      <table style={{marginLeft: "auto", marginRight: "auto", color: "white", textAlign: "center"}}>
      <tbody>
      <tr>
      <th>Following </th>
      <th>Followers</th>
      </tr>
      <tr>
      <td alt="following" style={{ cursor: "pointer" }} onClick={() => {
        showBadges === true || showFollowers === true ? setShowbadges(false) && setShowfollowers(false) && setShowfollowing(true) : setShowbadges(true)
      }}>{profileUser === true ? ownerFollowing.length : following.length}</td>
      <td alt="followers" style={{ cursor: "pointer" }} onClick={() => {
        showBadges === true || showFollowing === true ? setShowbadges(false) && setShowfollowing(false) && setShowfollowers(true) : setShowbadges(true)
      }}>{profileUser === true ? ownerFollowers.length : followers.length}</td>
      </tr>
      </tbody>
      </table>

      <Followers />
      <Following />
      <Badges />

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
