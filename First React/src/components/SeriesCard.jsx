import styles from "./Netflix.module.css";
import styled from "styled-components";

// export const SeriesCard = ({ data }) =>{  // We can also do this with destructuring to get data directly (data.name) 
export const SeriesCard = (props) => {
  // const { data } = props // Destructuring data (we get two values data & Key)
  const { img_url, name, rating, description, genre, cast, watch_url } = props.data; // Destructuring Entire data object and assigning it to individual variables

  // const btn_style = { }

  // Styled Components Objects 
  // const ButtonStyledComponents = styled.button({
  //   padding: "1.2rem 2.4rem",
  //   border: "none",
  //   fontSize: "1.6rem",
  //   backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //   color: "var(--btn-color)",
  //   fontWeight: "bold",
  //   cursor: "pointer"
  // })


  // Styled Components Litral 
  // In Styled-Components, you can pass a function within the tamplate literal to dinamically set CSS properties based on props or states 
  const ButtonStyledComponents = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.6rem;
    background-color: ${(props) => props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    color: var(--btn-color);
    font-weight: bold;
    cursor: pointer;
  `;

  const Rating = styled.h3`
  font-size: 1.6rem;
  color: #7dcea0;
  text-transform: capitalize;
  `


  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

  return (
    <li className={styles.card}>
      <div className="image">
        <img className="img" src={img_url} alt="" width="30%" height="30%" />
      </div>
      {/* <div className={styles["card-content"]}> */}
      <div className="flex flex-col gap-6 p-6">
        <h2>Name: {name}</h2>
        <Rating>
          Rating: <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
        </Rating>
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank">
          {/* <button style={btn_style}>Watch Now</button> */}

          {/* Using Styled Component Objects  */}
          {/* <ButtonStyledComponents>Watch Now</ButtonStyledComponents> */}

          {/* Using Styled Component Litral */}
          <ButtonStyledComponents rating={rating}>Watch Now</ButtonStyledComponents>
        </a>
      </div>
    </li>
  )
}