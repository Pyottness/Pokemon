import background from '../Assets/Images/PokemonBackground.png';
import '../App.css';
import * as React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import turnOn from "../Assets/Sounds/turn on.mp3";
import turnOff from "../Assets/Sounds/turn off.mp3";
import correct from "../Assets/Sounds/correct.mp3";
import incorrect from "../Assets/Sounds/incorrect.mp3";

export default function FirstGeneration() {

  const navigate = useNavigate();

  //Audio constants

  const [audioPlay, setAudioplay] = React.useState(
    () => JSON.parse(window.localStorage.getItem('audioPlay') ?? true)
  )

  React.useEffect(() => {
    window.localStorage.setItem('audioPlay', JSON.stringify(audioPlay))
  }, [audioPlay])

  const turnOnplay = new Audio(turnOn)
  const turnOffplay = new Audio(turnOff)
  const correctplay = new Audio(correct)
  const incorrectplay = new Audio(incorrect)

  const audioEmoji = audioPlay === true ? '🔊' : '🔈'

  //User data

  const username = React.useState(
    () => JSON.parse(window.localStorage.getItem('username'))
  )

const character = JSON.parse(window.localStorage.getItem('character')) === null ? '👨' : JSON.parse(window.localStorage.getItem('character'))

  const userLoggedin = () => {
      navigate(`/profile/${username[0]}`)
  }

  const login = () => {
      navigate("/login")
  }

  //First Generation Pokemon data

  const [pokemons, setPokemons] = React.useState(
    () => JSON.parse(window.localStorage.getItem('pokemons'))
  )

  //Pokemon data to be set depending on number button pressed

  const [pokemonData, setPokemondata] = React.useState(pokemons)

  //Second Generation Pokemon data

  const [pokemons2, setPokemons2] = React.useState(
    () => JSON.parse(window.localStorage.getItem('pokemons2'))
  )

  React.useEffect(() => {
    window.localStorage.setItem('pokemons2', JSON.stringify(pokemons2))
  }, [pokemons2])

  //Third Generation Pokemon data

    const [pokemons3, setPokemons3] = React.useState(
      () => JSON.parse(window.localStorage.getItem('pokemons3'))
    )

    React.useEffect(() => {
      window.localStorage.setItem('pokemons3', JSON.stringify(pokemons3))
    }, [pokemons3])

    //Fourth Generation Pokemon data

      const [pokemons4, setPokemons4] = React.useState(
        () => JSON.parse(window.localStorage.getItem('pokemons4'))
      )

      React.useEffect(() => {
        window.localStorage.setItem('pokemons4', JSON.stringify(pokemons4))
      }, [pokemons4])

    //Fifth Generation Pokemon data

      const [pokemons5, setPokemons5] = React.useState(
        () => JSON.parse(window.localStorage.getItem('pokemons5'))
      )

      React.useEffect(() => {
        window.localStorage.setItem('pokemons5', JSON.stringify(pokemons5))
      }, [pokemons5])

    //Sixth Generation Pokemon data

      const [pokemons6, setPokemons6] = React.useState(
        () => JSON.parse(window.localStorage.getItem('pokemons6'))
      )

      React.useEffect(() => {
        window.localStorage.setItem('pokemons6', JSON.stringify(pokemons6))
      }, [pokemons6])

    //Seventh Generation Pokemon data

      const [pokemons7, setPokemons7] = React.useState(
        () => JSON.parse(window.localStorage.getItem('pokemons7'))
      )

      React.useEffect(() => {
        window.localStorage.setItem('pokemons7', JSON.stringify(pokemons7))
      }, [pokemons7])

      //Eigth Generation Pokemon data

        const [pokemons8, setPokemons8] = React.useState(
          () => JSON.parse(window.localStorage.getItem('pokemons8'))
        )

  //fetch all the pokemon data

  React.useEffect(() => {
    if (window.localStorage.getItem('pokemons') === null || window.localStorage.getItem('pokemons8') === null){
      fetch('/.netlify/functions/app/api/everygen', {
        headers: {
          'authorization': process.env.REACT_APP_AUTH
        }
      })
      .then((response) => response.json()
      .then((response) => {
        const gen1 = response.slice(0, 151)
        const gen2 = response.slice(151, 251)
        const gen3 = response.slice(251, 386)
        const gen4 = response.slice(386, 493)
        const gen5 = response.slice(493, 649)
        const gen6 = response.slice(649, 721)
        const gen7 = response.slice(721, 809)
        const gen8 = response.slice(809, 898)
        setPokemons(gen1)
        setPokemondata(gen1)
        setPokemons2(gen2)
        setPokemons3(gen3)
        setPokemons4(gen4)
        setPokemons5(gen5)
        setPokemons6(gen6)
        setPokemons7(gen7)
        setPokemons8(gen8)
      })
      .catch((error) => console.log(error))
    )
    }
  }, [])

  React.useEffect(() => {
    window.localStorage.setItem('pokemons', JSON.stringify(pokemons))
  }, [pokemons])

  React.useEffect(() => {
    window.localStorage.setItem('pokemons8', JSON.stringify(pokemons8))
  }, [pokemons8])

  //pokemon constants//
  const [correctName, setCorrectname] = React.useState('Mew')
  const [number, setNumber] = React.useState(151)
  const [pokemonA, setPokemonA] = React.useState('Bulbasaur')
  const [pokemonB, setPokemonB] = React.useState('Mew')
  const [pokemonC, setPokemonC] = React.useState('Charizard')
  const [pokemonD, setPokemonD] = React.useState('Pikachu')

  //button constants//
  const [buttonPlay, setButtonplay] = React.useState({backgroundColor: "blue", color: "blue", cursor: "default"})
  const [buttonA, setbuttonA] = React.useState({backgroundColor: "blue", color: "blue", cursor: "default"})
  const [buttonB, setbuttonB] = React.useState({backgroundColor: "blue", color: "blue", cursor: "default"})
  const [buttonC, setbuttonC] = React.useState({backgroundColor: "blue", color: "blue", cursor: "default"})
  const [buttonD, setbuttonD] = React.useState({backgroundColor: "blue", color: "blue", cursor: "default"})
  const [navButton, setNavbutton] = React.useState(1)

  //image constant set to hidden//
  const [pokemonWho, setPokemonwho] = React.useState({
    filter: "brightness(0)",
  })
  const pokemonImage = require(`../../node_modules/pokemon-sprites/sprites/pokemon/other/official-artwork/${number}.png`)

  //counter constant//
  const initialCount = {count: 0}

  function reducer(counter, action) {
    switch (action.type) {
      case 'increment':
      if(audioPlay === true){correctplay.play()}
      return {count: counter.count + 1}
      case 'reset':
      if(audioPlay === true){incorrectplay.play()}
      return {count: counter.count = 0}
      default:
      throw new Error();
    }
  }

  const [counter, dispatch] = React.useReducer(reducer, initialCount)
  const [maxScore, setMaxscore] = React.useState(
    () => JSON.parse(window.localStorage.getItem("maxScore")) ?? counter.count,
  )

  //Badges achieved

  //Constants of arrays containing given correct answers which are not repeated

  const [showBadge, setShowbadge] = React.useState(false)
  const [pokemonBadgetext, setPokemonbadgetext] = React.useState()

  const answersInit = ["rattata"]
  const [answers1, setAnswers1] = React.useState(
    () => JSON.parse(window.localStorage.getItem('answers1')) ?? answersInit
  )

  React.useEffect(() => {
    window.localStorage.setItem('answers1', JSON.stringify(answers1))
  }, [answers1])

  const [answers2, setAnswers2] = React.useState(
    () => JSON.parse(window.localStorage.getItem('answers2')) ?? answersInit
  )

  React.useEffect(() => {
    window.localStorage.setItem('answers2', JSON.stringify(answers2))
  }, [answers2])

  const [answers3, setAnswers3] = React.useState(
    () => JSON.parse(window.localStorage.getItem('answers3')) ?? answersInit
  )

  React.useEffect(() => {
    window.localStorage.setItem('answers3', JSON.stringify(answers3))
  }, [answers3])

  const [answers4, setAnswers4] = React.useState(
    () => JSON.parse(window.localStorage.getItem('answers4')) ?? answersInit
  )

  React.useEffect(() => {
    window.localStorage.setItem('answers4', JSON.stringify(answers4))
  }, [answers4])

  const [answers5, setAnswers5] = React.useState(
    () => JSON.parse(window.localStorage.getItem('answers5')) ?? answersInit
  )

  React.useEffect(() => {
    window.localStorage.setItem('answers5', JSON.stringify(answers5))
  }, [answers5])

  const [answers6, setAnswers6] = React.useState(
    () => JSON.parse(window.localStorage.getItem('answers6')) ?? answersInit
  )

  React.useEffect(() => {
    window.localStorage.setItem('answers6', JSON.stringify(answers6))
  }, [answers6])

  const [answers7, setAnswers7] = React.useState(
    () => JSON.parse(window.localStorage.getItem('answers7')) ?? answersInit
  )

  React.useEffect(() => {
    window.localStorage.setItem('answers7', JSON.stringify(answers7))
  }, [answers7])

  const [answers8, setAnswers8] = React.useState(
    () => JSON.parse(window.localStorage.getItem('answers8')) ?? answersInit
  )

  React.useEffect(() => {
    window.localStorage.setItem('answers8', JSON.stringify(answers8))
  }, [answers8])


  //Gen 1 Badges

  const [boulderBadge, setBoulderbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('boulderBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('boulderBadge', JSON.stringify(boulderBadge))
  }, [boulderBadge])

  const [cascadeBadge, setCascadebadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('cascadeBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('cascadeBadge', JSON.stringify(cascadeBadge))
  }, [cascadeBadge])

  const [thunderBadge, setThunderbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('thunderBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('thunderBadge', JSON.stringify(thunderBadge))
  }, [thunderBadge])

  const [rainbowBadge, setRainbowbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('rainbowBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('rainbowBadge', JSON.stringify(rainbowBadge))
  }, [rainbowBadge])

  const [soulBadge, setSoulbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('soulBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('soulBadge', JSON.stringify(soulBadge))
  }, [soulBadge])

  const [marshBadge, setMarshbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('marshBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('marshBadge', JSON.stringify(marshBadge))
  }, [marshBadge])

  const [volcanoBadge, setVolcanobadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('volcanoBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('volcanoBadge', JSON.stringify(volcanoBadge))
  }, [volcanoBadge])

  const [earthBadge, setEarthbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('earthBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('earthBadge', JSON.stringify(earthBadge))
  }, [earthBadge])

  const boulder = React.useState(["geodude", "graveler", "golem", "onix", "rhyhorn", "rhydon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl"])
  const cascade = React.useState(["squirtle", "wartortle", "blastoise", "psyduck", "golduck", "poliwag", "poliwhirl", "poliwrath", "tentacool", "tentacruel", "slowpoke", "slowbro", "seel", "dewgong", "shellder", "cloyster", "krabby", "kingler", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "magikarp", "gyarados", "lapras", "vaporeon", "omanyte", "omastar", "kabuto", "kabutops"])
  const thunder = React.useState(["pikachu", "raichu", "magnemite", "magneton", "voltorb", "electrode", "electabuzz", "jolteon", "zapdos"])
  const rainbow = React.useState(["bulbasaur", "ivysaur", "venusaur", "oddish", "gloom", "vileplume", "paras", "parasect", "bellsprout", "weepinbell", "victreebel", "exeggcute", "exeggutor", "tangela"])
  const soul = React.useState(["bulbasaur", "ivysaur", "venusaur", "butterfree", "weedle", "kakuna", "beedrill", "ekans", "arbok", "nidoran-m", "nidoran-f", "nidorina", "nidorino", "nidoqueen", "nidoking", "zubat", "golbat", "oddish", "gloom", "vileplume", "venonat", "venomoth", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "grimer", "muk", "gastly", "haunter", "gengar", "koffing", "weezing"])
  const marsh = React.useState(["abra", "kadabra", "alakazam", "slowpoke", "slowbro", "drowzee", "hypno", "exeggcute", "exeggutor", "starmie", "mr-mime", "jynx", "mewtwo", "mew"])
  const volcano = React.useState(["charmander", "charmeleon", "charizard", "vulpix", "ninetales", "growlithe", "arcanine", "ponyta", "rapidash", "magmar", "flareon", "moltres"])
  const earth = React.useState(["sandshrew", "sandslash", "nidoqueen", "nidoking", "diglett", "dugtrio", "geodude", "graveler", "golem", "onix", "cubone", "marowak", "rhyhorn", "rhydon"])


  //Gen 2 Badges

  const [zephyrBadge, setZephyrbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('zephyrBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('zephyrBadge', JSON.stringify(zephyrBadge))
  }, [zephyrBadge])

  const [hiveBadge, setHivebadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('hiveBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('hiveBadge', JSON.stringify(hiveBadge))
  }, [hiveBadge])

  const [plainBadge, setPlainbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('plainBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('plainBadge', JSON.stringify(plainBadge))
  }, [plainBadge])

  const [fogBadge, setFogbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('fogBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('fogBadge', JSON.stringify(fogBadge))
  }, [fogBadge])

  const [stormBadge, setStormbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('stormBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('stormBadge', JSON.stringify(stormBadge))
  }, [stormBadge])

  const [mineralBadge, setMineralbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('mineralBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('mineralBadge', JSON.stringify(mineralBadge))
  }, [mineralBadge])

  const [glacierBadge, setGlacierbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('glacierBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('glacierBadge', JSON.stringify(glacierBadge))
  }, [glacierBadge])

  const [risingBadge, setRisingbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('risingBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('risingBadge', JSON.stringify(risingBadge))
  }, [risingBadge])

  const zephyr = React.useState(["hoothoot", "noctowl", "ledyba", "ledian", "crobat", "togetic", "natu", "xatu", "hoppip", "skiploom", "jumpluff", "yanma", "murkrow", "gligar", "delibird", "mantine", "skarmory", "lugia", "ho-oh"])
  const hive = React.useState(["ledyba", "ledian", "spinarak", "ariados", "yanma", "pineco", "forretress", "scizor", "shuckle", "heracross"])
  const plain = React.useState(["sentret", "furret", "hoothoot", "noctowl", "igglybuff", "aipom", "girafarig", "dunsparce", "teddiursa", "ursaring", "porygon2", "stantler", "smeargle", "miltank", "blissey"])
  const fog = React.useState(["misdreavus"])
  const storm = React.useState(["heracross", "tyrogue", "hitmontop"])
  const mineral = React.useState(["forretress", "steelix", "scizor", "skarmory"])
  const glacier = React.useState(["sneasel", "swinub", "piloswine", "delibird", "smoochum"])
  const rising = React.useState(["kingdra"])

  //Gen 3 Badges

  const [stoneBadge, setStonebadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('stoneBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('stoneBadge', JSON.stringify(stoneBadge))
  }, [stoneBadge])

  const [knuckleBadge, setKnucklebadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('knuckleBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('knuckleBadge', JSON.stringify(knuckleBadge))
  }, [knuckleBadge])

  const [dynamoBadge, setDynamobadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('dynamoBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('dynamoBadge', JSON.stringify(dynamoBadge))
  }, [dynamoBadge])

  const [heatBadge, setHeatbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('heatBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('heatBadge', JSON.stringify(heatBadge))
  }, [heatBadge])

  const [balanceBadge, setBalancebadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('balanceBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('balanceBadge', JSON.stringify(balanceBadge))
  }, [balanceBadge])

  const [featherBadge, setFeatherbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('featherBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('featherBadge', JSON.stringify(featherBadge))
  }, [featherBadge])

  const [mindBadge, setMindbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('mindBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('mindBadge', JSON.stringify(mindBadge))
  }, [mindBadge])

  const [rainBadge, setRainbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('rainBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('rainBadge', JSON.stringify(rainBadge))
  }, [rainBadge])

  const stone = React.useState(["nosepass", "aron", "lairon", "aggron", "numel", "camerupt", "lunatone", "solrock", "lileep", "cradily", "anorith", "armaldo", "relicanth", "regirock"])
  const knuckle = React.useState(["combusken", "blaziken", "breloom", "makuhita", "hariyama", "meditite", "medicham"])
  const dynamo = React.useState(["electrike", "manectric", "plusle", "minun", "barboach", "whiscash", "corphish", "crawdaunt"])
  const heat = React.useState(["torchic", "combusken", "blaziken", "numel", "camerupt", "torkoal", "castform"])
  const balance = React.useState(["zigzagoon", "linoone", "taillow", "swellow", "slakoth", "vigoroth", "slaking", "whismur", "loudred", "exploud", "azurill", "skitty", "delcatty", "spinda", "swablu", "zangoose", "castform", "kecleon"])
  const feather = React.useState(["beautifly", "taillow", "swellow", "wingull", "pelipper", "masquerain", "ninjask", "swablu", "altaria", "tropius", "salamence", "rayquaza"])
  const mind = React.useState(["kirlia", "gardevoir", "meditite", "medicham", "spoink", "grumpig", "lunatone", "solrock", "baltoy", "claydol", "chimecho", "wynaut", "beldum", "metang", "metagross", "latias", "latios", "jirachi", "deoxys"])
  const rain = React.useState(["mudkip", "marshtomp", "swampert", "lotad", "lombre", "ludicolo", "wingull", "pelipper", "surskit", "carvanha", "sharpedo", "wailmer", "wailord", "feebas", "milotic", "castform", "spheal", "sealeo", "walrein", "clamperl", "huntail", "gorebyss", "relicanth", "luvdisc", "kyogre"])


  //Gen 4 Badges

  const [coalBadge, setCoalbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('coalBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('coalBadge', JSON.stringify(coalBadge))
  }, [coalBadge])

  const [forestBadge, setForestbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('forestBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('forestBadge', JSON.stringify(forestBadge))
  }, [forestBadge])

  const [cobbleBadge, setCobblebadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('cobbleBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('cobbleBadge', JSON.stringify(cobbleBadge))
  }, [cobbleBadge])

  const [fenBadge, setFenbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('fenBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('fenBadge', JSON.stringify(fenBadge))
  }, [fenBadge])

  const [relicBadge, setRelicbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('relicBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('relicBadge', JSON.stringify(relicBadge))
  }, [relicBadge])

  const [mineBadge, setMinebadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('mineBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('mineBadge', JSON.stringify(mineBadge))
  }, [mineBadge])

  const [icicleBadge, setIciclebadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('icicleBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('icicleBadge', JSON.stringify(icicleBadge))
  }, [icicleBadge])

  const [beaconBadge, setBeaconbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('beaconBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('beaconBadge', JSON.stringify(beaconBadge))
  }, [beaconBadge])

  const coal = React.useState(["cranidos", "rampardos", "shieldon", "bastiodon", "bonsly", "rhyperior", "probopass"])
  const forest = React.useState(["turtwig", "grotle", "torterra", "budew", "roserade", "wormadam", "cherubi", "cherrim", "carnivine", "snover", "abomasnow"])
  const cobble = React.useState(["monferno", "infernape", "riolu", "lucario", "croagunk", "toxicroak", "gallade"])
  const fen = React.useState(["piplup", "prinplup", "empoleon", "bibarel", "buizel", "floatzel", "shellos", "gastrodon", "finneon", "lumineon", "mantyke", "rotom", "palkia", "phione", "manaphy"])
  const relic = React.useState(["drifloon", "drifblim", "mismagius", "spiritomb", "dusknoir", "froslass", "rotom", "giratina"])
  const mine = React.useState(["empoleon", "shieldon", "bastiodon", "wormadam", "bronzor", "bronzong", "lucario", "magnezone", "probopass", "dialga", "heatran"])
  const icicle = React.useState(["snover", "abomasnow", "weavile", "glaceon", "mamoswine", "froslass", "rotom"])
  const beacon = React.useState(["shinx", "luxio", "luxray", "pachirisu", "magnezone", "electivire", "rotom"])

  //Gen 5 Badges

  const [trioBadge, setTriobadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('trioBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('trioBadge', JSON.stringify(trioBadge))
  }, [trioBadge])

  const [basicBadge, setBasicbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('basicBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('basicBadge', JSON.stringify(basicBadge))
  }, [basicBadge])

  const [insectBadge, setInsectbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('insectBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('insectBadge', JSON.stringify(insectBadge))
  }, [insectBadge])

  const [boltBadge, setBoltbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('boltBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('boltBadge', JSON.stringify(boltBadge))
  }, [boltBadge])

  const [quakeBadge, setQuakebadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('quakeBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('quakeBadge', JSON.stringify(quakeBadge))
  }, [quakeBadge])

  const [jetBadge, setJetbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('jetBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('jetBadge', JSON.stringify(jetBadge))
  }, [jetBadge])

  const [freezeBadge, setFreezebadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('freezeBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('freezeBadge', JSON.stringify(freezeBadge))
  }, [freezeBadge])

  const [legendBadge, setLegendbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('legendBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('legendBadge', JSON.stringify(legendBadge))
  }, [legendBadge])

  const [toxicBadge, setToxicbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('toxicBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('toxicBadge', JSON.stringify(toxicBadge))
  }, [toxicBadge])

  const [waveBadge, setWavebadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('waveBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('waveBadge', JSON.stringify(waveBadge))
  }, [waveBadge])


  const trio = React.useState(["snivy", "servine", "serperior", "pansage", "simisage", "sewaddle", "swadloon", "leavanny", "cottonee", "whimsicott", "petilil", "lilligant", "maractus", "deerling", "sawsbuck", "foongus", "amoonguss", "ferroseed", "ferrothorn", "virizion", "victini", "tepig", "pignite", "emboar", "pansear", "simisear", "darumaka", "darmanitan", "litwick", "lampent", "chandelure", "heatmor", "larvesta", "volcarona", "reshiram"])
  const basic = React.useState(["patrat", "watchog", "lillipup", "herdier", "stoutland", "pidove", "tranquill", "unfezant", "audino", "minccino", "cinccino", "deerling", "sawsbuck", "bouffalant", "rufflet", "braviary", "meloetta"])
  const insect = React.useState(["sewaddle", "swadloon", "leavanny", "venipede", "whirlipede", "scolipede", "dwebble", "crustle", "karrablast", "escavalier", "joltik", "galvantula", "shelmet", "accelgor", "durant", "larvesta", "volcarona", "genesect"])
  const bolt = React.useState(["blitzle", "zebstrika", "emolga", "joltik", "galvantula", "tynamo", "eelektrik", "eelektross", "stunfisk", "thundurus", "zekrom"])
  const quake = React.useState(["drilbur", "excadrill", "palpitoad", "seismitoad", "sandile", "krokorok", "krookodile", "stunfisk", "golett", "golurk", "landorus"])
  const jet = React.useState(["pidove", "tranquill", "unfezant", "woobat", "swoobat", "sigilyph", "archen", "archeops", "ducklett", "swanna", "emolga", "rufflet", "braviary", "vullaby", "mandibuzz", "tornadus", "thundurus", "landorus"])
  const freeze = React.useState(["vanillite", "vanillish", "vanilluxe", "cubchoo", "beartic", "cryogonal", "kyurem"])
  const legend = React.useState(["axew", "fraxure", "haxorus", "druddigon", "deino", "zweilous", "hydreigon", "reshiram", "zekrom", "kyurem"])
  const toxic = React.useState(["venipede", "whirlipede", "scolipede", "trubbish", "garbodor", "foongus", "amoonguss"])
  const wave = React.useState(["oshawott", "dewott", "samurott", "panpour", "simipour", "tympole", "palpitoad", "seismitoad", "basculin", "tirtouga", "carracosta", "ducklett", "swanna", "frillish", "jellicent", "alomomola", "keldeo"])

  //Gen 6 Badges

  const [bugBadge, setBugbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('bugBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('bugBadge', JSON.stringify(bugBadge))
  }, [bugBadge])

  const [cliffBadge, setCliffbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('cliffBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('cliffBadge', JSON.stringify(cliffBadge))
  }, [cliffBadge])

  const [rumbleBadge, setRumblebadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('rumbleBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('rumbleBadge', JSON.stringify(rumbleBadge))
  }, [rumbleBadge])

  const [plantBadge, setPlantbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('plantBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('plantBadge', JSON.stringify(plantBadge))
  }, [plantBadge])

  const [voltageBadge, setVoltagebadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('voltageBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('voltageBadge', JSON.stringify(voltageBadge))
  }, [voltageBadge])

  const [fairyBadge, setFairybadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('fairyBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('fairyBadge', JSON.stringify(fairyBadge))
  }, [fairyBadge])

  const [psychicBadge, setPsychicbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('psychicBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('psychicBadge', JSON.stringify(psychicBadge))
  }, [psychicBadge])

  const [icebergBadge, setIcebergbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('icebergBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('icebergBadge', JSON.stringify(icebergBadge))
  }, [icebergBadge])

  const bug = React.useState(["scatterbug", "spewpa", "vivillon"])
  const cliff = React.useState(["binacle", "barbaracle", "tyrunt", "tyrantrum", "amaura", "aurorus", "carbink", "diancie"])
  const rumble = React.useState(["chesnaught", "pancham", "pangoro", "hawlucha"])
  const plant = React.useState(["chespin", "quilladin", "chesnaught", "skiddo", "gogoat", "phantump", "trevenant", "pumpkaboo", "gourgeist"])
  const voltage = React.useState(["helioptile", "heliolisk", "dedenne"])
  const fairy = React.useState(["flabebe", "floette", "florges", "spritzee", "aromatisse", "swirlix", "slurpuff", "sylveon", "dedenne", "carbink", "klefki", "xerneas", "diancie"])
  const psychic = React.useState(["delphox", "espurr", "meowstic", "inkay", "malamar", "hoopa"])
  const iceberg = React.useState(["amaura", "aurorus", "bergmite", "avalugg"])

  //Gen 7 Badges

  const [boulderBadge7, setBoulderbadge7] = React.useState(
    () => JSON.parse(window.localStorage.getItem('boulderBadge7')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('boulderBadge7', JSON.stringify(boulderBadge7))
  }, [boulderBadge7])

  const [cascadeBadge7, setCascadebadge7] = React.useState(
    () => JSON.parse(window.localStorage.getItem('cascadeBadge7')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('cascadeBadge7', JSON.stringify(cascadeBadge7))
  }, [cascadeBadge7])

  const [thunderBadge7, setThunderbadge7] = React.useState(
    () => JSON.parse(window.localStorage.getItem('thunderBadge7')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('thunderBadge7', JSON.stringify(thunderBadge7))
  }, [thunderBadge7])

  const [rainbowBadge7, setRainbowbadge7] = React.useState(
    () => JSON.parse(window.localStorage.getItem('rainbowBadge7')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('rainbowBadge7', JSON.stringify(rainbowBadge7))
  }, [rainbowBadge7])

  const [soulBadge7, setSoulbadge7] = React.useState(
    () => JSON.parse(window.localStorage.getItem('soulBadge7')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('soulBadge7', JSON.stringify(soulBadge7))
  }, [soulBadge7])

  const [marshBadge7, setMarshbadge7] = React.useState(
    () => JSON.parse(window.localStorage.getItem('marshBadge7')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('marshBadge7', JSON.stringify(marshBadge7))
  }, [marshBadge7])

  const [volcanoBadge7, setVolcanobadge7] = React.useState(
    () => JSON.parse(window.localStorage.getItem('volcanoBadge7')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('volcanoBadge7', JSON.stringify(volcanoBadge7))
  }, [volcanoBadge7])

  const [earthBadge7, setEarthbadge7] = React.useState(
    () => JSON.parse(window.localStorage.getItem('earthBadge7')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('earthBadge7', JSON.stringify(earthBadge7))
  }, [earthBadge7])

  const boulder7 = React.useState(["rockruff", "lycanroc", "minior", "nihilego", "stakataka"])
  const cascade7 = React.useState(["popplio", "brionne", "primarina", "wishiwashi", "mareanie", "toxapex", "dewpider", "araquanid", "wimpod", "golisopod", "pyukumuku", "bruxish", "tapu"])
  const thunder7 = React.useState(["charjabug", "vikavolt", "oricorio", "togedemaru", "koko", "xurkitree", "zeraora"])
  const rainbow7 = React.useState(["rowlet", "dartrix", "decidueye", "fomantis", "lurantis", "morelull", "shiinotic", "bounsweet", "steenee", "tsareena", "dhelmise", "tapu", "kartana"])
  const soul7 = React.useState(["decidueye", "incineroar", "oricorio", "sandygast", "palossand", "mimikyu", "dhelmise", "lunala", "necrozma", "marshadow", "blacephalon"])
  const marsh7 = React.useState(["oricorio", "oranguru", "bruxish", "lele", "cosmog", "cosmoem", "solgaleo", "lunala", "necrozma"])
  const volcano7 = React.useState(["litten", "torracat", "incineroar", "oricorio", "salandit", "salazzle", "turtonator", "blacephalon"])
  const earth7 = React.useState(["zygarde", "mudbray", "mudsdale", "sandygast", "palossand"])

  //Gen 8 Badges

  const [grassBadge, setGrassbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('grassBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('grassBadge', JSON.stringify(grassBadge))
  }, [grassBadge])

  const [waterBadge, setWaterbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('waterBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('waterBadge', JSON.stringify(waterBadge))
  }, [waterBadge])

  const [fireBadge, setFirebadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('fireBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('fireBadge', JSON.stringify(fireBadge))
  }, [fireBadge])

  const [fightingBadge, setFightingbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('fightingBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('fightingBadge', JSON.stringify(fightingBadge))
  }, [fightingBadge])

  const [rockBadge, setRockbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('rockBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('rockBadge', JSON.stringify(rockBadge))
  }, [rockBadge])

  const [darkBadge, setDarkbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('darkBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('darkBadge', JSON.stringify(darkBadge))
  }, [darkBadge])

  const [dragonBadge, setDragonbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('dragonBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('dragonBadge', JSON.stringify(dragonBadge))
  }, [dragonBadge])

  const [ghostBadge, setGhostbadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('ghostBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('ghostBadge', JSON.stringify(ghostBadge))
  }, [ghostBadge])

  const [iceBadge, setIcebadge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('iceBadge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('iceBadge', JSON.stringify(iceBadge))
  }, [iceBadge])

  const [fairy2Badge, setFairy2badge] = React.useState(
    () => JSON.parse(window.localStorage.getItem('fairy2Badge')) ?? false
  )

  React.useEffect(() => {
    window.localStorage.setItem('fairy2Badge', JSON.stringify(fairy2Badge))
  }, [fairy2Badge])

  const grass = React.useState(["grookey", "thwackey", "rillaboom", "gossifleur", "eldegoss", "applin", "flapple", "appletun"])
  const water = React.useState(["sobble", "drizzile", "inteleon", "chewtle", "drednaw", "cramorant", "arrokuda", "barraskewda", "dracovish", "arctovish"])
  const fire = React.useState(["scorbunny", "raboot", "cinderace", "carkol", "coalossal", "sizzlipede", "centiskorch"])
  const fighting = React.useState(["clobbopus", "grapploct", "sirfetchd", "falinks", "zamazenta"])
  const fairy2 = React.useState(["hatterene", "impidimp", "morgrem", "grimmsnarl", "milcery", "alcremie", "zacian"])
  const rock = React.useState(["drednaw", "rolycoly", "carkol", "coalossal", "silicobra", "sandaconda", "stonjourner"])
  const dark = React.useState(["nickit", "thievul", "impidimp", "morgrem", "grimmsnarl", "obstagoon", "morpeko"])
  const dragon = React.useState(["applin", "flapple", "appletun", "dracozolt", "dracovish", "duraludon", "dreepy", "drakloak", "dragapult", "eternatus"])
  const ghost = React.useState(["sinistea", "polteageist", "cursola", "runerigus", "dreepy", "drakloak", "dragapult"])
  const ice = React.useState(["mr-rime", "snom", "frosmoth", "eiscue", "arctozolt", "arctovish"])

  //constant to show pokemon badge

  const [pokemonBadge, setPokemonbadge] = React.useState()

  //Gen 1 badges

  const boulderImage = require('../Assets/Images/pokemon badges/Gen1 badges/Boulderbadge.png')
  const cascadeImage = require('../Assets/Images/pokemon badges/Gen1 badges/Cascadebadge.png')
  const thunderImage = require('../Assets/Images/pokemon badges/Gen1 badges/Thunderbadge.png')
  const rainbowImage = require('../Assets/Images/pokemon badges/Gen1 badges/Rainbowbadge.png')
  const soulImage = require('../Assets/Images/pokemon badges/Gen1 badges/Soulbadge.png')
  const marshImage = require('../Assets/Images/pokemon badges/Gen1 badges/Marshbadge.png')
  const volcanoImage = require('../Assets/Images/pokemon badges/Gen1 badges/Volcanobadge.png')
  const earthImage = require('../Assets/Images/pokemon badges/Gen1 badges/Earthbadge.png')

  //Gen 2 Badges

  const zephyrImage = require('../Assets/Images/pokemon badges/Gen2 badges/Zephyrbadge.png')
  const hiveImage = require('../Assets/Images/pokemon badges/Gen2 badges/Hivebadge.png')
  const plainImage = require('../Assets/Images/pokemon badges/Gen2 badges/Plainbadge.png')
  const fogImage = require('../Assets/Images/pokemon badges/Gen2 badges/Fogbadge.png')
  const stormImage = require('../Assets/Images/pokemon badges/Gen2 badges/Stormbadge.png')
  const mineralImage = require('../Assets/Images/pokemon badges/Gen2 badges/Mineralbadge.png')
  const glacierImage = require('../Assets/Images/pokemon badges/Gen2 badges/Glacierbadge.png')
  const risingImage = require('../Assets/Images/pokemon badges/Gen2 badges/Risingbadge.png')

  //Gen 3 Badges

  const stoneImage = require('../Assets/Images/pokemon badges/Gen3 badges/Stonebadge.png')
  const knuckleImage = require('../Assets/Images/pokemon badges/Gen3 badges/Knucklebadge.png')
  const dynamoImage = require('../Assets/Images/pokemon badges/Gen3 badges/Dynamobadge.png')
  const heatImage = require('../Assets/Images/pokemon badges/Gen3 badges/Heatbadge.png')
  const balanceImage = require('../Assets/Images/pokemon badges/Gen3 badges/Balancebadge.png')
  const featherImage = require('../Assets/Images/pokemon badges/Gen3 badges/Featherbadge.png')
  const mindImage = require('../Assets/Images/pokemon badges/Gen3 badges/Mindbadge.png')
  const rainImage = require('../Assets/Images/pokemon badges/Gen3 badges/Rainbadge.png')

  //Gen 4 Badges

  const coalImage = require('../Assets/Images/pokemon badges/Gen4 badges/Coalbadge.png')
  const forestImage = require('../Assets/Images/pokemon badges/Gen4 badges/Forestbadge.png')
  const cobbleImage = require('../Assets/Images/pokemon badges/Gen4 badges/Cobblebadge.png')
  const fenImage = require('../Assets/Images/pokemon badges/Gen4 badges/Fenbadge.png')
  const relicImage = require('../Assets/Images/pokemon badges/Gen4 badges/Relicbadge.png')
  const mineImage = require('../Assets/Images/pokemon badges/Gen4 badges/Minebadge.png')
  const icicleImage = require('../Assets/Images/pokemon badges/Gen4 badges/Iciclebadge.png')
  const beaconImage = require('../Assets/Images/pokemon badges/Gen4 badges/Beaconbadge.png')

  //Gen 5 Badges

  const trioImage = require('../Assets/Images/pokemon badges/Gen5 badges/Triobadge.png')
  const basicImage = require('../Assets/Images/pokemon badges/Gen5 badges/Basicbadge.png')
  const insectImage = require('../Assets/Images/pokemon badges/Gen5 badges/Insectbadge.png')
  const boltImage = require('../Assets/Images/pokemon badges/Gen5 badges/Boltbadge.png')
  const quakeImage = require('../Assets/Images/pokemon badges/Gen5 badges/Quakebadge.png')
  const jetImage = require('../Assets/Images/pokemon badges/Gen5 badges/Jetbadge.png')
  const freezeImage = require('../Assets/Images/pokemon badges/Gen5 badges/Freezebadge.png')
  const legendImage = require('../Assets/Images/pokemon badges/Gen5 badges/Legendbadge.png')
  const toxicImage = require('../Assets/Images/pokemon badges/Gen5 badges/Toxicbadge.png')
  const waveImage = require('../Assets/Images/pokemon badges/Gen5 badges/Wavebadge.png')

  //Gen 6 Badges

  const bugImage = require('../Assets/Images/pokemon badges/Gen6 badges/Bugbadge.png')
  const cliffImage = require('../Assets/Images/pokemon badges/Gen6 badges/Cliffbadge.png')
  const rumbleImage = require('../Assets/Images/pokemon badges/Gen6 badges/Rumblebadge.png')
  const plantImage = require('../Assets/Images/pokemon badges/Gen6 badges/Plantbadge.png')
  const voltageImage = require('../Assets/Images/pokemon badges/Gen6 badges/Voltagebadge.png')
  const fairyImage = require('../Assets/Images/pokemon badges/Gen6 badges/Fairybadge.png')
  const psychicImage = require('../Assets/Images/pokemon badges/Gen6 badges/Psychicbadge.png')
  const icebergImage = require('../Assets/Images/pokemon badges/Gen6 badges/Icebergbadge.png')

  //Gen 7 badges

  const boulderImage7 = require('../Assets/Images/pokemon badges/Gen1 badges/Boulderbadge.png')
  const cascadeImage7 = require('../Assets/Images/pokemon badges/Gen1 badges/Cascadebadge.png')
  const thunderImage7 = require('../Assets/Images/pokemon badges/Gen1 badges/Thunderbadge.png')
  const rainbowImage7 = require('../Assets/Images/pokemon badges/Gen1 badges/Rainbowbadge.png')
  const soulImage7 = require('../Assets/Images/pokemon badges/Gen1 badges/Soulbadge.png')
  const marshImage7 = require('../Assets/Images/pokemon badges/Gen1 badges/Marshbadge.png')
  const volcanoImage7 = require('../Assets/Images/pokemon badges/Gen1 badges/Volcanobadge.png')
  const earthImage7 = require('../Assets/Images/pokemon badges/Gen1 badges/Earthbadge.png')

  //Gen 8 Badges

  const grassImage = require('../Assets/Images/pokemon badges/Gen7 badges/GrassBadge.png')
  const waterImage = require('../Assets/Images/pokemon badges/Gen7 badges/WaterBadge.png')
  const fireImage = require('../Assets/Images/pokemon badges/Gen7 badges/FireBadge.png')
  const fightingImage = require('../Assets/Images/pokemon badges/Gen7 badges/FightingBadge.png')
  const rockImage = require('../Assets/Images/pokemon badges/Gen7 badges/RockBadge.png')
  const darkImage = require('../Assets/Images/pokemon badges/Gen7 badges/DarkBadge.png')
  const dragonImage = require('../Assets/Images/pokemon badges/Gen7 badges/DragonBadge.png')
  const ghostImage = require('../Assets/Images/pokemon badges/Gen7 badges/GhostBadge.png')
  const iceImage = require('../Assets/Images/pokemon badges/Gen7 badges/IceBadge.png')
  const fairy2Image = require('../Assets/Images/pokemon badges/Gen7 badges/FairyBadge.png')


  //Score switch

  React.useEffect(() => {
    window.localStorage.setItem("maxScore", JSON.stringify(maxScore))
  }, [maxScore])

  const score = (e) => {
    if(correctName === e.target.value) {
      dispatch({type: 'increment'})
    } else {
      if(counter.count > maxScore) {
        setMaxscore(counter.count)
        dispatch({type: 'reset'})
      } else {
        dispatch({type: 'reset'})
      }
    }
  }

  //Check if you earnt a trophy

  const badges = (e) => {
    if(window.localStorage.getItem("token") !== null){
      if(navButton === 1 && correctName === e.target.value && answers1.includes(e.target.value) === false) {
        setAnswers1(answers1 => [...answers1, e.target.value])
      } else if(navButton === 2 && correctName === e.target.value && answers2.includes(e.target.value) === false) {
        setAnswers2(answers2 => [...answers2, e.target.value])
      } else if(navButton === 3 && correctName === e.target.value && answers3.includes(e.target.value) === false) {
        setAnswers3(answers3 => [...answers3, e.target.value])
      } else if(navButton === 4 && correctName === e.target.value && answers4.includes(e.target.value) === false) {
        setAnswers4(answers4 => [...answers4, e.target.value])
      } else if(navButton === 5 && correctName === e.target.value && answers5.includes(e.target.value) === false) {
        setAnswers5(answers5 => [...answers5, e.target.value])
      } else if(navButton === 6 && correctName === e.target.value && answers6.includes(e.target.value) === false) {
        setAnswers6(answers6 => [...answers6, e.target.value])
      } else if(navButton === 7 && correctName === e.target.value && answers7.includes(e.target.value) === false) {
        setAnswers7(answers7 => [...answers7, e.target.value])
      } else if(navButton === 8 && correctName === e.target.value && answers8.includes(e.target.value) === false) {
        setAnswers8(answers8 => [...answers8, e.target.value])
      }
    }
  }

  const checker = (needle, haystack) => needle.every(v => haystack.includes(v))

    React.useEffect(() => {

      //gen 1

      if(boulderBadge === false && checker(boulder[0], answers1) === true){
        setBoulderbadge(true)
        setShowbadge(true)
        setPokemonbadge(boulderImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Rock type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": true,
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(cascadeBadge === false && checker(cascade[0], answers1) === true){
        setCascadebadge(true)
        setShowbadge(true)
        setPokemonbadge(cascadeImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Water type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": true,
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(thunderBadge === false && checker(thunder[0], answers1) === true){
        setThunderbadge(true)
        setShowbadge(true)
        setPokemonbadge(thunderImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Electric type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": true,
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(rainbowBadge === false && checker(rainbow[0], answers1) === true){
        setRainbowbadge(true)
        setShowbadge(true)
        setPokemonbadge(rainbowImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Grass type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": true,
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(soulBadge === false && checker(soul[0], answers1) === true){
        setSoulbadge(true)
        setShowbadge(true)
        setPokemonbadge(soulImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Poison type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": true,
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(marshBadge === false && checker(marsh[0], answers1) === true){
        setMarshbadge(true)
        setShowbadge(true)
        setPokemonbadge(marshImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Psychic type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": true,
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(volcanoBadge === false && checker(volcano[0], answers1) === true){
        setVolcanobadge(true)
        setShowbadge(true)
        setPokemonbadge(volcanoImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Fire type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": true,
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(earthBadge === false && checker(earth[0], answers1) === true){
        setEarthbadge(true)
        setShowbadge(true)
        setPokemonbadge(earthImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Ground type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": true,
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }

      //gen 2

      if(zephyrBadge === false && checker(zephyr[0], answers2)  === true){
        setZephyrbadge(true)
        setShowbadge(true)
        setPokemonbadge(zephyrImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Flying type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": true,
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(hiveBadge === false && checker(hive[0], answers2)  === true){
        setHivebadge(true)
        setShowbadge(true)
        setPokemonbadge(hiveImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Bug type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": true,
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(plainBadge === false && checker(plain[0], answers2)  === true){
        setPlainbadge(true)
        setShowbadge(true)
        setPokemonbadge(plainImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Normal type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": true,
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(fogBadge === false && checker(fog[0], answers2)  === true){
        setFogbadge(true)
        setShowbadge(true)
        setPokemonbadge(fogImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Ghost type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": true,
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(stormBadge === false && checker(storm[0], answers2)  === true){
        setStormbadge(true)
        setShowbadge(true)
        setPokemonbadge(stormImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Fighting type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": true,
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(mineralBadge === false && checker(mineral[0], answers2)  === true){
        setMineralbadge(true)
        setShowbadge(true)
        setPokemonbadge(mineralImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Steel type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": true,
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(glacierBadge === false && checker(glacier[0], answers2)  === true){
        setGlacierbadge(true)
        setShowbadge(true)
        setPokemonbadge(glacierImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Ice type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": true,
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(risingBadge === false && checker(rising[0], answers2)  === true){
        setRisingbadge(true)
        setShowbadge(true)
        setPokemonbadge(risingImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Dragon type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": true,
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }

      //gen3

      if(stoneBadge === false && checker(stone[0], answers3) === true){
        setStonebadge(true)
        setShowbadge(true)
        setPokemonbadge(stoneImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Rock type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": true,
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(knuckleBadge === false && checker(knuckle[0], answers3) === true){
        setKnucklebadge(true)
        setShowbadge(true)
        setPokemonbadge(knuckleImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Fighting type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": true,
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(dynamoBadge === false && checker(dynamo[0], answers3) === true === true){
        setDynamobadge(true)
        setShowbadge(true)
        setPokemonbadge(dynamoImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Electric type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": true,
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(heatBadge === false && checker(heat[0], answers3) === true){
        setHeatbadge(true)
        setShowbadge(true)
        setPokemonbadge(heatImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Fire type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": true,
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(balanceBadge === false && checker(balance[0], answers3) === true){
        setBalancebadge(true)
        setShowbadge(true)
        setPokemonbadge(balanceImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Normal type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": true,
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(featherBadge === false && checker(feather[0], answers3) === true){
        setFeatherbadge(true)
        setShowbadge(true)
        setPokemonbadge(featherImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Flying type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": true,
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(mindBadge === false && checker(mind[0], answers3) === true){
        setMindbadge(true)
        setShowbadge(true)
        setPokemonbadge(mindImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Psychic type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": true,
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(rainBadge === false && checker(rain[0], answers3) === true){
        setRainbadge(true)
        setShowbadge(true)
        setPokemonbadge(rainImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Water type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": true,
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }

      //gen 4

      if(coalBadge === false && checker(coal[0], answers4) === true){
        setCoalbadge(true)
        setShowbadge(true)
        setPokemonbadge(coalImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Rock type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": true,
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(forestBadge === false && checker(forest[0], answers4) === true){
        setForestbadge(true)
        setShowbadge(true)
        setPokemonbadge(forestImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Grass type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": true,
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(cobbleBadge === false && checker(cobble[0], answers4) === true === true){
        setCobblebadge(true)
        setShowbadge(true)
        setPokemonbadge(cobbleImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Fighting type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": true,
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(fenBadge === false && checker(fen[0], answers4) === true){
        setFenbadge(true)
        setShowbadge(true)
        setPokemonbadge(fenImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Water type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": true,
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(relicBadge === false && checker(relic[0], answers4) === true){
        setRelicbadge(true)
        setShowbadge(true)
        setPokemonbadge(relicImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Ghost type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": true,
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(mineBadge === false && checker(mine[0], answers4) === true){
        setMinebadge(true)
        setShowbadge(true)
        setPokemonbadge(mineImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Steel type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": true,
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(icicleBadge === false && checker(icicle[0], answers4) === true){
        setIciclebadge(true)
        setShowbadge(true)
        setPokemonbadge(icicleImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Ice type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": true,
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(beaconBadge === false && checker(beacon[0], answers4) === true){
        setBeaconbadge(true)
        setShowbadge(true)
        setPokemonbadge(beaconImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Electric type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": true,
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }

      //gen 5

      if(trioBadge === false && checker(trio[0], answers5) === true){
        setTriobadge(true)
        setShowbadge(true)
        setPokemonbadge(trioImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Grass and Fire type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": true,
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(basicBadge === false && checker(basic[0], answers5) === true === true){
        setBasicbadge(true)
        setShowbadge(true)
        setPokemonbadge(basicImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Normal type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": true,
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(insectBadge === false && checker(insect[0], answers5) === true){
        setInsectbadge(true)
        setShowbadge(true)
        setPokemonbadge(insectImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Bug type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": true,
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(boltBadge === false && checker(bolt[0], answers5) === true){
        setBoltbadge(true)
        setShowbadge(true)
        setPokemonbadge(boltImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Electric type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": true,
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(quakeBadge === false && checker(quake[0], answers5) === true){
        setQuakebadge(true)
        setShowbadge(true)
        setPokemonbadge(quakeImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Ground type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": true,
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(jetBadge === false && checker(jet[0], answers5) === true){
        setJetbadge(true)
        setShowbadge(true)
        setPokemonbadge(jetImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Flying type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": true,
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(freezeBadge === false && checker(freeze[0], answers5) === true){
        setFreezebadge(true)
        setShowbadge(true)
        setPokemonbadge(freezeImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Ice type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": true,
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(legendBadge === false && checker(legend[0], answers5) === true){
        setLegendbadge(true)
        setShowbadge(true)
        setPokemonbadge(legendImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Dragon type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": true,
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(toxicBadge === false && checker(toxic[0], answers5) === true){
        setToxicbadge(true)
        setShowbadge(true)
        setPokemonbadge(toxicImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Poison type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": true,
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(waveBadge === false && checker(wave[0], answers5) === true){
        setWavebadge(true)
        setShowbadge(true)
        setPokemonbadge(waveImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Water type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": true,
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }

      //gen 6

      if(bugBadge === false && checker(bug[0], answers6) === true === true){
        setBugbadge(true)
        setShowbadge(true)
        setPokemonbadge(bugImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Bug type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": true,
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(cliffBadge === false && checker(cliff[0], answers6) === true){
        setCliffbadge(true)
        setShowbadge(true)
        setPokemonbadge(cliffImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Rock type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": true,
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(rumbleBadge === false && checker(rumble[0], answers6) === true){
        setRumblebadge(true)
        setShowbadge(true)
        setPokemonbadge(rumbleImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Fighting type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": true,
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(plantBadge === false && checker(plant[0], answers6) === true){
        setPlantbadge(true)
        setShowbadge(true)
        setPokemonbadge(plantImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Grass type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": true,
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(voltageBadge === false && checker(voltage[0], answers6) === true){
        setVoltagebadge(true)
        setShowbadge(true)
        setPokemonbadge(voltageImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Electric type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": true,
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(fairyBadge === false && checker(fairy[0], answers6) === true){
        setFairybadge(true)
        setShowbadge(true)
        setPokemonbadge(fairyImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Fairy type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": true,
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(psychicBadge === false && checker(psychic[0], answers6) === true){
        setPsychicbadge(true)
        setShowbadge(true)
        setPokemonbadge(psychicImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Psychic type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": true,
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(icebergBadge === false && checker(iceberg[0], answers6) === true){
        setIcebergbadge(true)
        setShowbadge(true)
        setPokemonbadge(icebergImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Ice type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": true,
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }

      //gen 7

      if(boulderBadge7 === false && checker(boulder7[0], answers7) === true){
        setBoulderbadge7(true)
        setShowbadge(true)
        setPokemonbadge(boulderImage7)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Rock type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": true,
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(cascadeBadge7 === false && checker(cascade7[0], answers7) === true){
        setCascadebadge7(true)
        setShowbadge(true)
        setPokemonbadge(cascadeImage7)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Water type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": true,
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(thunderBadge7 === false && checker(thunder7[0], answers7) === true){
        setThunderbadge7(true)
        setShowbadge(true)
        setPokemonbadge(thunderImage7)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Electric type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": true,
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(rainbowBadge7 === false && checker(rainbow7[0], answers7) === true){
        setRainbowbadge7(true)
        setShowbadge(true)
        setPokemonbadge(rainbowImage7)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Grass type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": true,
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(soulBadge7 === false && checker(soul7[0], answers7) === true){
        setSoulbadge7(true)
        setShowbadge(true)
        setPokemonbadge(soulImage7)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Poison type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": true,
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(marshBadge7 === false && checker(marsh7[0], answers7) === true){
        setMarshbadge7(true)
        setShowbadge(true)
        setPokemonbadge(marshImage7)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Psychic type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": true,
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(volcanoBadge7 === false && checker(volcano7[0], answers7) === true){
        setVolcanobadge7(true)
        setShowbadge(true)
        setPokemonbadge(volcanoImage7)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Fire type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": true,
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(earthBadge7 === false && checker(earth7[0], answers7) === true){
        setEarthbadge7(true)
        setShowbadge(true)
        setPokemonbadge(earthImage7)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Ground type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": true,
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }

      //gen 8

      if(grassBadge === false && checker(grass[0], answers8) === true){
        setGrassbadge(true)
        setShowbadge(true)
        setPokemonbadge(grassImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Grass type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": true,
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(waterBadge === false && checker(water[0], answers8) === true){
        setWaterbadge(true)
        setShowbadge(true)
        setPokemonbadge(waterImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All water type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": true,
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(fireBadge === false && checker(fire[0], answers8) === true){
        setFirebadge(true)
        setShowbadge(true)
        setPokemonbadge(fireImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Fire type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": true,
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(fightingBadge === false && checker(fighting[0], answers8) === true){
        setFightingbadge(true)
        setShowbadge(true)
        setPokemonbadge(fightingImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Fighting type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": true,
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(rockBadge === false && checker(rock[0], answers8) === true){
        setRockbadge(true)
        setShowbadge(true)
        setPokemonbadge(rockImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Rock type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": true,
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(darkBadge === false && checker(dark[0], answers8) === true){
        setDarkbadge(true)
        setShowbadge(true)
        setPokemonbadge(darkImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Dark type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": true,
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(dragonBadge === false && checker(dragon[0], answers8) === true){
        setDragonbadge(true)
        setShowbadge(true)
        setPokemonbadge(dragonImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Dragon type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": true,
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(ghostBadge === false && checker(ghost[0], answers8) === true){
        setGhostbadge(true)
        setShowbadge(true)
        setPokemonbadge(ghostImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Ghost type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": true,
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(iceBadge === false && checker(ice[0], answers8) === true){
        setIcebadge(true)
        setShowbadge(true)
        setPokemonbadge(iceImage)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Ice type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": JSON.parse(window.localStorage.getItem("fairy2Badge")),
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": true}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      if(fairy2Badge === false && checker(fairy2[0], answers8) === true){
        setFairy2badge(true)
        setShowbadge(true)
        setPokemonbadge(fairy2Image)
        setPokemonwho({
          filter: "none",
          padding: "100px"
        })
        setPokemonbadgetext("All Fairy type Pokemon revealed!")

        //update database user badges

        fetch("/.netlify/functions/app/auth/modifyBadges", {
          method: 'PUT',
          body: JSON.stringify({"boulder": JSON.parse(window.localStorage.getItem("boulderBadge")),
                                "cascade": JSON.parse(window.localStorage.getItem("cascadeBadge")),
                                "thunder": JSON.parse(window.localStorage.getItem("thunderBadge")),
                                "rainbow": JSON.parse(window.localStorage.getItem("rainbowBadge")),
                                "soul": JSON.parse(window.localStorage.getItem("soulBadge")),
                                "marsh": JSON.parse(window.localStorage.getItem("marshBadge")),
                                "volcano": JSON.parse(window.localStorage.getItem("volcanoBadge")),
                                "earth": JSON.parse(window.localStorage.getItem("earthBadge")),
                                "zephyr": JSON.parse(window.localStorage.getItem("zephyrBadge")),
                                "hive": JSON.parse(window.localStorage.getItem("hiveBadge")),
                                "plain": JSON.parse(window.localStorage.getItem("plainBadge")),
                                "fog": JSON.parse(window.localStorage.getItem("fogBadge")),
                                "storm": JSON.parse(window.localStorage.getItem("stormBadge")),
                                "mineral": JSON.parse(window.localStorage.getItem("mineralBadge")),
                                "glacier": JSON.parse(window.localStorage.getItem("glacierBadge")),
                                "rising": JSON.parse(window.localStorage.getItem("risingBadge")),
                                "stone": JSON.parse(window.localStorage.getItem("stoneBadge")),
                                "knuckle": JSON.parse(window.localStorage.getItem("knuckleBadge")),
                                "dynamo": JSON.parse(window.localStorage.getItem("dynamoBadge")),
                                "heat": JSON.parse(window.localStorage.getItem("heatBadge")),
                                "balance": JSON.parse(window.localStorage.getItem("balanceBadge")),
                                "feather": JSON.parse(window.localStorage.getItem("featherBadge")),
                                "mind": JSON.parse(window.localStorage.getItem("mindBadge")),
                                "rain": JSON.parse(window.localStorage.getItem("rainBadge")),
                                "coal": JSON.parse(window.localStorage.getItem("coalBadge")),
                                "forest": JSON.parse(window.localStorage.getItem("forestBadge")),
                                "cobble": JSON.parse(window.localStorage.getItem("cobbleBadge")),
                                "fen": JSON.parse(window.localStorage.getItem("fenBadge")),
                                "relic": JSON.parse(window.localStorage.getItem("relicBadge")),
                                "mine": JSON.parse(window.localStorage.getItem("mineBadge")),
                                "icicle": JSON.parse(window.localStorage.getItem("icicleBadge")),
                                "beacon": JSON.parse(window.localStorage.getItem("beaconBadge")),
                                "trio": JSON.parse(window.localStorage.getItem("trioBadge")),
                                "basic": JSON.parse(window.localStorage.getItem("basicBadge")),
                                "insect": JSON.parse(window.localStorage.getItem("insectBadge")),
                                "bolt": JSON.parse(window.localStorage.getItem("boltBadge")),
                                "quake": JSON.parse(window.localStorage.getItem("quakeBadge")),
                                "jet": JSON.parse(window.localStorage.getItem("jetBadge")),
                                "freeze": JSON.parse(window.localStorage.getItem("freezeBadge")),
                                "legend": JSON.parse(window.localStorage.getItem("legendBadge")),
                                "toxic": JSON.parse(window.localStorage.getItem("toxicBadge")),
                                "wave": JSON.parse(window.localStorage.getItem("waveBadge")),
                                "bug": JSON.parse(window.localStorage.getItem("bugBadge")),
                                "cliff": JSON.parse(window.localStorage.getItem("cliffBadge")),
                                "rumble": JSON.parse(window.localStorage.getItem("rumbleBadge")),
                                "plant": JSON.parse(window.localStorage.getItem("plantBadge")),
                                "voltage": JSON.parse(window.localStorage.getItem("voltageBadge")),
                                "fairy": JSON.parse(window.localStorage.getItem("fairyBadge")),
                                "psychic": JSON.parse(window.localStorage.getItem("psychicBadge")),
                                "iceberg": JSON.parse(window.localStorage.getItem("icebergBadge")),
                                "boulder7": JSON.parse(window.localStorage.getItem("boulderBadge7")),
                                "cascade7": JSON.parse(window.localStorage.getItem("cascadeBadge7")),
                                "thunder7": JSON.parse(window.localStorage.getItem("thunderBadge7")),
                                "rainbow7": JSON.parse(window.localStorage.getItem("rainbowBadge7")),
                                "soul7": JSON.parse(window.localStorage.getItem("soulBadge7")),
                                "marsh7": JSON.parse(window.localStorage.getItem("marshBadge7")),
                                "volcano7": JSON.parse(window.localStorage.getItem("volcanoBadge7")),
                                "earth7": JSON.parse(window.localStorage.getItem("earthBadge7")),
                                "grass": JSON.parse(window.localStorage.getItem("grassBadge")),
                                "water": JSON.parse(window.localStorage.getItem("waterBadge")),
                                "fire": JSON.parse(window.localStorage.getItem("fireBadge")),
                                "fighting": JSON.parse(window.localStorage.getItem("fightingBadge")),
                                "fairy2": true,
                                "rock": JSON.parse(window.localStorage.getItem("rockBadge")),
                                "dark": JSON.parse(window.localStorage.getItem("darkBadge")),
                                "dragon": JSON.parse(window.localStorage.getItem("dragonBadge")),
                                "ghost": JSON.parse(window.localStorage.getItem("ghostBadge")),
                                "ice": JSON.parse(window.localStorage.getItem("iceBadge"))}),
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
          }
        })
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === 'User updated successfully!'){
              console.log('User updated successfully!')
            } else {
              console.log(result.error.message);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      }

    }, [answers1, answers2, answers3, answers4, answers5, answers6, answers7, answers8, balance, balanceBadge, basic, basicBadge, beacon, beaconBadge, bolt, boltBadge, boulder, boulderBadge, bug, bugBadge, cascade, cascadeBadge, cliff, cliffBadge, coal, coalBadge, cobble, cobbleBadge, dark, darkBadge, dragon, dragonBadge, dynamo, dynamoBadge, earth, earthBadge, fairy, fairy2, fairy2Badge, fairyBadge, feather, featherBadge, fen, fenBadge, fighting, fightingBadge, fire, fireBadge, fog, fogBadge, forest, forestBadge, freeze, freezeBadge, ghost, ghostBadge, glacier, glacierBadge, grass, grassBadge, heat, heatBadge, hive, hiveBadge, ice, iceBadge, iceberg, icebergBadge, icicle, icicleBadge, insect, insectBadge, jet, jetBadge, knuckle, knuckleBadge, legend, legendBadge, marsh, marshBadge, mind, mindBadge, mine, mineBadge, mineral, mineralBadge, plain, plainBadge, plant, plantBadge, psychic, psychicBadge, quake, quakeBadge, rain, rainBadge, rainbow, rainbowBadge, relic, relicBadge, rising, risingBadge, rock, rockBadge, rumble, rumbleBadge, soul, soulBadge, stone, stoneBadge, storm, stormBadge, thunder, thunderBadge, toxic, toxicBadge, trio, trioBadge, volcano, volcanoBadge, voltage, voltageBadge, water, waterBadge, wave, waveBadge, zephyr, zephyrBadge, balanceImage, basicImage, beaconImage, boltImage, boulderImage, bugImage, cascadeImage, cliffImage, coalImage, cobbleImage, darkImage, dragonImage, dynamoImage, earthImage, fairy2Image, fairyImage, featherImage, fenImage, fightingImage, fireImage, fogImage, forestImage, freezeImage, ghostImage, glacierImage, grassImage, heatImage, hiveImage, iceImage, icebergImage, icicleImage, insectImage, jetImage, knuckleImage, legendImage, marshImage, mindImage, mineImage, mineralImage, plainImage, plantImage, psychicImage, quakeImage, rainImage, rainbowImage, relicImage, risingImage, rockImage, rumbleImage, soulImage, stoneImage, stormImage, thunderImage, toxicImage, trioImage, volcanoImage, voltageImage, waterImage, waveImage, zephyrImage, boulder7, boulderBadge7, boulderImage7, cascade7, cascadeBadge7, cascadeImage7, earth7, earthBadge7, earthImage7, marsh7, marshBadge7, marshImage7, rainbow7, rainbowBadge7, rainbowImage7, soul7, soulBadge7, soulImage7, thunder7, thunderBadge7, thunderImage7, volcano7, volcanoBadge7, volcanoImage7])

  //disable constant//
  const [disable, setDisable] = React.useState(true)
  const [disablePlay, setDisableplay] = React.useState(true)

  //pokedex constants//
  const [pokedexButton, setPokedexbutton] = React.useState(false)
  const [pokedexButtonStyle, setPokedexbuttonstyle] = React.useState({backgroundColor: 'blue', cursor: "pointer"})

  //pokedex//
  const pokedex = () => {
    if(pokedexButton === false) {
      if(audioPlay === true){turnOnplay.play()}
      setPokedexbutton(true)
      setPokedexbuttonstyle({backgroundColor: 'cyan', cursor: "pointer"})
      setDisableplay(false)
      setDisable(true)
      setButtonplay({backgroundColor: "blue", color: "white", cursor: "pointer"})
      setbuttonA({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonB({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonC({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonD({backgroundColor: "blue", color: "blue", cursor: "default"})
    } else {
      if(audioPlay === true){turnOffplay.play()}
      setPokedexbutton(false)
      setPokedexbuttonstyle({backgroundColor: 'blue', cursor: "pointer"})
      setDisableplay(true)
      setDisable(true)
      setButtonplay({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonA({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonB({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonC({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonD({backgroundColor: "blue", color: "blue", cursor: "default"})
    }
  }

  //pokemon data handler that sets the pokemon generation

  const pokemonDatahandler = (n) => {
    if (n === 1){
        setPokemondata(pokemons)
        setNumber(151)
        setPokemonA('bulbasaur')
        setPokemonB('mew')
        setPokemonC('charizard')
        setPokemonD('pikachu')
        setDisable(true)
        setButtonplay({backgroundColor: "blue", color: "white",})
        setbuttonA({backgroundColor: "blue", color: "blue", cursor: "default"})
        setbuttonB({backgroundColor: "blue", color: "blue", cursor: "default"})
        setbuttonC({backgroundColor: "blue", color: "blue", cursor: "default"})
        setbuttonD({backgroundColor: "blue", color: "blue", cursor: "default"})
        setPokemonwho({
          filter: "brightness(0)",
        })
    } else if(n === 2){
      setPokemondata(pokemons2)
      setNumber(251)
      setPokemonA('bulbasaur')
      setPokemonB('celebi')
      setPokemonC('charizard')
      setPokemonD('pikachu')
      setDisable(true)
      setButtonplay({backgroundColor: "blue", color: "white",})
      setbuttonA({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonB({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonC({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonD({backgroundColor: "blue", color: "blue", cursor: "default"})
      setPokemonwho({
        filter: "brightness(0)",
      })
    } else if(n === 3){
      setPokemondata(pokemons3)
      setNumber(252)
      setPokemonA('bulbasaur')
      setPokemonB('treecko')
      setPokemonC('charizard')
      setPokemonD('pikachu')
      setDisable(true)
      setButtonplay({backgroundColor: "blue", color: "white",})
      setbuttonA({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonB({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonC({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonD({backgroundColor: "blue", color: "blue", cursor: "default"})
      setPokemonwho({
        filter: "brightness(0)",
      })
    } else if(n === 4){
      setPokemondata(pokemons4)
      setNumber(387)
      setPokemonA('bulbasaur')
      setPokemonB('turtwig')
      setPokemonC('charizard')
      setPokemonD('pikachu')
      setDisable(true)
      setButtonplay({backgroundColor: "blue", color: "white",})
      setbuttonA({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonB({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonC({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonD({backgroundColor: "blue", color: "blue", cursor: "default"})
      setPokemonwho({
        filter: "brightness(0)",
      })
    } else if(n === 5){
      setPokemondata(pokemons5)
      setNumber(649)
      setPokemonA('bulbasaur')
      setPokemonB('genesect')
      setPokemonC('charizard')
      setPokemonD('pikachu')
      setDisable(true)
      setButtonplay({backgroundColor: "blue", color: "white",})
      setbuttonA({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonB({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonC({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonD({backgroundColor: "blue", color: "blue", cursor: "default"})
      setPokemonwho({
        filter: "brightness(0)",
      })
    } else if(n === 6){
      setPokemondata(pokemons6)
      setNumber(721)
      setPokemonA('bulbasaur')
      setPokemonB('volcanion')
      setPokemonC('charizard')
      setPokemonD('pikachu')
      setDisable(true)
      setButtonplay({backgroundColor: "blue", color: "white",})
      setbuttonA({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonB({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonC({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonD({backgroundColor: "blue", color: "blue", cursor: "default"})
      setPokemonwho({
        filter: "brightness(0)",
      })
    } else if(n === 7){
      setPokemondata(pokemons7)
      setNumber(809)
      setPokemonA('bulbasaur')
      setPokemonB('melmetal')
      setPokemonC('charizard')
      setPokemonD('pikachu')
      setDisable(true)
      setButtonplay({backgroundColor: "blue", color: "white",})
      setbuttonA({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonB({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonC({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonD({backgroundColor: "blue", color: "blue", cursor: "default"})
      setPokemonwho({
        filter: "brightness(0)",
      })
    } else if(n === 8){
      setPokemondata(pokemons8)
      setNumber(810)
      setPokemonA('bulbasaur')
      setPokemonB('grookey')
      setPokemonC('charizard')
      setPokemonD('pikachu')
      setDisable(true)
      setButtonplay({backgroundColor: "blue", color: "white",})
      setbuttonA({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonB({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonC({backgroundColor: "blue", color: "blue", cursor: "default"})
      setbuttonD({backgroundColor: "blue", color: "blue", cursor: "default"})
      setPokemonwho({
        filter: "brightness(0)",
      })
    } else {
        setPokemondata(pokemons)
    }
  }

  //play initializer//
  const play = async () => {

    correctplay.remove()
    incorrectplay.remove()
    turnOnplay.remove()
    turnOffplay.remove()

    //set answer buttons to blue and color white
    setbuttonA({backgroundColor: "blue", color: "white", cursor: "pointer"})
    setbuttonB({backgroundColor: "blue", color: "white", cursor: "pointer"})
    setbuttonC({backgroundColor: "blue", color: "white", cursor: "pointer"})
    setbuttonD({backgroundColor: "blue", color: "white", cursor: "pointer"})

    //Show pokemon Image
    setShowbadge(false)

    //make answer buttons active//
    setDisable(false)

    try {
      //shuffle pokemons and slice to four options//
      const shuffled = await pokemonData.sort(() => 0.5 - Math.random())
      const sliced = await shuffled.slice(0, 4)

      //retrieve correct pokemon name and number//
      const url = await sliced[0].url
      const regex = /(\d+)\/$/
      const getNumber = await url.match(regex)
      const number = await getNumber[1]
      const correctName = await sliced[0].name

      //set image dark//
      setPokemonwho({
        filter: "brightness(0)",
      })

      //shuffle four options//
      const slicedShuffled = await sliced === undefined ? "loading..." : sliced.sort(() => 0.5 - Math.random())
      const pokemonA = await slicedShuffled[0].name
      const pokemonB = await slicedShuffled[1].name
      const pokemonC = await slicedShuffled[2].name
      const pokemonD = await slicedShuffled[3].name

      //set pokemon states//
      setCorrectname(correctName)
      setNumber(number)
      setPokemonA(pokemonA)
      setPokemonB(pokemonB)
      setPokemonC(pokemonC)
      setPokemonD(pokemonD)

      //set button states//
      setbuttonA({backgroundColor: "blue"})
      setbuttonB({backgroundColor: "blue"})
      setbuttonC({backgroundColor: "blue"})
      setbuttonD({backgroundColor: "blue"})

    } catch(error) {
      alert(error)
    }
  }

  const answer = () => {
    if (pokemonA === correctName) {
      setbuttonA({backgroundColor: "green", boxShadow: "0 5px darkgreen"})
      setbuttonB({backgroundColor: "red", boxShadow: "0 5px brown"})
      setbuttonC({backgroundColor: "red", boxShadow: "0 5px brown"})
      setbuttonD({backgroundColor: "red", boxShadow: "0 5px brown"})
      //set image appear//
      setPokemonwho({
        filter: "none",
      })
    } else if (pokemonB === correctName) {
      setbuttonA({backgroundColor: "red", boxShadow: "0 5px brown"})
      setbuttonB({backgroundColor: "green", boxShadow: "0 5px darkgreen"})
      setbuttonC({backgroundColor: "red", boxShadow: "0 5px brown"})
      setbuttonD({backgroundColor: "red", boxShadow: "0 5px brown"})
      //set image appear//
      setPokemonwho({
        filter: "none",
      })
    } else if (pokemonC === correctName) {
      setbuttonA({backgroundColor: "red", boxShadow: "0 5px brown"})
      setbuttonB({backgroundColor: "red", boxShadow: "0 5px brown"})
      setbuttonC({backgroundColor: "green", boxShadow: "0 5px darkgreen"})
      setbuttonD({backgroundColor: "red", boxShadow: "0 5px brown"})
      //set image appear//
      setPokemonwho({
        filter: "none",
      })
    } else {
      setbuttonA({backgroundColor: "red", boxShadow: "0 5px brown"})
      setbuttonB({backgroundColor: "red", boxShadow: "0 5px brown"})
      setbuttonC({backgroundColor: "red", boxShadow: "0 5px brown"})
      setbuttonD({backgroundColor: "green", boxShadow: "0 5px darkgreen"})
      //set image appear//
      setPokemonwho({
        filter: "none",
      })
    }
  }

  //score pokedexScreen

  const Score = () => {
    if(pokedexButton === true) {
      return (<div className="score" alt="score">
        <div>Score: {counter.count} </div>
        <div>Highest score: {maxScore} </div>
      </div>)
    } else {
      return (<div className="score" alt="score"></div>)
    }
  }

  //background image

  var divStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
  }

  return (
    <div className="App" style={ divStyle }>

      <div className="game">

        <div alt="which pokemon">
        <img className="pokemon" alt="Pokemon" src={showBadge === false ? pokemonImage : pokemonBadge} style={pokemonWho} />
        <p className={showBadge === false ? null : "badgeText"}>{showBadge === false ? null : pokemonBadgetext}</p>
        </div>

        <div className="pokedex" alt="pokedex">

        <div className="pokedexTop" alt="pokedexTop">
          <button className="pokedex-button pokedex-init" alt="pokedex-button" style={pokedexButtonStyle} onClick={pokedex}>⚡</button>
          <button className="pokedex-button users" alt="Sound" style={{backgroundColor: audioPlay === true ? "green" : "red", textDecoration: "none", height: "40px", width: "40px", fontSize: "20px", cursor: "pointer"}} onClick={() => {audioPlay === true ? setAudioplay(false) : setAudioplay(true)}}>{audioEmoji}</button>
          <NavLink to="/about" className="pokedex-button users" alt="About" style={{backgroundColor: "yellow", textDecoration: "none", padding: "5px", fontSize: "20px"}}>❓</NavLink>
          <NavLink to="/timetrial" className="pokedex-button users" alt="Timetrial" style={{backgroundColor: "white", textDecoration: "none", padding: "5px", fontSize: "20px"}}>⏱️</NavLink>
          <button className="pokedex-button users" alt="Login" style={{backgroundColor: window.localStorage.getItem('token') !== null ? "green" : "red", textDecoration: "none", padding: "5px", fontSize: "20px", cursor: "pointer"}} onClick={() => { window.localStorage.getItem('token') !== null ? userLoggedin() : login() }}>{character}</button>
        </div>

          <Score />

          <div alt="play">
            <button className="button" disabled={disablePlay} style={buttonPlay} onClick={() => {play();}}>Play</button>
          </div>

          <div alt="answers">
              <button className="button-answer" disabled={disable} value={pokemonA.toLowerCase()} style={buttonA} onClick={(e) => {answer(); score(e); setDisable(true); badges(e);}}>{pokemonA.charAt(0).toUpperCase() + pokemonA.slice(1)}</button>
              <button className="button-answer" disabled={disable} value={pokemonB.toLowerCase()} style={buttonB} onClick={(e) => {answer(); score(e); setDisable(true); badges(e);}}>{pokemonB.charAt(0).toUpperCase() + pokemonB.slice(1)}</button>
              <button className="button-answer" disabled={disable} value={pokemonC.toLowerCase()} style={buttonC} onClick={(e) => {answer(); score(e); setDisable(true); badges(e);}}>{pokemonC.charAt(0).toUpperCase() + pokemonC.slice(1)}</button>
              <button className="button-answer" disabled={disable} value={pokemonD.toLowerCase()} style={buttonD} onClick={(e) => {answer(); score(e); setDisable(true); badges(e);}}>{pokemonD.charAt(0).toUpperCase() + pokemonD.slice(1)}</button>
          </div>

          <div alt="links">
            <button className="button buttonNav" alt="FirstGeneration" style={{backgroundColor: navButton === 1 ? "cyan" : "blue"}} onClick={(n) => {pokemonDatahandler(n = 1); setNavbutton(1);}}>1</button>
            <button className="button buttonNav"  alt="SecondGeneration" style={{backgroundColor: navButton === 2 ? "cyan" : "blue"}} onClick={(n) => {pokemonDatahandler(n = 2); setNavbutton(2);}}>2</button>
            <button className="button buttonNav" alt="ThirdGeneration" style={{backgroundColor: navButton === 3 ? "cyan" : "blue"}} onClick={(n) => {pokemonDatahandler(n = 3); setNavbutton(3);}}>3</button>
            <button className="button buttonNav" alt="FourthGeneration" style={{backgroundColor: navButton === 4 ? "cyan" : "blue"}} onClick={(n) => {pokemonDatahandler(n = 4); setNavbutton(4);}}>4</button>
            <button className="button buttonNav" alt="FifthGeneration" style={{backgroundColor: navButton === 5 ? "cyan" : "blue"}} onClick={(n) => {pokemonDatahandler(n = 5); setNavbutton(5);}}>5</button>
            <button className="button buttonNav" alt="SixthGeneration" style={{backgroundColor: navButton === 6 ? "cyan" : "blue"}} onClick={(n) => {pokemonDatahandler(n = 6); setNavbutton(6);}}>6</button>
            <button className="button buttonNav" alt="SeventhGeneration" style={{backgroundColor: navButton === 7 ? "cyan" : "blue"}} onClick={(n) => {pokemonDatahandler(n = 7); setNavbutton(7);}}>7</button>
            <button className="button buttonNav" alt="EigthGeneration" style={{backgroundColor: navButton === 8 ? "cyan" : "blue"}} onClick={(n) => {pokemonDatahandler(n = 8); setNavbutton(8);}}>8</button>
          </div>

        </div>

      </div>

    </div>
  );
}
