import { useEffect, useState } from 'react';
import './Pokemon.css';
import { CgPokemon } from 'react-icons/cg';
export const HowNotToFetchApi = () => {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

    // const fetchPokemon = () => {
    //     fetch(API)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setPokemon(data)
    //             setLoading(false)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //             setError(err);
    //             setLoading(false)
    //         })
    // }

    const fetchPokemon = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            setPokemon(data)
            setLoading(false)
        } catch (err) {
            console.log(err)
            setError(err);
            setLoading(false)
        }
    }


    useEffect(() => {
        fetchPokemon()
    }, [])

    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    if (error) {
        return (
            <div>
                <h1>Error: {error.message}</h1>
            </div>
        )
    }

    // if (pokemon) {
    return (
        <section className='container'>
            <header>
                <h1>Lets Catch a Pokemon!</h1>
            </header>
            <ul className='card-demo'>
                <li className="pokemon-card">
                    <figure>
                        <img
                            src={pokemon.sprites.other.dream_world.front_default}
                            alt={pokemon.name} />
                    </figure>
                    <h1>{pokemon.name}</h1>
                    <div className="grid-three-cols">
                        <p>
                            Height: <span>{pokemon.height}</span>
                        </p>
                        <p>
                            Weight: <span>{pokemon.weight}</span>
                        </p>
                        <p>
                            Speed: <span>{pokemon.stats[5].base_stat}</span>
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    )
    // }
}