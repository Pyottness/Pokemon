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

  //fetch all the pokemon data

  React.useEffect(() => {
    if (window.localStorage.getItem('pokemons') === null){
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
        setPokemons(gen1)
        setPokemondata(gen1)
        setPokemons2(gen2)
        setPokemons3(gen3)
        setPokemons4(gen4)
        setPokemons5(gen5)
        setPokemons6(gen6)
        setPokemons7(gen7)
      })
      .catch((error) => console.log(error))
    )
    }
  }, [])

  React.useEffect(() => {
    window.localStorage.setItem('pokemons', JSON.stringify(pokemons))
  }, [pokemons])

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

  const answersInit = []
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


  //Gen 1 Badges

  const [boulderBadge, setBoulderbadge] = React.useState(false)
  const [cascadeBadge, setCascadebadge] = React.useState(false)
  const [thunderBadge, setThunderbadge] = React.useState(false)
  const [rainbowBadge, setRainbowbadge] = React.useState(false)
  const [soulBadge, setSoulbadge] = React.useState(false)
  const [marshBadge, setMarshbadge] = React.useState(false)
  const [volcanoBadge, setVolcanobadge] = React.useState(false)
  const [earthBadge, setEarthbadge] = React.useState(false)

  const boulder = ["geodude", "graveler", "golem", "onix", "rhyhorn", "rhydon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl"]
  const cascade = ["squirtle", "wartortle", "blastoise", "psyduck", "golduck", "poliwag", "poliwhirl", "poliwrath", "tentacool", "tentacruel", "slowpoke", "slowbro", "seel", "dewgong", "shellder", "cloyster", "krabby", "kingler", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "magikarp", "gyarados", "lapras", "vaporeon", "omanyte", "omastar", "kabuto", "kabutops"]
  const thunder = ["pikachu", "raichu", "magnemite", "magneton", "voltorb", "electrode", "electabuzz", "jolteon", "zapdos", ]
  const rainbow = ["bulbasaur", "ivysaur", "venusaur", "oddish", "gloom", "vileplume", "paras", "parasect", "bellsprout", "weepinbell", "victreebel", "exeggcute", "exeggutor", "tangela"]
  const soul = ["bulbasaur", "ivysaur", "venusaur", "butterfree", "weedle", "kakuna", "beedrill", "ekans", "arbok", "nidoran-m", "nidoran-f", "nidorina", "nidorino", "nidoqueen", "nidoking", "zubat", "golbat", "oddish", "gloom", "vileplume", "venonat", "venomoth", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "grimer", "muk", "gastly", "haunter", "gengar", "koffing", "weezing"]
  const marsh = ["abra", "kadabra", "alakazam", "slowpoke", "slowbro", "drowzee", "hypno", "exeggcute", "exeggutor", "starmie", "mr-mime", "jynx", "mewtwo", "mew"]
  const volcano = ["charmander", "charmeleon", "charizard", "vulpix", "ninetales", "growlithe", "arcanine", "ponyta", "rapidash", "magmar", "flareon", "moltres"]
  const earth = ["sandshrew", "sandslash", "nidoqueen", "nidoking", "diglett", "dugtrio", "geodude", "graveler", "golem", "onix", "cubone", "marowak", "rhyhorn", "rhydon"]


  //Gen 2 Badges

  const [zephyrBadge, setZephyrbadge] = React.useState(false)
  const [hiveBadge, setHivebadge] = React.useState(false)
  const [plainBadge, setPlainbadge] = React.useState(false)
  const [fogBadge, setFogbadge] = React.useState(false)
  const [stormBadge, setStormbadge] = React.useState(false)
  const [mineralBadge, setMineralbadge] = React.useState(false)
  const [glacierBadge, setGlacierbadge] = React.useState(false)
  const [risingBadge, setRisingbadge] = React.useState(false)

  const zephyr = ["hoothoot", "noctowl", "ledyba", "ledian", "crobat", "togetic", "natu", "xatu", "hoppip", "skiploom", "jumpluff", "yanma", "murkrow", "gligar", "delibird", "mantine", "skarmory", "lugia", "ho-oh"]
  const hive = ["ledyba", "ledian", "spinarak", "ariados", "yanma", "pineco", "forretress", "scizor", "shuckle", "heracross"]
  const plain = ["sentret", "furret", "hoothoot", "noctowl", "igglybuff", "aipom", "girafarig", "dunsparce", "teddiursa", "ursaring", "porygon2", "stantler", "smeargle", "miltank", "blissey"]
  const fog = ["misdreavus"]
  const storm = ["heracross", "tyrogue", "hitmontop"]
  const mineral = ["forretress", "steelix", "scizor", "skarmory"]
  const glacier = ["sneasel", "swinub", "piloswine", "delibird", "smoochum"]
  const rising = ["kingdra"]

  //Gen 3 Badges

  const [stoneBadge, setStonebadge] = React.useState(false)
  const [knuckleBadge, setKnucklebadge] = React.useState(false)
  const [dynamoBadge, setDynamobadge] = React.useState(false)
  const [heatBadge, setHeatbadge] = React.useState(false)
  const [balanceBadge, setBalancebadge] = React.useState(false)
  const [featherBadge, setFeatherbadge] = React.useState(false)
  const [mindBadge, setMindbadge] = React.useState(false)
  const [rainBadge, setRainbadge] = React.useState(false)

  const stone = ["nosepass", "aron", "lairon", "aggron", "numel", "camerupt", "lunatone", "solrock", "lileep", "cradily", "anorith", "armaldo", "relicanth", "regirock"]
  const knuckle = ["combusken", "blaziken", "breloom", "makuhita", "hariyama", "meditite", "medicham"]
  const dynamo = ["electrike", "manectric", "plusle", "minun", "barboach", "whiscash", "corphish", "crawdaunt"]
  const heat = ["torchic", "combusken", "blaziken", "numel", "camerupt", "torkoal", "castform"]
  const balance = ["zigzagoon", "linoone", "taillow", "swellow", "slakoth", "vigoroth", "slaking", "whismur", "loudred", "exploud", "azurill", "skitty", "delcatty", "spinda", "swablu", "zangoose", "castform", "kecleon"]
  const feather = ["beautifly", "taillow", "swellow", "wingull", "pelipper", "masquerain", "ninjask", "swablu", "altaria", "tropius", "salamence", "rayquaza"]
  const mind = ["kirlia", "gardevoir", "meditite", "medicham", "spoink", "grumpig", "lunatone", "solrock", "baltoy", "claydol", "chimecho", "wynaut", "beldum", "metang", "metagross", "latias", "latios", "jirachi", "deoxys"]
  const rain = ["mudkip", "marshtomp", "swampert", "lotad", "lombre", "ludicolo", "wingull", "pelipper", "surskit", "carvanha", "sharpedo", "wailmer", "wailord", "feebas", "milotic", "castform", "spheal", "sealeo", "walrein", "clamperl", "huntail", "gorebyss", "relicanth", "luvdisc", "kyogre"]


  //Gen 4 Badges

  const [coalBadge, setCoalbadge] = React.useState(false)
  const [forestBadge, setForestbadge] = React.useState(false)
  const [cobbleBadge, setCobblebadge] = React.useState(false)
  const [fenBadge, setFenbadge] = React.useState(false)
  const [relicBadge, setRelicbadge] = React.useState(false)
  const [mineBadge, setMinebadge] = React.useState(false)
  const [icicleBadge, setIciclebadge] = React.useState(false)
  const [beaconBadge, setBeaconbadge] = React.useState(false)

  const coal = ["cranidos", "rampardos", "shieldon", "bastiodon", "bonsly", "rhyperior", "probopass"]
  const forest = ["turtwig", "grotle", "torterra", "budew", "roserade", "wormadam", "cherubi", "cherrim", "carnivine", "snover", "abomasnow"]
  const cobble = ["monferno", "infernape", "riolu", "lucario", "croagunk", "toxicroak", "gallade"]
  const fen = ["piplup", "prinplup", "empoleon", "bibarel", "buizel", "floatzel", "shellos", "gastrodon", "finneon", "lumineon", "mantyke", "rotom", "palkia", "phione", "manaphy"]
  const relic = ["drifloon", "drifblim", "mismagius", "spiritomb", "dusknoir", "froslass", "rotom", "giratina"]
  const mine = ["empoleon", "shieldon", "bastiodon", "wormadam", "bronzor", "bronzong", "lucario", "magnezone", "probopass", "dialga", "heatran"]
  const icicle = ["snover", "abomasnow", "weavile", "glaceon", "mamoswine", "froslass", "rotom"]
  const beacon = ["shinx", "luxio", "luxray", "pachirisu", "magnezone", "electivire", "rotom"]

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


  const trio = ["snivy", "servine", "serperior", "pansage", "simisage", "sewaddle", "swadloon", "leavanny", "cottonee", "whimsicott", "petilil", "lilligant", "maractus", "deerling", "sawsbuck", "foongus", "amoonguss", "ferroseed", "ferrothorn", "virizion", "victini", "tepig", "pignite", "emboar", "pansear", "simisear", "darumaka", "darmanitan", "litwick", "lampent", "chandelure", "heatmor", "larvesta", "volcarona", "reshiram"]
  const basic = ["patrat", "watchog", "lillipup", "herdier", "stoutland", "pidove", "tranquill", "unfezant", "audino", "minccino", "cinccino", "deerling", "sawsbuck", "bouffalant", "rufflet", "braviary", "meloetta"]
  const insect = ["sewaddle", "swadloon", "leavanny", "venipede", "whirlipede", "scolipede", "dwebble", "crustle", "karrablast", "escavalier", "joltik", "galvantula", "shelmet", "accelgor", "durant", "larvesta", "volcarona", "genesect"]
  const bolt = ["blitzle", "zebstrika", "emolga", "joltik", "galvantula", "tynamo", "eelektrik", "eelektross", "stunfisk", "thundurus", "zekrom"]
  const quake = ["drilbur", "excadrill", "palpitoad", "seismitoad", "sandile", "krokorok", "krookodile", "stunfisk", "golett", "golurk", "landorus"]
  const jet = ["pidove", "tranquill", "unfezant", "woobat", "swoobat", "sigilyph", "archen", "archeops", "ducklett", "swanna", "emolga", "rufflet", "braviary", "vullaby", "mandibuzz", "tornadus", "thundurus", "landorus"]
  const freeze = ["vanillite", "vanillish", "vanilluxe", "cubchoo", "beartic", "cryogonal", "kyurem"]
  const legend = ["axew", "fraxure", "haxorus", "druddigon", "deino", "zweilous", "hydreigon", "reshiram", "zekrom", "kyurem"]
  const toxic = ["venipede", "whirlipede", "scolipede", "trubbish", "garbodor", "foongus", "amoonguss"]
  const wave = ["oshawott", "dewott", "samurott", "panpour", "simipour", "tympole", "palpitoad", "seismitoad", "basculin", "tirtouga", "carracosta", "ducklett", "swanna", "frillish", "jellicent", "alomomola", "keldeo"]

  //Gen 6 Badges

  const [bugBadge, setBugbadge] = React.useState(false)
  const [cliffBadge, setCliffbadge] = React.useState(false)
  const [rumbleBadge, setRumblebadge] = React.useState(false)
  const [plantBadge, setPlantbadge] = React.useState(false)
  const [voltageBadge, setVoltagebadge] = React.useState(false)
  const [fairyBadge, setFairybadge] = React.useState(false)
  const [psychicBadge, setPsychicbadge] = React.useState(false)
  const [icebergBadge, setIcebergbadge] = React.useState(false)

  const bug = ["scatterbug", "spewpa", "vivillon"]
  const cliff = ["binacle", "barbaracle", "tyrunt", "tyrantrum", "amaura", "aurorus", "carbink", "diancie"]
  const rumble = ["chesnaught", "pancham", "pangoro", "hawlucha"]
  const plant = ["chespin", "quilladin", "chesnaught", "skiddo", "gogoat", "phantump", "trevenant", "pumpkaboo", "gourgeist"]
  const voltage = ["helioptile", "heliolisk", "dedenne"]
  const fairy = ["flabebe", "floette", "florges", "spritzee", "aromatisse", "swirlix", "slurpuff", "sylveon", "dedenne", "carbink", "klefki", "xerneas", "diancie"]
  const psychic = ["delphox", "espurr", "meowstic", "inkay", "malamar", "hoopa"]
  const iceberg = ["amaura", "aurorus", "bergmite", "avalugg"]

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

  const grass = ["rowlet", "dartrix", "decidueye", "fomantis", "lurantis", "morelull", "shiinotic", "bounsweet", "steenee", "tsareena", "dhelmise", "tapu", "kartana"]
  const water = ["popplio", "brionne", "primarina", "wishiwashi", "mareanie", "toxapex", "dewpider", "araquanid", "wimpod", "golisopod", "pyukumuku", "bruxish", "tapu"]
  const fire = ["litten", "torracat", "incineroar", "oricorio", "salandit", "salazzle", "turtonator", "blacephalon"]
  const fighting = ["crabrawler", "crabominable", "stufful", "bewear", "passimian", "hakamo", "kommo", "buzzwole", "pheromosa", "marshadow"]
  const fairy = ["primarina", "cutiefly", "ribombee", "morelull", "shiinotic", "comfey", "mimikyu", "tapu", "magearna"]
  const rock = ["rockruff", "lycanroc", "minior", "nihilego", "stakataka"]
  const dark = ["guzzlord"]
  const dragon = ["zygarde", "turtonator", "drampa", "jangmo", "hakamo", "kommo", "guzzlord", "necrozma", "naganadel"]
  const ghost = ["decidueye", "incineroar", "oricorio", "sandygast", "palossand", "mimikyu", "dhelmise", "lunala", "necrozma", "marshadow", "blacephalon"]
  const ice = ["crabominable"]


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
    if(navButton === 1 && correctName === e.target.value && answers1.includes(e.target.value) === false) {
      setAnswers1(answers1 => [...answers1, e.target.value])
      console.log(answers1)
    } else if(navButton === 2 && correctName === e.target.value && answers2.includes(e.target.value) === false) {
      setAnswers2(answers2 => [...answers2, e.target.value])
      console.log(answers2)
    } else if(navButton === 3 && correctName === e.target.value && answers3.includes(e.target.value) === false) {
      setAnswers3(answers3 => [...answers3, e.target.value])
      console.log(answers3)
    } else if(navButton === 4 && correctName === e.target.value && answers4.includes(e.target.value) === false) {
      setAnswers4(answers4 => [...answers4, e.target.value])
      console.log(answers4)
    } else if(navButton === 5 && correctName === e.target.value && answers5.includes(e.target.value) === false) {
      setAnswers5(answers5 => [...answers5, e.target.value])
      console.log(answers5)
    } else if(navButton === 6 && correctName === e.target.value && answers6.includes(e.target.value) === false) {
      setAnswers6(answers6 => [...answers6, e.target.value])
      console.log(answers6)
    } else if(navButton === 7 && correctName === e.target.value && answers7.includes(e.target.value) === false) {
      setAnswers7(answers7 => [...answers7, e.target.value])
      console.log(answers7)
    }
  }

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
      setbuttonA({backgroundColor: "blue", color: "white", cursor: "default"})
      setbuttonB({backgroundColor: "blue", color: "white", cursor: "default"})
      setbuttonC({backgroundColor: "blue", color: "white", cursor: "default"})
      setbuttonD({backgroundColor: "blue", color: "white", cursor: "default"})
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
        setbuttonA({backgroundColor: "blue", color: "white",})
        setbuttonB({backgroundColor: "blue", color: "white",})
        setbuttonC({backgroundColor: "blue", color: "white",})
        setbuttonD({backgroundColor: "blue", color: "white",})
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
      setbuttonA({backgroundColor: "blue", color: "white",})
      setbuttonB({backgroundColor: "blue", color: "white",})
      setbuttonC({backgroundColor: "blue", color: "white",})
      setbuttonD({backgroundColor: "blue", color: "white",})
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
      setbuttonA({backgroundColor: "blue", color: "white",})
      setbuttonB({backgroundColor: "blue", color: "white",})
      setbuttonC({backgroundColor: "blue", color: "white",})
      setbuttonD({backgroundColor: "blue", color: "white",})
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
      setbuttonA({backgroundColor: "blue", color: "white",})
      setbuttonB({backgroundColor: "blue", color: "white",})
      setbuttonC({backgroundColor: "blue", color: "white",})
      setbuttonD({backgroundColor: "blue", color: "white",})
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
      setbuttonA({backgroundColor: "blue", color: "white",})
      setbuttonB({backgroundColor: "blue", color: "white",})
      setbuttonC({backgroundColor: "blue", color: "white",})
      setbuttonD({backgroundColor: "blue", color: "white",})
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
      setbuttonA({backgroundColor: "blue", color: "white",})
      setbuttonB({backgroundColor: "blue", color: "white",})
      setbuttonC({backgroundColor: "blue", color: "white",})
      setbuttonD({backgroundColor: "blue", color: "white",})
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
      setbuttonA({backgroundColor: "blue", color: "white",})
      setbuttonB({backgroundColor: "blue", color: "white",})
      setbuttonC({backgroundColor: "blue", color: "white",})
      setbuttonD({backgroundColor: "blue", color: "white",})
      setPokemonwho({
        filter: "brightness(0)",
      })
    } else {
        setPokemondata(pokemons)
    }
  }

  //play initializer//
  const play = async () => {
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
        <img className="pokemon" alt="Pokemon" src={pokemonImage} style={pokemonWho} />
        </div>

        <div className="pokedex" alt="pokedex">

        <div className="pokedexTop" alt="pokedexTop">
          <button className="pokedex-button pokedex-init" alt="pokedex-button" style={pokedexButtonStyle} onClick={pokedex}>⚡</button>
          <button className="pokedex-button users" alt="Sound" style={{backgroundColor: audioPlay === true ? "green" : "red", textDecoration: "none", height: "40px", width: "40px", fontSize: "20px", cursor: "pointer"}} onClick={() => {audioPlay === true ? setAudioplay(false) : setAudioplay(true)}}>{audioEmoji}</button>
          <NavLink to="/about" className="pokedex-button users" alt="About" style={{backgroundColor: "yellow", textDecoration: "none", padding: "5px", fontSize: "20px"}}>❓</NavLink>
          <button className="pokedex-button users" alt="Login" style={{backgroundColor: window.localStorage.getItem('token') !== null ? "green" : "red", textDecoration: "none", padding: "5px", fontSize: "20px", cursor: "pointer"}} onClick={() => { window.localStorage.getItem('token') !== null ? userLoggedin() : login() }}>{character}</button>
        </div>

          <Score />

          <div alt="play">
            <button className="button" disabled={disablePlay} style={buttonPlay} onClick={() => {play();}}>Play</button>
          </div>

          <div alt="answers">
              <button className="button-answer" disabled={disable} value={pokemonA} style={buttonA} onClick={(e) => {answer(); score(e); setDisable(true); badges(e);}}>{pokemonA}</button>
              <button className="button-answer" disabled={disable} value={pokemonB} style={buttonB} onClick={(e) => {answer(); score(e); setDisable(true); badges(e);}}>{pokemonB}</button>
              <button className="button-answer" disabled={disable} value={pokemonC} style={buttonC} onClick={(e) => {answer(); score(e); setDisable(true); badges(e);}}>{pokemonC}</button>
              <button className="button-answer" disabled={disable} value={pokemonD} style={buttonD} onClick={(e) => {answer(); score(e); setDisable(true); badges(e);}}>{pokemonD}</button>
          </div>

          <div alt="links">
            <button className="button buttonNav" alt="FirstGeneration" style={{backgroundColor: navButton === 1 ? "cyan" : "blue"}} onClick={(n) => {pokemonDatahandler(n = 1); setNavbutton(1);}}>1</button>
            <button className="button buttonNav"  alt="SecondGeneration" style={{backgroundColor: navButton === 2 ? "cyan" : "blue"}} onClick={(n) => {pokemonDatahandler(n = 2); setNavbutton(2);}}>2</button>
            <button className="button buttonNav" alt="ThirdGeneration" style={{backgroundColor: navButton === 3 ? "cyan" : "blue"}} onClick={(n) => {pokemonDatahandler(n = 3); setNavbutton(3);}}>3</button>
            <button className="button buttonNav" alt="FourthGeneration" style={{backgroundColor: navButton === 4 ? "cyan" : "blue"}} onClick={(n) => {pokemonDatahandler(n = 4); setNavbutton(4);}}>4</button>
            <button className="button buttonNav" alt="FifthGeneration" style={{backgroundColor: navButton === 5 ? "cyan" : "blue"}} onClick={(n) => {pokemonDatahandler(n = 5); setNavbutton(5);}}>5</button>
            <button className="button buttonNav" alt="SixthGeneration" style={{backgroundColor: navButton === 6 ? "cyan" : "blue"}} onClick={(n) => {pokemonDatahandler(n = 6); setNavbutton(6);}}>6</button>
            <button className="button buttonNav" alt="SeventhGeneration" style={{backgroundColor: navButton === 7 ? "cyan" : "blue"}} onClick={(n) => {pokemonDatahandler(n = 7); setNavbutton(7);}}>7</button>
          </div>

        </div>

      </div>

    </div>
  );
}
