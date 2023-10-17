function NavBar ({nextClick, prevClick, pokemonIndex, pokemonList}) {
    return ( 
        <>
        <button disabled={pokemonIndex <= 0} onClick={prevClick}>precedent</button>
        <button disabled= {pokemonIndex >= pokemonList.length -1} onClick={nextClick}>suivant</button>
        </>
     );
}

export default NavBar;