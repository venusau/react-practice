import { useState } from "react";
import { useEffect } from "react";
function Hook(){
    let url = "https://pokeapi.co/api/v2/pokemon/";
    let [poke, setPoke] = useState({name:"vicky", weight:""})
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
        <button onClick={()=> {fetchPoke("ditto")}}> call pokemon</button>
        {poke.name!="vicky" && <h1>{poke.name}</h1>}
        {poke.weight && <h1>{poke.weight}</h1>}
        
        </>
    )
}
export default Hook;