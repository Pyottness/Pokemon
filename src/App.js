import background from './PokemonBackground.png';
import './App.css';
import * as React from 'react'


function App() {

  const initialPokemons = React.useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((response) => response.json()
    .then((response) => {
      setPokemons(response.results)
    })
    .catch((error) => console.log(error))
  )
  }, [])

  const [pokemons, setPokemons] = React.useState(
    () => window.localStorage.getItem('pokemons') ?? initialPokemons,
  )

  React.useEffect(() => {
    window.localStorage.setItem('pokemons', JSON.stringify(pokemons))
  }, [pokemons])

  const url = pokemons === undefined ? "151" : pokemons[0].url
  const regex = /(\d+)\/$/
  const getNumber = url === undefined ? "151" : url.match(regex)
  const number = getNumber === null ? "151" : getNumber[1]

  const pokemonA = pokemons === undefined ? "loading..." : pokemons[0].name
  const pokemonB = pokemons === undefined ? "loading..." : pokemons[1].name
  const pokemonC = pokemons === undefined ? "loading..." : pokemons[2].name
  const pokemonD = pokemons === undefined ? "loading..." : pokemons[3].name

  const play = () => {
    //shuffle pokemons and slice to four options//
    const shuffled = pokemons === undefined ? "loading..." : pokemons.sort(() => 0.5 - Math.random())
    const sliced = shuffled === undefined ? "loading..." : shuffled.slice(0, 3)

    //retrieve correct pokemon name and number//
    const url = sliced === undefined ? "loading..." : sliced[0].url
    const regex = /(\d+)\/$/
    const getNumber = url === undefined ? "loading..." : url.match(regex)
    const number = getNumber === null ? "loading..." : getNumber[1]
    const correctName = sliced === undefined ? "loading..." : sliced[0].name

    //shuffle four options//
    const slicedShuffled = sliced === undefined ? "loading..." : sliced.sort(() => 0.5 - Math.random())
    const pokemonA = slicedShuffled === undefined ? "loading..." : slicedShuffled[0].name
    const pokemonB = slicedShuffled === undefined ? "loading..." : slicedShuffled[1].name
    const pokemonC = slicedShuffled === undefined ? "loading..." : slicedShuffled[2].name
    const pokemonD = slicedShuffled === undefined ? "loading..." : slicedShuffled[3].name

    return (
      correctName,
      number,
      pokemonA,
      pokemonB,
      pokemonC,
      pokemonD
    )
  }

  const answer = () => {

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
