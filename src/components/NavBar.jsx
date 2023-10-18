import { useState } from 'react'


function NavBar({pokemonList, pokemonIndex, setpokemonIndex}){
/*   const [pokemonIndex , setpokemonIndex] = useState(0); */
console.log('pokelist',pokemonList);
  const handleNextClick = () => {
      setpokemonIndex(pokemonIndex +1)}
  const handlePrevClick = () => {
      setpokemonIndex(pokemonIndex -1)}
   const handleClick =(index) => {setpokemonIndex(index)

   }
      
    return(
        <>
 {/*    <button disabled={pokemonIndex <= 0} onClick={handlePrevClick}>precedent</button>
        <button disabled= {pokemonIndex >= pokemonList.length -1} onClick={handleNextClick}>suivant</button> */}

{
  pokemonList.map((pokemon,index)=>(
    <button key={pokemon.name} onClick={()=>handleClick(index)}>{pokemon.name}{index}</button>
  ))
}



        </>)
        
        
        

    
}

export default NavBar