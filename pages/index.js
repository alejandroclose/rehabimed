import Head from "next/head";
import Header from "../components/header"
import Scrollbar from "../components/scrollbar";
import Location from "../components/location"
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rehabi-Med | Dr. Álvaro Obregón Díaz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <div className={styles.hero}>
          <h2 className={styles.subtitle}>
          </h2>
        </div>

        <h1 className={styles.descriptionTitle}>Dr. Álvaro Obregón Díaz</h1>
        <p className={styles.description}>
          Especialista en Medicina Física y Rehabilitación.
        </p>
        <a href="https://api.whatsapp.com/send?phone=+50256294566">
          <button className={styles.ctaCall}>Pedir cita por WhatsApp</button>
        </a>

        <Scrollbar />
        <Location />
      </main>

      <footer className={styles.footer}>
        © 2020 Rehabi-Med | <br />
        Dr. Álvaro Obregón Díaz
      </footer>
    </div>
  );
}
