import background from '../Assets/Images/PokemonBackground.png';
import '../App.css';
import * as React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { FacebookShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, TelegramIcon, TwitterIcon, WhatsappIcon,} from "react-share";
import turnOn from "../Assets/Sounds/turn on.mp3";
import turnOff from "../Assets/Sounds/turn off.mp3";
import correct from "../Assets/Sounds/correct.mp3";
import incorrect from "../Assets/Sounds/incorrect.mp3";

export default function Timetrial() {

  const navigate = useNavigate();

  //Language settings

  const [language] = React.useState(
    () => JSON.parse(window.localStorage.getItem('language')) ?? "English"
  )

  React.useEffect(() => {
    window.localStorage.setItem('language', JSON.stringify(language))
  }, [language])

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

  // Timer constant

  const [timer, setTimer] = React.useState(-1)

  React.useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer])

  //counter constant//
  const initialCount = {count: 0}

  function reducer(counter, action) {
    switch (action.type) {
      case 'increment':
      return {count: counter.count + 1}
      case 'reset':
      return {count: counter.count = 0}
      default:
      throw new Error();
    }
  }

  const [counter, dispatch] = React.useReducer(reducer, initialCount)

  //Score switch

  const score = (e) => {
    if(correctName === e.target.value) {
      if(audioPlay === true){correctplay.play()}
      dispatch({type: 'increment'})
    } else {
      if(audioPlay === true){incorrectplay.play()}
      }
    }

  //disable constant//
  const [disable, setDisable] = React.useState(true)
  const [disablePlay, setDisableplay] = React.useState(true)

  //pokedex constants//
  const [pokedexButton, setPokedexbutton] = React.useState(false)
  const [pokedexButtonStyle, setPokedexbuttonstyle] = React.useState({backgroundColor: 'blue', cursor: "pointer", borderStyle: "none"})

  //pokedex//
  const pokedex = () => {
    if(pokedexButton === false) {
      if(audioPlay === true){turnOnplay.play()}
      setPokedexbutton(true)
      setPokedexbuttonstyle({backgroundColor: 'cyan', cursor: "pointer", borderStyle: "none"})
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
      setPokedexbuttonstyle({backgroundColor: 'blue', cursor: "pointer", borderStyle: "none"})
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
    if(pokedexButton === false){
      if (n === 1){
          setPokemondata(pokemons)
          setNumber(151)
          setPokemonA('bulbasaur')
          setPokemonB('mew')
          setPokemonC('charizard')
          setPokemonD('pikachu')
          setDisable(true)
          setButtonplay({backgroundColor: "blue", color: "blue",})
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
        setButtonplay({backgroundColor: "blue", color: "blue",})
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
        setButtonplay({backgroundColor: "blue", color: "blue",})
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
        setButtonplay({backgroundColor: "blue", color: "blue",})
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
        setButtonplay({backgroundColor: "blue", color: "blue",})
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
        setButtonplay({backgroundColor: "blue", color: "blue",})
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
        setButtonplay({backgroundColor: "blue", color: "blue",})
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
        setButtonplay({backgroundColor: "blue", color: "blue",})
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
    } else {
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
  }


  //play initializer//
  const play = async () => {
    correctplay.remove()
    incorrectplay.remove()
    turnOnplay.remove()
    turnOffplay.remove()

    if(timer === -1) {
      setTimer(60)
      dispatch({type: 'reset'})
    }

    //set answer buttons to blue and color white
    setbuttonA({backgroundColor: "blue", color: "white", cursor: "pointer"})
    setbuttonB({backgroundColor: "blue", color: "white", cursor: "pointer"})
    setbuttonC({backgroundColor: "blue", color: "white", cursor: "pointer"})
    setbuttonD({backgroundColor: "blue", color: "white", cursor: "pointer"})

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
      setTimeout(play, 200)
    } else if (pokemonB === correctName) {
      setbuttonA({backgroundColor: "red", boxShadow: "0 5px brown"})
      setbuttonB({backgroundColor: "green", boxShadow: "0 5px darkgreen"})
      setbuttonC({backgroundColor: "red", boxShadow: "0 5px brown"})
      setbuttonD({backgroundColor: "red", boxShadow: "0 5px brown"})
      //set image appear//
      setPokemonwho({
        filter: "none",
      })
      setTimeout(play, 200)
    } else if (pokemonC === correctName) {
      setbuttonA({backgroundColor: "red", boxShadow: "0 5px brown"})
      setbuttonB({backgroundColor: "red", boxShadow: "0 5px brown"})
      setbuttonC({backgroundColor: "green", boxShadow: "0 5px darkgreen"})
      setbuttonD({backgroundColor: "red", boxShadow: "0 5px brown"})
      //set image appear//
      setPokemonwho({
        filter: "none",
      })
      setTimeout(play, 200)
    } else {
      setbuttonA({backgroundColor: "red", boxShadow: "0 5px brown"})
      setbuttonB({backgroundColor: "red", boxShadow: "0 5px brown"})
      setbuttonC({backgroundColor: "red", boxShadow: "0 5px brown"})
      setbuttonD({backgroundColor: "green", boxShadow: "0 5px darkgreen"})
      //set image appear//
      setPokemonwho({
        filter: "none",
      })
      setTimeout(play, 200)
    }
  }

  //score pokedexScreen

  const Score = () => {
    if(pokedexButton === true) {
      return (<div className="score" alt="score">
        <div>{ language === "English" ? "Timer: " : "Tiempo: " }<label style={{color: timer > 40 ? "lightgreen" : timer > 20 ? "yellow" : "red"}}>{timer === -1 ? 0 : timer}</label> </div>
        <div>{ language === "English" ? "Score: " : "Puntuación: " }{counter.count}</div>
      </div>)
    } else {
      return (<div className="score" alt="score"></div>)
    }
  }

  //score shown when timer finishes

  const TimedScore = () => {
    if(timer === 0) {
      const pokeGen = navButton === 1 ? "First Generation Pokemon" : navButton === 2 ? "Second Generation Pokemon" : navButton === 3 ? "Third Generation Pokemon" : navButton === 4 ? "Fourth Generation Pokemon" : navButton === 5 ? "Fifth Generation Pokemon" : navButton === 6 ? "Sixth Generation Pokemon" : navButton === 7 ? "Seventh Generation Pokemon" : "Eighth Generation Pokemon";
      const pokeGenEs = navButton === 1 ? "Pokémon de Primera Generación" : navButton === 2 ? "Pokémon de Segunda Generación" : navButton === 3 ? "Pokémon de Tercera Generación" : navButton === 4 ? "Pokémon de Cuarta Generación" : navButton === 5 ? "Pokémon de Quinta Generación" : navButton === 6 ? "Pokémon de Sexta Generación" : navButton === 7 ? "Pokémon de Séptima Generación" : "Pokémon de Octava Generación";
      return (
        <div className="pokedex" alt="score" style={{ position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", zIndex: "1", width: "85%", height: "95%", textAlign: "center", color: "white" }}>
        <div alt="score container">
        <div>{language === "English" ? pokeGen : pokeGenEs} </div>
        <div>{language === "English" ? "Score: " : "Puntuación: "}{counter.count} </div>
        <div alt="share buttons">
        <button className="button" style={{ width: "28%"}} onClick={() => {navigator.clipboard.writeText(language === "English" ? pokeGen + "\n Score: " + counter.count + "\n How many can you guess?" : pokeGenEs + "\n Puntuación: " + counter.count + "\n Cuántos puedes adivinar?")}}>Copy</button>
        <FacebookShareButton url="https://whoisthatpoke.netlify.app/" quote={language === "English" ? pokeGen + "\n Score: " + counter.count + "\n How many can you guess?" : pokeGenEs + "\n Puntuación: " + counter.count + "\n Cuántos puedes adivinar?" }><FacebookIcon size={32} round={true} /></FacebookShareButton>
        <TelegramShareButton url="https://whoisthatpoke.netlify.app/" title={language === "English" ? pokeGen + "\n Score: " + counter.count + "\n How many can you guess?" : pokeGenEs + "\n Puntuación: " + counter.count + "\n Cuántos puedes adivinar?" }><TelegramIcon size={32} round={true} /></TelegramShareButton>
        <WhatsappShareButton url="https://whoisthatpoke.netlify.app/" title={language === "English" ? pokeGen + "\n Score: " + counter.count + "\n How many can you guess?" : pokeGenEs + "\n Puntuación: " + counter.count + "\n Cuántos puedes adivinar?" }><WhatsappIcon size={32} round={true} /></WhatsappShareButton>
        <TwitterShareButton url="https://whoisthatpoke.netlify.app/" title={language === "English" ? pokeGen + "\n Score: " + counter.count + "\n How many can you guess?" : pokeGenEs + "\n Puntuación: " + counter.count + "\n Cuántos puedes adivinar?" }><TwitterIcon size={32} round={true} /></TwitterShareButton>
        </div>
        <button className="button" style={{ width: "50%"}} onClick={() => {
          setTimer(-1);
          setDisable(true);
          setbuttonA({backgroundColor: "blue", color: "blue", cursor: "default"});
          setbuttonB({backgroundColor: "blue", color: "blue", cursor: "default"});
          setbuttonC({backgroundColor: "blue", color: "blue", cursor: "default"});
          setbuttonD({backgroundColor: "blue", color: "blue", cursor: "default"});
        }}>{language === "English" ? "Close" : "Cerrar"}</button>
         </div>
         </div>
    )
    } else {
      return (<></>)
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

    <TimedScore />

      <div className="game">

        <div alt="which pokemon">
        <img className="pokemon" alt="Pokemon" src={pokemonImage} style={pokemonWho} />
        </div>

        <div className="pokedex" alt="pokedex">

        <div className="pokedexTop" alt="pokedexTop">
          <button className="pokedex-button pokedex-init" alt="pokedex-button" style={pokedexButtonStyle} onClick={pokedex}>⚡</button>
          <button className="pokedex-button users" alt="Sound" style={{backgroundColor: audioPlay === true ? "green" : "red", textDecoration: "none", height: "40px", width: "40px", fontSize: "20px", cursor: "pointer", borderStyle: "none"}} onClick={() => {audioPlay === true ? setAudioplay(false) : setAudioplay(true)}}>{audioEmoji}</button>
          <NavLink to="/about" className="pokedex-button users" alt="About" style={{backgroundColor: "yellow", textDecoration: "none", padding: "5px", fontSize: "20px"}}>❓</NavLink>
          <NavLink to="/" className="pokedex-button users" alt="Home" style={{backgroundColor: "white", textDecoration: "none", padding: "5px", fontSize: "20px"}}>🏠</NavLink>
          <button className="pokedex-button users" alt="Login" style={{backgroundColor: window.localStorage.getItem('token') !== null ? "green" : "red", textDecoration: "none", padding: "5px", fontSize: "20px", cursor: "pointer", borderStyle: "none"}} onClick={() => { window.localStorage.getItem('token') !== null ? userLoggedin() : login() }}>{character}</button>
        </div>

          <Score />

          <div alt="play">
            <button className="button" disabled={disablePlay} style={buttonPlay} onClick={() => {play();}}>{language === "English" ? "Play" : "Jugar"}</button>
          </div>

          <div alt="answers">
              <button className="button-answer" disabled={disable} value={pokemonA.toLowerCase()} style={buttonA} onClick={(e) => {score(e); setDisable(true); answer();}}>{pokemonA.charAt(0).toUpperCase() + pokemonA.slice(1)}</button>
              <button className="button-answer" disabled={disable} value={pokemonB.toLowerCase()} style={buttonB} onClick={(e) => {score(e); setDisable(true); answer();}}>{pokemonB.charAt(0).toUpperCase() + pokemonB.slice(1)}</button>
              <button className="button-answer" disabled={disable} value={pokemonC.toLowerCase()} style={buttonC} onClick={(e) => {score(e); setDisable(true); answer();}}>{pokemonC.charAt(0).toUpperCase() + pokemonC.slice(1)}</button>
              <button className="button-answer" disabled={disable} value={pokemonD.toLowerCase()} style={buttonD} onClick={(e) => {score(e); setDisable(true); answer();}}>{pokemonD.charAt(0).toUpperCase() + pokemonD.slice(1)}</button>
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
