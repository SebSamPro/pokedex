

function PokemonCard(props) {
  console.log(props.pokemon);

  return (
    <figure>
        {props.pokemon.imgSrc  ? <img src={props.pokemon.imgSrc}/> : <p>???</p> }
      <figcaption>
        {props.pokemon.name ? props.pokemon.name : '???'}</figcaption>
    </figure>
  )
}



export default PokemonCard;