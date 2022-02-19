import background from '../Assets/Images/PokemonBackground.png';
import '../App.css';
import * as React from 'react';
import { NavLink } from "react-router-dom";


export default function FirstGeneration() {

  //First Generation Pokemon data

  const initialPokemons = React.useEffect(() => {
    if (window.localStorage.getItem('pokemons') === null){
      fetch('/.netlify/functions/app/api/gen1')
      .then((response) => response.json()
      .then((response) => {
        setPokemons(response)
      })
      .catch((error) => console.log(error))
    )
    }
  }, [])

  const [pokemons, setPokemons] = React.useState(
    () => JSON.parse(window.localStorage.getItem('pokemons')) ?? initialPokemons,
  )

  React.useEffect(() => {
    window.localStorage.setItem('pokemons', JSON.stringify(pokemons))
  }, [pokemons])

  //Second Generation Pokemon data

  const secondGeneration = React.useEffect(() => {
    if (window.localStorage.getItem('pokemons2') === null){
      fetch('/.netlify/functions/app/api/gen2')
      .then((response) => response.json()
      .then((response) => {
        setPokemons2(response)
      })
      .catch((error) => console.log(error))
    )
    }
  }, [])

  const [pokemons2, setPokemons2] = React.useState(
    () => JSON.parse(window.localStorage.getItem('pokemons2')) ?? secondGeneration,
  )

  React.useEffect(() => {
    window.localStorage.setItem('pokemons2', JSON.stringify(pokemons2))
  }, [pokemons2])

  //Third Generation Pokemon data

  const thirdGeneration = React.useEffect(() => {
    if (window.localStorage.getItem('pokemons3') === null){
      fetch('/.netlify/functions/app/api/gen3')
      .then((response) => response.json()
      .then((response) => {
        setPokemons3(response)
      })
      .catch((error) => console.log(error))
    )
    }
  }, [])

    const [pokemons3, setPokemons3] = React.useState(
      () => JSON.parse(window.localStorage.getItem('pokemons3')) ?? thirdGeneration,
    )

    React.useEffect(() => {
      window.localStorage.setItem('pokemons3', JSON.stringify(pokemons3))
    }, [pokemons3])

    //Fourth Generation Pokemon data

    const fourthGeneration = React.useEffect(() => {
      if (window.localStorage.getItem('pokemons4') === null){
        fetch('/.netlify/functions/app/api/gen4')
        .then((response) => response.json()
        .then((response) => {
          setPokemons4(response)
        })
        .catch((error) => console.log(error))
      )
      }
    }, [])

      const [pokemons4, setPokemons4] = React.useState(
        () => JSON.parse(window.localStorage.getItem('pokemons4')) ?? fourthGeneration,
      )

      React.useEffect(() => {
        window.localStorage.setItem('pokemons4', JSON.stringify(pokemons4))
      }, [pokemons4])

    //Fifth Generation Pokemon data

    const fifthGeneration = React.useEffect(() => {
      if (window.localStorage.getItem('pokemons5') === null){
        fetch('/.netlify/functions/app/api/gen5')
        .then((response) => response.json()
        .then((response) => {
          setPokemons5(response)
        })
        .catch((error) => console.log(error))
      )
      }
    }, [])

      const [pokemons5, setPokemons5] = React.useState(
        () => JSON.parse(window.localStorage.getItem('pokemons5')) ?? fifthGeneration,
      )

      React.useEffect(() => {
        window.localStorage.setItem('pokemons5', JSON.stringify(pokemons5))
      }, [pokemons5])

    //Sixth Generation Pokemon data

    const sixthGeneration = React.useEffect(() => {
      if (window.localStorage.getItem('pokemons6') === null){
        fetch('/.netlify/functions/app/api/gen6')
        .then((response) => response.json()
        .then((response) => {
          setPokemons6(response)
        })
        .catch((error) => console.log(error))
      )
      }
    }, [])

      const [pokemons6, setPokemons6] = React.useState(
        () => JSON.parse(window.localStorage.getItem('pokemons6')) ?? sixthGeneration,
      )

      React.useEffect(() => {
        window.localStorage.setItem('pokemons6', JSON.stringify(pokemons6))
      }, [pokemons6])

    //Seventh Generation Pokemon data

    const seventhGeneration = React.useEffect(() => {
      if (window.localStorage.getItem('pokemons7') === null)
      fetch('/.netlify/functions/app/api/gen7')
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

  //Pokemon data to be set depending on number button pressed

  const [pokemonData, setPokemondata] = React.useState(pokemons)

  //pokemon constants//
  const [correctName, setCorrectname] = React.useState('Mew')
  const [number, setNumber] = React.useState(151)
  const [pokemonA, setPokemonA] = React.useState('Bulbasaur')
  const [pokemonB, setPokemonB] = React.useState('Mew')
  const [pokemonC, setPokemonC] = React.useState('Charizard')
  const [pokemonD, setPokemonD] = React.useState('Pikachu')

  //button constants//
  const [buttonPlay, setButtonplay] = React.useState({backgroundColor: "blue", color: "blue",})
  const [buttonA, setbuttonA] = React.useState({backgroundColor: "blue", color: "blue",})
  const [buttonB, setbuttonB] = React.useState({backgroundColor: "blue", color: "blue",})
  const [buttonC, setbuttonC] = React.useState({backgroundColor: "blue", color: "blue",})
  const [buttonD, setbuttonD] = React.useState({backgroundColor: "blue", color: "blue",})

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

  //pokemon data handler

  const pokemonDatahandler = (n) => {
    if(n === 1){
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
    }
    if(n === 2){
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
    }
    if(n === 3){
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
    }
    if(n === 4){
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
    }
    if(n === 5){
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
    }
    if(n === 6){
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
    }
    if(n === 7){
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
        <img src={pokemonImage} style={pokemonWho} className="pokemon" alt="Pokemon" />
        </div>

        <div className="pokedex" alt="pokedex">

        <div className="pokedexTop" alt="pokedexTop">
          <button className="pokedex-button pokedex-init" alt="pokedex-button" style={pokedexButtonStyle} onClick={pokedex}>⚡</button>
          <NavLink to="/about" className="pokedex-button users" alt="About" style={{backgroundColor: "yellow", textDecoration: "none"}}>❓</NavLink>
          <NavLink to="/login" className="pokedex-button users" alt="Login" style={({ isLoggedIn }) => {
            return {backgroundColor: isLoggedIn ? "green" : "red", textDecoration: "none"};}}>🙋</NavLink>
        </div>

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
            <button className="button buttonNav" alt="FirstGeneration" onClick={(n) => {pokemonDatahandler(n = 1)}}>1</button>
            <button className="button buttonNav"  alt="SecondGeneration" onClick={(n) => {pokemonDatahandler(n = 2)}}>2</button>
            <button className="button buttonNav" alt="ThirdGeneration" onClick={(n) => {pokemonDatahandler(n = 3)}}>3</button>
            <button className="button buttonNav" alt="FourthGeneration" onClick={(n) => {pokemonDatahandler(n = 4)}}>4</button>
            <button className="button buttonNav" alt="FifthGeneration" onClick={(n) => {pokemonDatahandler(n = 5)}}>5</button>
            <button className="button buttonNav" alt="SixthGeneration" onClick={(n) => {pokemonDatahandler(n = 6)}}>6</button>
            <button className="button buttonNav" alt="SeventhGeneration" onClick={(n) => {pokemonDatahandler(n = 7)}}>7</button>
          </div>

        </div>

      </div>

    </div>
  );
}
