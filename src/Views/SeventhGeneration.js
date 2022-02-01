import background from '../Assets/Images/PokemonBackground.png';
import '../App.css';
import * as React from 'react'
import { NavLink } from "react-router-dom";

export default function SeventhGeneration() {

  const seventhGeneration = React.useEffect(() => {
    fetch('http://localhost:3001/api/gen7')
    .then((response) => response.json()
    .then((response) => {
      setPokemons7(response)
    })
    .catch((error) => console.log(error))
  )
  }, [])

    const [pokemons7, setPokemons7] = React.useState(
      () => JSON.parse(window.localStorage.getItem('pokemons7')) ?? seventhGeneration,
    )

    React.useEffect(() => {
      window.localStorage.setItem('pokemons7', JSON.stringify(pokemons7))
    }, [pokemons7])

    //pokemon constants//
    const [correctName, setCorrectname] = React.useState('melmetal')
    const [number, setNumber] = React.useState(809)
    const [pokemonA, setPokemonA] = React.useState('bulbasaur')
    const [pokemonB, setPokemonB] = React.useState('melmetal')
    const [pokemonC, setPokemonC] = React.useState('charizard')
    const [pokemonD, setPokemonD] = React.useState('pikachu')

    //button constants//
    const [buttonPlay, setButtonplay] = React.useState({backgroundColor: "blue", color: "blue",})
    const [buttonA, setbuttonA] = React.useState({backgroundColor: "blue", color: "blue",})
    const [buttonB, setbuttonB] = React.useState({backgroundColor: "blue", color: "blue",})
    const [buttonC, setbuttonC] = React.useState({backgroundColor: "blue", color: "blue",})
    const [buttonD, setbuttonD] = React.useState({backgroundColor: "blue", color: "blue",})

    //image constant//
    const [pokemonWho, setPokemonwho] = React.useState({
      filter: "brightness(0)",
    })
    const pokemonImage = require(`../../node_modules/pokemon-sprites/sprites/pokemon/other/official-artwork/${number}.png`)

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
    const [maxScore, setMaxscore] = React.useState(
      () => JSON.parse(window.localStorage.getItem("maxScore")) ?? counter.count,
    )

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

    //disable constant//
    const [disable, setDisable] = React.useState(true)
    const [disablePlay, setDisableplay] = React.useState(true)

    //pokedex constants//
    //const initPokedexButton = false
    //const [pokedexButton, setPokedexbutton] = React.useState(
      //() => JSON.parse(window.localStorage.getItem('pokedexButton')) ?? initPokedexButton,
    //)

    //React.useEffect(() => {
      //window.localStorage.setItem('pokedexButton', JSON.stringify(pokedexButton))
    //}, [pokedexButton])
    const [pokedexButton, setPokedexbutton] = React.useState(false)
    const [pokedexButtonStyle, setPokedexbuttonstyle] = React.useState({backgroundColor: 'blue'})
    const [pokedexScreen, setPokedexscreen] = React.useState({color: 'black'})

    //pokedex//
    const pokedex = () => {
      if(pokedexButton === false) {
        setPokedexbutton(true)
        setPokedexbuttonstyle({backgroundColor: 'cyan'})
        setPokedexscreen({color: 'lightgreen'})
        setDisableplay(false)
        setDisable(true)
        setButtonplay({backgroundColor: "blue", color: "white",})
        setbuttonA({backgroundColor: "blue", color: "white",})
        setbuttonB({backgroundColor: "blue", color: "white",})
        setbuttonC({backgroundColor: "blue", color: "white",})
        setbuttonD({backgroundColor: "blue", color: "white",})
      } else {
        setPokedexbutton(false)
        setPokedexbuttonstyle({backgroundColor: 'blue'})
        setPokedexscreen({color: 'black'})
        setDisableplay(true)
        setDisable(true)
        setButtonplay({backgroundColor: "blue", color: "blue",})
        setbuttonA({backgroundColor: "blue", color: "blue",})
        setbuttonB({backgroundColor: "blue", color: "blue",})
        setbuttonC({backgroundColor: "blue", color: "blue",})
        setbuttonD({backgroundColor: "blue", color: "blue",})
      }
    }

    //play initializer//
    const play = async () => {
      //make answer buttons active//
      setDisable(false)

      try {
        //shuffle pokemons and slice to four options//
        const shuffled = await pokemons7.sort(() => 0.5 - Math.random())
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
          <img src={pokemonImage} style={pokemonWho} className="pokemon" alt="Pokemon" />
          </div>

          <div className="pokedex" alt="pokedex">
            <button className="pokedex-button" alt="pokedex-button" style={pokedexButtonStyle} onClick={pokedex} />
            <div className="score" alt="score" style={pokedexScreen}>
              <div>Score: {counter.count} </div>
              <div>Highest score: {maxScore} </div>
            </div>

            <div alt="play">
              <button className="button" disabled={disablePlay} style={buttonPlay} onClick={play}>Play</button>
            </div>

            <div alt="answers">
              <button className="button" disabled={disable} value={pokemonA} style={buttonA} onClick={(e) => {answer(); score(e); setDisable(true);}}>{pokemonA}</button><button className="button" disabled={disable} value={pokemonB} style={buttonB} onClick={(e) => {answer(); score(e); setDisable(true);}}>{pokemonB}</button>
              <button className="button" disabled={disable} value={pokemonC} style={buttonC} onClick={(e) => {answer(); score(e); setDisable(true);}}>{pokemonC}</button><button className="button" disabled={disable} value={pokemonD} style={buttonD} onClick={(e) => {answer(); score(e); setDisable(true);}}>{pokemonD}</button>
            </div>

            <div alt="links">
              <NavLink to="/" className="button buttonNav" style={({ isActive }) => {
                return {backgroundColor: isActive ? "cyan" : ""};}} alt="FirstGeneration">1</NavLink>
              <NavLink to="/secondgeneration" className="button buttonNav" style={({ isActive }) => {
                return {backgroundColor: isActive ? "cyan" : ""};}}  alt="SecondGeneration">2</NavLink>
              <NavLink to="/thirdgeneration" className="button buttonNav" style={({ isActive }) => {
                return {backgroundColor: isActive ? "cyan" : ""};}}  alt="ThirdGeneration">3</NavLink>
              <NavLink to="/fourthgeneration" className="button buttonNav" style={({ isActive }) => {
                return {backgroundColor: isActive ? "cyan" : ""};}}  alt="FourthGeneration">4</NavLink>
              <NavLink to="/fifthgeneration" className="button buttonNav" style={({ isActive }) => {
                return {backgroundColor: isActive ? "cyan" : ""};}}  alt="FifthGeneration">5</NavLink>
              <NavLink to="/sixthgeneration" className="button buttonNav" style={({ isActive }) => {
                return {backgroundColor: isActive ? "cyan" : ""};}}  alt="SixthGeneration">6</NavLink>
              <NavLink to="/seventhgeneration" className="button buttonNav" style={({ isActive }) => {
                return {backgroundColor: isActive ? "cyan" : ""};}}  alt="SeventhGeneration">7</NavLink>
            </div>

          </div>

        </div>

      </div>
  );
};
