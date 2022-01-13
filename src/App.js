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

  //const url = pokemons === undefined ? "151" : pokemons[0].url
  //const regex = /(\d+)\/$/
  //const getNumber = url === undefined ? "151" : url.match(regex)
  //const number = getNumber === null ? "151" : getNumber[1]

  const [correctName, setCorrectname] = React.useState('Mew')
  const [number, setNumber] = React.useState(151)
  const [pokemonA, setPokemonA] = React.useState('Bulbasaur')
  const [pokemonB, setPokemonB] = React.useState('Mew')
  const [pokemonC, setPokemonC] = React.useState('Charizard')
  const [pokemonD, setPokemonD] = React.useState('Pikachu')

  const play = async () => {
    //shuffle pokemons and slice to four options//
    const shuffled = await pokemons === undefined ? "loading..." : pokemons.sort(() => 0.5 - Math.random())
    const sliced = await shuffled === undefined ? "loading..." : shuffled.slice(0, 4)

    //retrieve correct pokemon name and number//
    const url = sliced === undefined ? "loading..." : sliced[0].url
    const regex = /(\d+)\/$/
    const getNumber = url === undefined ? "loading..." : url.match(regex)
    const number = getNumber === null ? "loading..." : getNumber[1]
    const correctName = sliced === undefined ? "loading..." : sliced[0].name

    //shuffle four options//
    const slicedShuffled = await sliced === undefined ? "loading..." : sliced.sort(() => 0.5 - Math.random())
    const pokemonA = slicedShuffled === undefined ? "loading..." : slicedShuffled[0].name
    const pokemonB = slicedShuffled === undefined ? "loading..." : slicedShuffled[1].name
    const pokemonC = slicedShuffled === undefined ? "loading..." : slicedShuffled[2].name
    const pokemonD = slicedShuffled === undefined ? "loading..." : slicedShuffled[3].name

    setCorrectname(correctName)
    setNumber(number)
    setPokemonA(pokemonA)
    setPokemonB(pokemonB)
    setPokemonC(pokemonC)
    setPokemonD(pokemonD)

    return null
  }

  const answer = () => {
    
  }

  var correct = {
    backgroundColor: "green"
  }
  var wrong = {
    backgroundColor: "red"
  }
  var divStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }
  var pokemonWho = {
    transform: "scale(0.8)",
    content: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png")`,
    filter: "brightness(0)",
  }


  return (
    <div className="App">

      <header className="App-header" style={ divStyle }>

        <div alt="which pokemon">
        <img style={ pokemonWho } className="Pokemon" alt="Pokemon" />
        </div>

        <div alt="play">
        <button className="button" onClick={play}>Play</button>
        <div>Hey, these are your Pokemon options. </div>
        </div>

        <div alt="answers">
        <button className="button" onClick={answer}>{pokemonA}</button><button className="button" onClick={answer}>{pokemonB}</button>
        <button className="button" onClick={answer}>{pokemonC}</button><button className="button" onClick={answer}>{pokemonD}</button>
        </div>

      </header>
    </div>
  );
}

export default App;
