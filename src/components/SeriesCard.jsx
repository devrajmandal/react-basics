import styles from "./Netflix.module.css";
import styled from "styled-components";

export const SeriesCard = (props) => {
  // const {curElem} = props;
  const { id, img_url, name, rating, description, genre, cast, watch_url } =
    props.curElem;

  // const ButtonDev = styled.button({
  //   padding: "1.2rem 2.4rem",
  //   border: "none",
  //   fontSize: "1.6rem",
  //   backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //   color: "var(--bg-color)",
  //   fontWeight: "bold",
  //   cursor: "pointer",
  // });

  const ButtonDev = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.6rem;
    background-color: ${(props) => props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    color: var(--bg-color);
    font-weight: bold;
    cursor: pointer;
  `;

  const Rating = styled.h3`
    font-size: 1.6rem;
    color: #7dcea0;
    text-transform: capitalize;
  `;

  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

  return (
    <li key={id} className={styles.card}>
      <div>
        <img src={img_url} alt={name} height="40%" width="40%" />
      </div>
      <div className={styles["card-content"]}>
        <h2>Name: {name}</h2>
        <Rating>
          Rating:{" "}
          <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
        </Rating>
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank">
          {/* <button style={btn_style}>Watch Now</button> */}
          <ButtonDev rating={rating}>Watch Now</ButtonDev>
        </a>
      </div>
    </li>
  );
};
