import { useEffect, useState } from "react";
import Header from "../../dashboard/Header";

export default function FavoritePokemon() {
  const [catResponse, setCatResponse] = useState<Category[]>([]);

  interface PokemonFav {
    name: string,
    species: string,
    type: string,
    img: string,
  }
  const [fav, setFav] = useState([]);
  const [newFav, setNewFav] = useState([]);
  const newFav2 = localStorage.getItem('favorite')


  console.log(newFav2);



  const favList: PokemonFav = [{}]
  const getArray = JSON.parse(localStorage.getItem('favorite') || '0');

  console.log("This is get array", getArray);


  async function deletePokemon(name: string) {
    localStorage.removeItem(getArray[0].name);
    alert("Pokemon deleted")
    console.log(name)

    const newFav = fav.filter((fav) => fav[0] !== name);
    setFav([...newFav]);

  }


  return (
    <>
      <Header />
      <h1>Favorite Pokemon</h1>

      <table className="min-w-full bg-white border border-gray-50" >
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Hp</th>
            <th scope="col">Type</th>
          </tr>
        </thead>

        <tbody>

          <tr key={getArray[0].name}>
            <td>{getArray[0].name}</td>
            <td><img src={getArray[0].img} /></td>
            <td>{getArray[0].hp}</td>
            <td>{getArray[0].type}</td>
            <td>

              {/* <button className="btn btn-danger" onClick={() => deletePokemon(getArray[0].name)}>Delete</button> */}
            </td>
          </tr>


        </tbody>

      </table >
      <></>
    </>
  );

}