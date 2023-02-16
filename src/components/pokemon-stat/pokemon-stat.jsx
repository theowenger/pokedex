import React, {useState, useEffect} from "react"
import { useParams } from "react-router"
import { fetchOnePokemon } from "../../axios"

function PokemonStat() {
    const {id} = useParams()
    console.log(id)
    const [pokemon, setPokemon] = useState(null)
    console.log(pokemon)

    useEffect(() => {
        async function fetchPokemon() {
            const data = await fetchOnePokemon(id)
            setPokemon(data)
        }

        fetchPokemon()
    }, [id])

    if(!pokemon) {
        return <div>Loading...</div>
    }

    return(
        <div className="pokemon-container">
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h3>Weight: {pokemon.weight} cm</h3>
        <h3>Height: {pokemon.height} kg</h3>
        </div>
        )
}

export default PokemonStat