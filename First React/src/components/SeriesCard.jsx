export const SeriesCard = (props) =>{
    return(
        <li>
          <div className="image">
            <img src={props.propElements.img_url} alt="" width="30%" height="30%" />
          </div>
          <h2>Name: {props.propElements.name}</h2>
          <h3>Rating: {props.propElements.rating}</h3>
          <p>Description: {props.propElements.description}</p>
          <p>Genre: {props.propElements.genre}</p>
          <p>Cast: {props.propElements.cast}</p>
          <a href={props.propElements.watch_url}> <button>Watch Now</button> </a>
        </li>
        )
}