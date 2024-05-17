import Axios from "axios";
import { useState } from "react"
// import Header from "./Dashboard/Header";

export default function SearchPage() {


  const [pokemonName, setPokemonName] = useState("");
  const url = "https://pokeapi.co/api/v2/pokemon/"
  const [pokemonChosen, setPokemonChosen] = useState("false")
  const [pokemonBio, setPokemonBio] = useState({
    name: "",
    species: "",
    img: "",
    type: "",
    // abilities: [],
    // moves: [],
    hp: "",
    attack: "",
    defense: "",

  });

  // const Favorite = {
  //   name: pokemonBio.name,
  //   hp: pokemonBio.hp,
  //   type: pokemonBio.type
  // }


  const AddFavorite = () => {

    // const sections = [pokemonBio.name,
    // pokemonBio.hp,
    // pokemonBio.type,
    // pokemonBio.img,]

    // const list = []

    // sections.forEach((value) => {
    //   const details = {}
    //   details.sections = value
    //   list.push(details)
    // });

    // console.log(list)


    interface Favorite {
      name: string;
      hp: string;
      type: string;
      img: string;
    }
    const addArray = true;
    const favorite: Favorite[] = [
      {
        name: pokemonBio.name,
        hp: pokemonBio.hp,
        type: pokemonBio.type,
        img: pokemonBio.img,
      }
    ];

    if (addArray && favorite.length > 0) {
      favorite.push({
        name: pokemonBio.name,
        hp: pokemonBio.hp,
        type: pokemonBio.type,
        img: pokemonBio.img,
      });
      console.log("This is fav1", favorite);

      localStorage.setItem('favorite', JSON.stringify(favorite));
    }



  }

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response: any) => {

        setPokemonBio({
          name: pokemonName,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
        });
        setPokemonChosen("true")


      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          if (error.response.data === "Not Found") {
            alert("Pokemon not found, please make sure to use lower case")
          }
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }

  return (
    <>
      <br />
      <div>
        <h2>What pokemon do you want to see today?</h2>
        <input type="text" value={pokemonName} onChange={e => setPokemonName(e.target.value)} />
        <br />
        <button onClick={searchPokemon}>Search</button>
      </div>
      <div className="pokemonName" id="pokemonName">{!pokemonChosen ? (<h1>{pokemonBio.name}</h1>) : (
        <>
          <div className="pokemonCard" id="pokemonCard">
            <h2>Name: {pokemonBio.name}</h2>
            <img src={pokemonBio.img} />
            <h2>Species :{pokemonBio.species}</h2>
            <h3>Type: {pokemonBio.type}</h3>
            <h3>HP: {pokemonBio.hp}</h3>
            <h3>Attack: {pokemonBio.attack}</h3>
            <h3>Defense: {pokemonBio.defense}</h3></div>

        </>)}
      </div >
      <button onClick={AddFavorite}>Add Favorite</button>

    </>
  );
}