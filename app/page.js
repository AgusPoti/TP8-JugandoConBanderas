"use client";

import { useEffect, useState } from "react";
import axios from 'axios';
import Input from "./Components/Input";
import Bandera from "./Components/Bandera";
import Button from "./Components/Button";
import styles from './page.module.css';
import bStyles from './Components/Button/Button.module.css';
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>FLAGPARDY</h1>
      <Link href="/Juego">Jugar</Link>
    </main>
  );
}


