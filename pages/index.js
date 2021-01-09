import Head from "next/head";
import Header from "../components/header"
import Scrollbar from "../components/scrollbar";
import Location from "../components/location"
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clínica Médica Dermatológica | Dra. Maria Obregón</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <div className={styles.hero}>
          <h2 className={styles.subtitle}>
            Diagnóstico y tratamiento de enferemedades de la piel, uñas y
            cabello.
          </h2>
        </div>

        <h1 className={styles.descriptionTitle}>Dra. Maria Obregón de León</h1>
        <p className={styles.description}>
          Más de 25 años de experiencia en dermatología médica.
        </p>
        <p className={styles.description}>Médico de red de Mapfre, RPN, Roblered y Seguros Agromercantil</p>
        <a href="tel:23683623">
          <button className={styles.ctaCall}>Llamar para pedir cita</button>
        </a>

        <Scrollbar />
        <Location />
      </main>

      <footer className={styles.footer}>
        © 2020 Clínica Médica Dermatológica | <br />
        Dra. Maria Obregón
      </footer>
    </div>
  );
}
