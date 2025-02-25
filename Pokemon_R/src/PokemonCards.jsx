
export const PokemonCards = ({pokemonData})=>{
    console.log(pokemonData.sprites.other.dream_world.front_default)
    return(
        <li className="pokemon-card">
            <figure>
                <img className="pokemon-image" src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} />
            </figure>
        </li>
    )
}