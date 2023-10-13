import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'
import PropTypes from "prop-types";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
    },
  ];
  

  const [pokemonIndex , setpokemonIndex] = useState(0);
  
  const handleNextClick = () => {
    setpokemonIndex(pokemonIndex +1)}
  const handlePrevClick = () => {
    setpokemonIndex(pokemonIndex -1)}
  

  return (
    <div> <PokemonCard pokemon = {pokemonList[pokemonIndex]}/>
    <button disabled={pokemonIndex <= 0} onClick={handlePrevClick}>precedent</button>
    <button disabled= {pokemonIndex >= pokemonList.length -1} onClick={handleNextClick}>suivant</button>

    </div>
  )
  
}

export default App