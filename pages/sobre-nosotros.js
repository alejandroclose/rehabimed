import Head from "next/head";
import Header from "../components/header";
import Location from "../components/location";
import styles from "../styles/Nosotros.module.css";

export default function Nosotros() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clínica Médica Dermatológica | Dra. Maria Obregón</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <div className={styles.hero}>
        </div>

        <h1 className={styles.descriptionTitle}>Dra. Maria Obregón de León</h1>
        <p className={styles.description}>
        Médico y cirujano por la Universidad de San Carlos de Guatemala, inició hace más de 25 años en el diagnóstico y tratamiento de enfermedades de la piel como alumna de los dermatólogos Dr. Jorge E. Close De León y Dr. Arturo García Valdez.  Obtuvo su especialidad en Dermatología del Instituto Dermatológico de Guadalajara, México.
        </p>
        <p className={styles.description}>Durante muchos años prestó servicios en el Instituto Guatemalteco de Seguridad Social y Hospital Roosevelt como dermatóloga para adultos y niños, obteniendo una amplia experiencia en los problemas de la piel más comunes y extraños de las diferentes regiones de Guatemala.</p>
        <a href="tel:23683623">
          <button className={styles.ctaCall}>Llamar para pedir cita</button>
        </a>
        <Location />
      </main>

      <footer className={styles.footer}>
        © 2020 Clínica Médica Dermatológica | <br />
        Dra. Maria Obregón
      </footer>
    </div>
  );
}
