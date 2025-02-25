import { useEffect } from 'react'
import './index.css'
import { useState } from 'react';
import { PokemonCards } from './PokemonCards';
export const Pokemon = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading ] = useState(true);
    const [error, setError] = useState(null);

    const API = "https://pokeapi.co/api/v2/pokemon?limit=24";


    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            // console.log(data)

            const detailedPokemonData = data.results.map(async (curPokemon) => {
                const res = await fetch(curPokemon.url)
                const data = await res.json()
                return data;
            })

            const detailedResponses = await Promise.all(detailedPokemonData);
            setPokemon(detailedResponses)
            setLoading(false);
            
        } catch (error) {
            console.log(error)
            setLoading(false);
            setError(error);
        }
    }
    
    useEffect(() => {
        fetchPokemon();
    }, [])

    if(loading){
        return <div>Loading...</div>;
    }
    
    if(error){
        return <div>{error.message}</div>;
    }
    
   
    return (
        <>
            <section className='container'>
                <header>
                    <h1>Lets Catch Pokemon</h1>
                </header>

                <div>
                    <ul className="cards">
                        {
                            pokemon.map((curPokemon)=>{
                                return <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />
                            })
                        }
                    </ul>
                </div>



            </section>
        </>
    )
}