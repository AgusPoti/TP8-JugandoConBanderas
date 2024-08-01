"use client";

import Head from 'next/head';
import styles from './page.module.css';
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>FLAGPARDY</h1>
      <div className={styles.container}>
        <Link href="/Juego" className={styles.link}>Jugar</Link>
        <Link href="/Ranking" className={styles.link}>Ranking</Link>
      </div>
    </main>
  );
}
