export async function getStaticProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const pokemons = await res.json();

  return {
    props: {
      pokemons
    },
  };
}