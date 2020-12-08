import Head from "next/head";
import Header from "../components/header"
import Location from "../components/location"
import styles from "../styles/Contacto.module.css";

export default function Contacto() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contacto | Dra. Maria Obregón</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Location />
      </main>

      <footer className={styles.footer}>
        © 2020 Clínica Médica Dermatológica | <br />
        Dra. Maria Obregón
      </footer>
    </div>
  );
}
