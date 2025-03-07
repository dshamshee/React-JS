import { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import './index.css'
import { PokemonCards } from './PokemonCards';
export const Pokemon = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [serach, setSearch] = useState("")

    const API = "https://pokeapi.co/api/v2/pokemon?limit=20";


    const fetchPokemon = async () => {
        try {
            // const res = await fetch(API);
            // const data = await res.json();
            // console.log(data)
            const res = await axios.get(API);
            const data = res.data; // axios provides a data property
            // console.log(data)

            const detailedPokemonData = data.results.map(async (curPokemon) => {
                // const res = await fetch(curPokemon.url)
                // const data = await res.json()
                // console.log(data);
                // return data
                

                const res = await axios.get(curPokemon.url);
                const data = res.data;
                console.log(data)
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
    // console.log(pokemon)



    // Search Functionality
    const serachData = pokemon.filter((curPokemon) => curPokemon.name.toLowerCase().includes(serach.toLowerCase()))

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error.message}</div>;
    }


    return (
        <>
            <section className='container'>
                <header>
                    <h1>Lets Catch Pokemon</h1>
                </header>

                <div className="pokemon-search">
                    <input type="text" placeholder='Search Pokemon' value={serach} onChange={(e) => setSearch(e.target.value)} />
                </div>

                <div>
                    <ul className="cards">
                        {
                            // pokemon.map((curPokemon) => {
                            serachData.map((curPokemon) => {
                                return <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}