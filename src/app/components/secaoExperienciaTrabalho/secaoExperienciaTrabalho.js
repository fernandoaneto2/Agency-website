import React from "react";
import Card from "../card/card.js";
import styles from "./secaoExperienciaTrabalho.module.css";

const SecaoExperienciaTrabalho = ({ tema }) => {
  return (
    <section className={`${styles.container} ${styles[tema]}`}>
      <div className={styles.titulo_experiencias}>
        <h2>Experiências De Trabalho</h2>
        <span className={styles.linha}></span>
        <p>
          Há mais de 10 anos no mercado de Branding, Design Gráfico, Criação de
          Sites e Marketing Digital, nos empenhamos diariamente para entregar
          resultados que tragam impacto aos nossos clientes
        </p>
      </div>
      <div className={styles.secao_cards}>
        <Card
          data="JUNHO 2012 - 2016"
          funcao="Web Designer"
          local="Pied Piper
          StartUp."
          descricao=" Criação de Landing Pages, Sites institucionais e
          E-commerces completamente personalizados e otimizados para buscadores"
          tema={tema}
        />
        <Card
          data="AGOSTO 2016 - 2019"
          funcao="Product Designer"
          local="E Corp."
          descricao="
            Criação de modelos estratégicos de conversão identificando o cliente
            e mapeando toda a sua jornada de compra
          "
          tema={tema}
        />
        <Card
          data="FEVEREIRO 2019 - 2021"
          funcao="Digital Consulting"
          local="Araska Inc."
          descricao="
            Consultoria em estratégias digitais para todas as etapas do ciclo do
            projeto, desde a definição inicial até a execução
          "
          tema={tema}
        />
      </div>
    </section>
  );
};

export default SecaoExperienciaTrabalho;
