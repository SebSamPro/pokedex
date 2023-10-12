function PokemonCard(props) {
  console.log(props.pokemonId);

  return (
    <figure>
        {props.pokemonId.imgSrc  ? <img src={props.pokemonId.imgSrc}/> : <p>???</p> }
      <figcaption>
        {props.pokemonId.name ? props.pokemonId.name : '???'}</figcaption>
    </figure>
  )
}

export default PokemonCard;