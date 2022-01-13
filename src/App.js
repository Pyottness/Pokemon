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
    transform: "scale(0.8)",
    content: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png")`,
    filter: "brightness(0)",
  })

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

    //set image dark//
    setPokemonwho({
      transform: "scale(0.8)",
      content: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png")`,
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
        transform: "scale(0.8)",
        content: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png")`,
        filter: "none",
      })
    } else if (pokemonB === correctName) {
      setbuttonA({backgroundColor: "red"})
      setbuttonB({backgroundColor: "green"})
      setbuttonC({backgroundColor: "red"})
      setbuttonD({backgroundColor: "red"})
      //set image appear//
      setPokemonwho({
        transform: "scale(0.8)",
        content: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png")`,
        filter: "none",
      })
    } else if (pokemonC === correctName) {
      setbuttonA({backgroundColor: "red"})
      setbuttonB({backgroundColor: "red"})
      setbuttonC({backgroundColor: "green"})
      setbuttonD({backgroundColor: "red"})
      //set image appear//
      setPokemonwho({
        transform: "scale(0.8)",
        content: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png")`,
        filter: "none",
      })
    } else {
      setbuttonA({backgroundColor: "red"})
      setbuttonB({backgroundColor: "red"})
      setbuttonC({backgroundColor: "red"})
      setbuttonD({backgroundColor: "green"})
      //set image appear//
      setPokemonwho({
        transform: "scale(0.8)",
        content: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png")`,
        filter: "none",
      })
    }
  }

  var divStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }

  return (
    <div className="App">

      <header className="App-header" style={ divStyle }>

        <div alt="which pokemon">
        <img style={ pokemonWho } className="pokemon" alt="Pokemon" />
        </div>

        <div alt="play">
        <button className="button" onClick={play}>Play</button>
        <div>Hey, these are your Pokemon options. </div>
        </div>

        <div alt="answers">
        <button className="button" style={buttonA} onClick={answer}>{pokemonA}</button><button className="button" style={buttonB} onClick={answer}>{pokemonB}</button>
        <button className="button" style={buttonC} onClick={answer}>{pokemonC}</button><button className="button" style={buttonD} onClick={answer}>{pokemonD}</button>
        </div>

      </header>
    </div>
  );
}

export default App;
