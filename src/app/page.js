"use client";
import { useState } from "react";
import React from "react";
import Topo from "./components/topo/topo.js";
import styles from "./page.module.css";
import { IoSunny, IoMoon } from "react-icons/io5";

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
    <div className={`styles.container.&{tema}`}>
      <Topo tema={tema} alterarTema={alterarTema} simbolo={simbolo} />
    </div>
  );
};

export default HomePage;
