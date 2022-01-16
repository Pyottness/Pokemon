import background from './PokemonBackground.png';
import './App.css';
import * as React from 'react'


function App() {
  const [pokemons, setPokemons] = React.useState(
    () => JSON.parse(window.localStorage.getItem('pokemons')) ?? initialPokemons,
  )

  const initialPokemons = React.useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((response) => response.json()
    .then((response) => {
      setPokemons(response.results)
    })
    .catch((error) => console.log(error))
  )
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
  const [buttonA, setbuttonA] = React.useState({backgroundColor: "blue"})
  const [buttonB, setbuttonB] = React.useState({backgroundColor: "blue"})
  const [buttonC, setbuttonC] = React.useState({backgroundColor: "blue"})
  const [buttonD, setbuttonD] = React.useState({backgroundColor: "blue"})

  //image constant//
  const [pokemonWho, setPokemonwho] = React.useState({
    filter: "brightness(0)",
  })
  const pokemonImage = require(`../node_modules/pokemon-sprites/sprites/pokemon/other/official-artwork/${number}.png`)

  //handle input//

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
  const [disable, setDisable] = React.useState(false)

  //play initializer//
  const play = async () => {
    //make answer buttons active//
    setDisable(false)

    //shuffle pokemons and slice to four options//
    const shuffled = await pokemons === undefined ? "loading..." : pokemons.sort(() => 0.5 - Math.random())
    const sliced = await shuffled === undefined ? "loading..." : shuffled.slice(0, 4)

    //retrieve correct pokemon name and number//
    const url = await sliced === undefined ? "loading..." : sliced[0].url
    const regex = /(\d+)\/$/
    const getNumber = await url === undefined ? "loading..." : url.match(regex)
    const number = await getNumber === null ? "loading..." : getNumber[1]
    const correctName = await sliced === undefined ? "loading..." : sliced[0].name

    //set image dark//
    setPokemonwho({
      filter: "brightness(0)",
    })

    //shuffle four options//
    const slicedShuffled = await sliced === undefined ? "loading..." : sliced.sort(() => 0.5 - Math.random())
    const pokemonA = slicedShuffled === undefined ? "loading..." : slicedShuffled[0].name
    const pokemonB = slicedShuffled === undefined ? "loading..." : slicedShuffled[1].name
    const pokemonC = slicedShuffled === undefined ? "loading..." : slicedShuffled[2].name
    const pokemonD = slicedShuffled === undefined ? "loading..." : slicedShuffled[3].name

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

    return null
  }

  const answer = () => {
    if (pokemonA === correctName) {
      setbuttonA({backgroundColor: "green"})
      setbuttonB({backgroundColor: "red"})
      setbuttonC({backgroundColor: "red"})
      setbuttonD({backgroundColor: "red"})
      //set image appear//
      setPokemonwho({
        filter: "none",
      })
    } else if (pokemonB === correctName) {
      setbuttonA({backgroundColor: "red"})
      setbuttonB({backgroundColor: "green"})
      setbuttonC({backgroundColor: "red"})
      setbuttonD({backgroundColor: "red"})
      //set image appear//
      setPokemonwho({
        filter: "none",
      })
    } else if (pokemonC === correctName) {
      setbuttonA({backgroundColor: "red"})
      setbuttonB({backgroundColor: "red"})
      setbuttonC({backgroundColor: "green"})
      setbuttonD({backgroundColor: "red"})
      //set image appear//
      setPokemonwho({
        filter: "none",
      })
    } else {
      setbuttonA({backgroundColor: "red"})
      setbuttonB({backgroundColor: "red"})
      setbuttonC({backgroundColor: "red"})
      setbuttonD({backgroundColor: "green"})
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

        <div alt="play">
        <button className="button" onClick={play}>Play</button>
        <div>Hey, these are your Pokemon options. </div>
        </div>

        <div alt="answers">
        <button className="button" disabled={disable} value={pokemonA} style={buttonA} onClick={(e) => {answer(); score(e); setDisable(true);}}>{pokemonA}</button><button className="button" disabled={disable} value={pokemonB} style={buttonB} onClick={(e) => {answer(); score(e); setDisable(true);}}>{pokemonB}</button>
        <button className="button" disabled={disable} value={pokemonC} style={buttonC} onClick={(e) => {answer(); score(e); setDisable(true);}}>{pokemonC}</button><button className="button" disabled={disable} value={pokemonD} style={buttonD} onClick={(e) => {answer(); score(e); setDisable(true);}}>{pokemonD}</button>
        </div>

        <div alt="counter">
          <div>Score: {counter.count} </div>
          <div>Highest score: {maxScore} </div>
        </div>

      </div>

    </div>
  );
}

export default App;
