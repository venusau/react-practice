import { useState } from "react";
import { useEffect } from "react";
function Hook(props){
    const {namePoke} =props
    let url = "https://pokeapi.co/api/v2/pokemon/";
    let [poke, setPoke] = useState({name:null, weight:null})
    async function fetchPoke(pokemon="pikachu"){
        url = url+ pokemon
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        let {name , weight}=data;
        setPoke({name, weight})
    }
    useEffect(() => {
        fetchPoke("");
    },[]); 

    return (
        <>
        <div>
        <button onClick={()=> {fetchPoke(namePoke)}}> call pokemon</button>
        {poke.name && <h1>{poke.name}</h1>}
        {poke.weight && <h1>{poke.weight}</h1>}
        </div>
        </>
    )
}
export default Hook;