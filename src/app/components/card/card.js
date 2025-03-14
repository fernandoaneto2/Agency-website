import React from "react";
import styles from "./card.module.css";

const Card = ({ data, funcao, local, descricao, tema }) => {
  return (
    <div className={`${styles.container} ${styles[tema]}`}>
      <span>{data}</span>
      <h3>{funcao}</h3>
      <small>{local}</small>
      <p>{descricao}</p>
    </div>
  );
};

export default Card;
