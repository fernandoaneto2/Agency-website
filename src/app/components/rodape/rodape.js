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

const Rodape = () => {
  return (
    <footer>
      <div>
        <div className={styles.container_frase}>
          <Image src={logo} alt={"Logo"} />
          <p>
            Ajudamos a criar uma personalidade digital contruindo sua marca no
            ambiente online utilizando estratégias, ferramentas e tecnologias
            personalizadas
          </p>
        </div>
        <div className={styles.container_icons}>
          <Image src={imageFace} alt={"Facebook Icon"} />
          <Image src={imageX} alt={"X Icon"} />
          <Image src={imageLinkedin} alt={"Linkedin Icon"} />
          <Image src={imageWeb} alt={"Dribble Icon"} />
          <Image src={imageBe} alt={"Behance Icon"} />
          <Image src={imageGoogle} alt={"Google Icon"} />
        </div>
      </div>
      <div>
        <p>Copyright 2025 Fernando Amorim Pontes Neto</p>
      </div>
    </footer>
  );
};

export default Rodape;
