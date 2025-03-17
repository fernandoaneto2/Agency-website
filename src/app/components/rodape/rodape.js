import React from "react";
import styles from "./rodape.module.css";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import imageFace from "../../../../public/facebook.png";
import imageX from "../../../../public/twitter.png";
import imageLinkedin from "../../../../public/linkedin.png";
import imageWeb from "../../../../public/dribble.png";
import imageBe from "../../../../public/behance.png";
import imageGoogle from "../../../../public/google.png";

const Rodape = ({ tema }) => {
  return (
    <footer className={`${styles.container} ${styles[tema]}`}>
      <div className={styles.container_principal}>
        <div className={styles.container_frase}>
          <Image src={logo} alt={"Logo"} />
          <p>
            Ajudamos a criar uma personalidade digital contruindo sua marca no
            ambiente online utilizando estratégias, ferramentas e tecnologias
            personalizadas
          </p>
        </div>
        <div className={styles.container_icons}>
          <Image
            className={styles.icon}
            src={imageFace}
            alt={"Facebook Icon"}
          />
          <Image className={styles.icon} src={imageX} alt={"X Icon"} />
          <Image
            className={styles.icon}
            src={imageLinkedin}
            alt={"Linkedin Icon"}
          />
          <Image className={styles.icon} src={imageWeb} alt={"Dribble Icon"} />
          <Image className={styles.icon} src={imageBe} alt={"Behance Icon"} />
          <Image
            className={styles.icon}
            src={imageGoogle}
            alt={"Google Icon"}
          />
        </div>
      </div>
      <div>
        <p>
          Copyright 2025{" "}
          <span className={styles.nome_amarelo}>
            {" "}
            Fernando Amorim Pontes Neto
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Rodape;
