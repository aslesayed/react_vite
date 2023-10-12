

function PokemonCard() {
  const pokemon = pokemonList[1]
  return (
    <div className="pokemon-card">
      {pokemon.imgSrc  ? (
      <img src={pokemon.imgSrc} alt={pokemon.name} /> ) : 
      ( 
        <p>???</p>
      )}
      <h1> {pokemon.name} </h1>

     </div>
     );
    }


const pokemonList = [
  {
    name:"bulbasaur",
    imgSrc:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
    

  },
];

export default  PokemonCard;

