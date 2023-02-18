import React, {useState, useEffect} from "react"
import { useParams } from "react-router"
import { fetchOnePokemon } from "../../axios"

import '../pokemon-stat/pokemon-stat.css'

function PokemonStat() {
    const {id} = useParams()
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        async function fetchPokemon() {
            const data = await fetchOnePokemon(id)
            setPokemon(data)
            console.log(data)
        }

        fetchPokemon()
    }, [id])
    
    

    if(!pokemon) {
        return <div  className="pokemon-container"><h2>Loading...</h2></div>
    }

    return(
        <div className="pokemon-container">
        <h1># {id} {pokemon.name}</h1>
        <img className="pokemon-img" src={pokemon.sprites.front_default} alt={pokemon.name} />
        <div className="pound-container">
        <h3>Weight: {pokemon.weight}</h3>
        <h3>Height: {pokemon.height}</h3>
        </div>
        <h3>Types : {pokemon.types.map(types => types.type.name).join(', ')}</h3>
        <h3>Abilities : {pokemon.abilities.map(abilitie => abilitie.ability.name).join(', ')}</h3>
        </div>
        )
}

export default PokemonStat