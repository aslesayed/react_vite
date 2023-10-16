import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from "./components/MyTitle"
import PokemonCard from "./components/PokemonCard"

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



function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);


  // const previousButton = ()=>{
  // if (pokemonIndex > 0){
  //   setPokemonIndex(pokemonIndex -1)
  // }};
  // const nextButton = ()=> {
  // if( pokemonIndex<pokemonList.length -1){
  //   setPokemonIndex(pokemonIndex +1)


  // }};


  return (
    <>
    <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    {pokemonIndex > 0 ? <button onClick={()=> setPokemonIndex (pokemonIndex-1)} >Previous</button> :""}
    {pokemonIndex< pokemonList.length -1 ? <button onClick={()=> setPokemonIndex (pokemonIndex +1)} >Next</button> :""}

    {/* <button onClick={previousButton} >Previous</button>
    <button onClick={nextButton} >Next</button> */}
    </>
    
    );
}


export default App;

