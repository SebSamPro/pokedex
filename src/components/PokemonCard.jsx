function PokemonCard(props) {
  console.log(props.toto);

  return (
    <figure>
        {props.toto.imgSrc  ? <img src={props.toto.imgSrc}/> : <p>???</p> }
      <figcaption>
        {props.toto.name ? props.toto.name : '???'}</figcaption>
    </figure>
  )
}

export default PokemonCard;