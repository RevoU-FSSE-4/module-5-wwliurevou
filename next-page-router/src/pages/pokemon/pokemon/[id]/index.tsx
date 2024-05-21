import Link from "next/link";

export default function pokemon({ pokemon }) {
  return (
    <>

    <header/>
        <h1>Pokemon - {pokemon.name}</h1>

        <div >
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            width="200"
            height="200"
          />
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>
        <Link href="/pokemon/pokemonlist" >
          back
        </Link>
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await res.json();
  return {
    props: { pokemon },
  };
}