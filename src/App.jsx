import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar';

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
    <div> 
      <PokemonCard pokemon = {pokemonList[pokemonIndex]}/>
      <NavBar
        nextClick={handleNextClick}
        prevClick={handlePrevClick}
        pokemonIndex={pokemonIndex}
        setpokemonIndex={setpokemonIndex}
        pokemonList={pokemonList}
      />
    </div>
  )
  
}

export default App