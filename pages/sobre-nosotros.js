import Head from "next/head";
import Header from "../components/header";
import Location from "../components/location";
import styles from "../styles/Nosotros.module.css";

export default function Nosotros() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nosotros | Dr. Álvaro Obregón Díaz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <div className={styles.hero}>
        </div>

        <h1 className={styles.descriptionTitle}>Dr. Álvaro Obregón Díaz de León</h1>
        <p className={styles.description}>
        Médico y cirujano por la Universidad de San Carlos de Guatemala, inició hace más de 25 años en el diagnóstico y tratamiento de enfermedades de la piel como alumna de los dermatólogos Dr. Jorge E. Close De León y Dr. Arturo García Valdez.  Obtuvo su especialidad en Dermatología del Instituto Dermatológico de Guadalajara, México.
        </p>
        <p className={styles.description}>Durante muchos años prestó servicios en el Instituto Guatemalteco de Seguridad Social y Hospital Roosevelt como dermatóloga para adultos y niños, obteniendo una amplia experiencia en los problemas de la piel más comunes y extraños de las diferentes regiones de Guatemala.</p>
        <a href="https://api.whatsapp.com/send?phone=+50256294566">
          <button className={styles.ctaCall}>Pedir cita por WhatsApp</button>
        </a>
        <Location />
      </main>

      <footer className={styles.footer}>
        © 2020 Rehabi-Med | <br />
        Dr. Álvaro Obregón Díaz
      </footer>
    </div>
  );
}
