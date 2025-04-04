// import { useParams } from "react-router-dom"

import { NavLink, useLoaderData } from "react-router-dom"

export const MovieDetails =()=>{

    // const params = useParams();
    // console.log(params)
    const movieData = useLoaderData() // /movie/:movieID route pe jo function call hua h wo jo bhi data le kar ayga wo useLoaderData Hook me store ho jayga automatically
    console.log(movieData)
    const {Title, Actor, Poster, Type, Year, Plot, BoxOffice, imdbID} = movieData

    return (
        <li className="hero-container hero-movie-container">
            <div className="main-container">
                <div className="poster-container">
                    {/* <NavLink to={"#"}> */}
                        <img src={Poster} alt={Title} />
                    {/* </NavLink> */}
                </div>
                <div className="ticket-container">
                    <div className="ticket__content">
                        <h4 className="ticket__movie-title">{Title}</h4>
                        <p>{Plot}</p>
                        <p className="ticket__current-price">Type:</p>
                        <p className="ticket__current-price">Type:</p>
                        <button className="ticket__buy-btn">Watch now</button>
                    </div>
                </div>
            </div>
        </li>
        // <h1>Just for checking useLoaderData values</h1>
    )
}