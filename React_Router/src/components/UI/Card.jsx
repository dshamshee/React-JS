import { NavLink } from "react-router-dom"
import './Card.css'

export const Card = ({curMovie}) => {
    const {Poster, imgbID} = curMovie;
    return (
        <>
            <li className="hero-container">
                <div className="main-container">
                    <div className="poster-container">
                        <img src={Poster} alt="" className="poster" />
                    </div>
                    <div className="ticket-container">
                        <div className="ticket__content">
                            {/* <NavLink to={`/movie/${imgbID}`} > */}
                                <button className="ticket__buy-btn">Watch now</button>
                            {/* </NavLink> */}

                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}