import Head from "next/head";
import Header from "../components/header"
import Location from "../components/location"
import styles from "../styles/Contacto.module.css";

export default function Contacto() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contacto | Dr. Álvaro Obregón Díaz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Location />
      </main>

      <footer className={styles.footer}>
        © 2021 Rehabi-Med | <br />
        Dr. Álvaro Obregón Díaz
      </footer>
    </div>
  );
}
