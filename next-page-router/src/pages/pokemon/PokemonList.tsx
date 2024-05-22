import Header from "@/dashboard/Header";
import Link from "next/link";
import { useState } from "react";
import pokemon from "./pokemon/[id]";

export default function pokemonlist2({ pokemons,prev,next }) {
    const { results } = pokemons;
    const [nextUrl,setNextUrl]=useState<"string">();
const [prevUrl,setPrevUrl]=useState<"string">();
    return (
<>

<Header/>
{results.map((result) => (
          <div className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          key={result.name}>
             <a href={"pokemon/" + result.name}>
             <h2 className={`text-1xl font-semibold`}>{result.name} &rarr;</h2>


            </a>
          </div>


          
        ))}



{/* 
        <Link
          href={results.name}
          className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          key={results.name + "Card"}
        >
          <h2 className={`text-2xl font-semibold`}>
            {results.name.charAt(0).toUpperCase() + results.name.slice(1)}
          </h2>
        </Link> */}
    </>
    )
  }


  export async function getStaticProps() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const pokemons = await res.json();
    const next = pokemons.next;
    const prev = pokemons.previous;

    return {
        props: {
          pokemons,
          next,
          prev,

        },

        
      };
  }


// import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
// import next from 'next';
// import { useState } from 'react';
// const [nextUrl,setNextUrl]=useState<"string">();
// const [prevUrl,setPrevUrl]=useState<"string">();
// const [pokeDex,setPokeDex]=useState<"string">();
// interface ResponsePokemon {
//     next:string;
//     results: Poke[];
// }
// interface Poke  {
//   name: string,
//   img: string,
//   abilities:string,
// }


// export const getServerSideProps : GetServerSideProps = async () => {
//   // Fetch data from external API
//   const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
//   const data: ResponsePokemon = await res.json();
//   // Pass data to the page via props
//   const results = data.results;
//   const nextUrl = data.next;
  
//     setNextUrl(next);
//     setPrevUrl(res.data.previous);

//   console.log("inside props: "+data);
//   return {
//     props: {
//       results,
//       next,
      
//     },
  
// };
// };



// function listPokemon({next,results}:ResponsePokemon) {    
    
    

//     console.log(next);
//     console.log(results);
//     return(
//         <>
//         <div>
//             <h1>Pokemon Lists</h1>
//             <ul>
//                 {results&&results.map((item)=>{
//                     return(
//                         <>
//                         <li>{item.name}</li>
//                         </>
//                     );
//                 })}
//             </ul>
//             <div className="btn-group">
//                         {  prevUrl && <button onClick={()=>{
//                             setPokeData([])
//                            setUrl(prevUrl) 
//                         }}>Previous</button>}

//                         { nextUrl && <button onClick={()=>{
//                             setPokeData([])
//                             setUrl(nextUrl)
//                         }}>Next</button>}

//                     </div>
//         </div>
//         </>
//     );
// }
 


// //  export default listPokemon;
// import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
// import next from 'next';
// import React, { useState } from 'react';


// //     const [nextUrl,setNextUrl]=useState<string>();
// // const [prevUrl, setPrevUrl] = useState<string | undefined>();
// // const [pokeDex, setPokeDex] = useState<string>();

// interface ResponsePokemon {
//     next: string;
//     results: Poke[];
//     previous: string;
// }

// interface Poke {
//     name: string;
//     img: string;
//     abilities: string;
// }

// export const getServerSideProps: GetServerSideProps = (async () => {
//     // Fetch data from external API
//     const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
//     const data: ResponsePokemon = await res.json();

//     // Pass data to the page via props
//     const results = data.results;
//     const nextUrl = (prevState: any) => prevState ? prevState : data.next;


//     console.log("inside props: " + data);

//     return {
//         props: {
//             results,
//             next: nextUrl,
//         }
//     };

// }
// )

// function listPokemon({ next, results }: ResponsePokemon) {
//     console.log(next);
//     console.log(results);
//     function setPokeData(arg0: never[]) {
//         throw new Error('Function not implemented.');
//     }

//     function setUrl(prevUrl: string) {
//         throw new Error('Function not implemented.');
//     }

//     return (
//         <>
//             <div>
//                 <h1>Pokemon Lists</h1>
//                 <ul>
//                     {results && results.map((item) => (
//                         <li>{item.name}</li>
//                     ))}
//                 </ul>
//                 <div className="btn-group">
//                     {prevUrl && <button onClick={() => {
//                         setPokeData([]);
//                         setUrl(prevUrl);
//                     }}>Previous</button>}
//                     {next && <button onClick={() => {
//                         setPokeData([]);
//                         setUrl(next);
//                     }}>Next</button>}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default listPokemon;

// import React from "react";
// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";
// import Pokeinfo from "./PokeInfo";
// import Header from "../../dashboard/Header";
// import Card from "./Card";

// const PokemonList=()=>{
//     const [pokeData,setPokeData]=useState([]);
//     const [loading,setLoading]=useState(true);
//     const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
//     const [nextUrl,setNextUrl]=useState<"string">();
//     const [prevUrl,setPrevUrl]=useState<"string">();
//     const [pokeDex,setPokeDex]=useState<"string">();

//     const pokeFun=async()=>{
//         setLoading(true)
//         const res=await axios.get(url);
//         setNextUrl(res.data.next);
//         setPrevUrl(res.data.previous);
//         getPokemon(res.data.results)
//         setLoading(false)
//     }
//     const getPokemon=async(res)=>{
//        res.map(async(item)=>{
//           const result=await axios.get(item.url)
//           setPokeData(state=>{
//               state=[...state,result.data]
//               state.sort((a,b)=>a.id>b.id?1:-1)
//               return state;
//           })
//        })   
//     }
//     useEffect(()=>{
//         pokeFun();
//     },[url])
//     return(
//         <>
//         <Header/>
//             <div className="container">
//                 <div className="left-content">
//                     <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
                    
//                     <div className="btn-group">
//                         {  prevUrl && <button onClick={()=>{
//                             setPokeData([])
//                            setUrl(prevUrl) 
//                         }}>Previous</button>}

//                         { nextUrl && <button onClick={()=>{
//                             setPokeData([])
//                             setUrl(nextUrl)
//                         }}>Next</button>}

//                     </div>
//                 </div>
//                 <div className="right-content">
//                    <Pokeinfo data={pokeDex}/>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default PokemonList;