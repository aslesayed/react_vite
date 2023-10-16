

function PokemonCard(props) {
  return (
    <div className="pokemon-card">
      {props.pokemon.imgSrc  ? (
      <img src={props.pokemon.imgSrc} alt={props.pokemon.name} /> ) : 
      ( 
        <p>???</p>
      )}
      <h1> {props.pokemon.name} </h1>

     </div>
     );
    }




export default  PokemonCard;

