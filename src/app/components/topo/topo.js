"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import styles from "./topo.module.css";

const Topo = () => {
  const [tema, setTema] = useState("light");

  function alterarTema() {
    if (tema === "light") {
      setTema("dark");
    } else {
      setTema("light");
    }
  }

  return (
    <div className={styles.container}>
      {/* <Image src={} alt /> */}
      <button onClick={alterarTema}>SIMBOLO TEMA</button>
    </div>
  );
};

export default Topo;
