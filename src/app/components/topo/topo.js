"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import styles from "./topo.module.css";

const Topo = ({ tema, alterarTema, simbolo }) => {
  return (
    <header className={`{styles.container} ${styles[tema]}`}>
      {/* <Image src={} alt /> */}
      <h1>logo</h1>
      <button className={styles.btnFormat} onClick={alterarTema}>
        {simbolo}
      </button>
    </header>
  );
};

export default Topo;
