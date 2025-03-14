import styles from "./secaoBanner.module.css";
import banner from "../../../../public/banner.jpg";
import Image from "next/image";

const SecaoBanner = ({ tema }) => {
  return (
    <section className={`{styles.container} ${styles[tema]}`}>
      <div>
        <Image src={banner} alt={"banner"} />
      </div>
      <div>
        <p>BRANDING | UI | UX | TECNPOLOGIA</p>
        <h2>
          Agência de Branding
          <span>e design digital</span>
        </h2>
      </div>
    </section>
  );
};

export default SecaoBanner;
