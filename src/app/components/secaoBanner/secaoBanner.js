import styles from "./secaoBanner.module.css";
import banner from "../../../../public/banner.jpg";
import Image from "next/image";

const SecaoBanner = ({ tema }) => {
  return (
    <section className={`${styles.container} ${styles[tema]}`}>
      <div className={styles.container_um}>
        <Image className={styles.img} src={banner} alt={"banner"} />
      </div>
      <div className={styles.container_dois}>
        <p className={styles.subtitulo}>BRANDING / UI / UX / TECNOLOGIA</p>
        <h2>Agência de Branding</h2>
        <span className={styles.texto_bold}> e design digital</span>
      </div>
    </section>
  );
};

export default SecaoBanner;
