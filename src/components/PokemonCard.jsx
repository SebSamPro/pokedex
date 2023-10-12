import PropsTypes from 'prop-types';

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

Pokemon.proTypes = {
  props : PropsTypes.shape({
    pokemon: propsType.shape({
  name: PropsTypes.string.isRequired,
  imgSrc: PropsTypes.string,
    }).isRequired
}).isRequired
}


export default PokemonCard;