
import { NavLink } from 'react-router-dom';
import './Card.css'

export const Card = ({movieData}) => {
    const {Poster, imdbID} = movieData;
    return (
        <>
            <li className="hero-container">
                <div className="main-container">
                    <div className="poster-container">
                        <img src={Poster} alt="" className="poster" />
                    </div>
                    <div className="ticket-container">
                        <div className="ticket__content">
                            {/* <NavLink to={`/movie/${imdbID}`} >
                                <button className="ticket__buy-btn">Watch now</button>
                            </NavLink> */}
                            <button className='ticket__buy-btn'>Watch now</button>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}