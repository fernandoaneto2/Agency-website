"use client";
import { useState } from "react";
import React from "react";
import Topo from "./components/topo/topo.js";
import styles from "./page.module.css";
import { IoSunny, IoMoon } from "react-icons/io5";
import SecaoBanner from "./components/secaoBanner/secaoBanner.js";
import SecaoExperienciaTrabalho from "./components/secaoExperienciaTrabalho/secaoExperienciaTrabalho.js";
import Card from "./components/card/card.js";
import Rodape from "./components/rodape/rodape.js";

const HomePage = () => {
  const [tema, setTema] = useState("light");
  const [simbolo, setSimbolo] = useState(<IoMoon />);

  function alterarTema() {
    setTema(tema === "light" ? "dark" : "light");
    if (tema === "light") {
      setSimbolo(<IoMoon />);
    } else {
      setSimbolo(<IoSunny />);
    }
  }
  return (
    <div className={`${styles.container} ${tema}`}>
      <header>
        <Topo tema={tema} alterarTema={alterarTema} simbolo={simbolo} />
      </header>
      <main>
        <SecaoBanner tema={tema} />
        <SecaoExperienciaTrabalho tema={tema}>
          <Card tema={tema} />
          <Card tema={tema} />
          <Card tema={tema} />
        </SecaoExperienciaTrabalho>
      </main>
      <footer>
        <Rodape />
      </footer>
    </div>
  );
};

export default HomePage;
