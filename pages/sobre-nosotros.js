import Head from "next/head";
import Image from "next/image";
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
          <Image
          src="/dr_alvaro_obregon_diaz.jpg"
          width='225px'
          height='350px'
           />
        </div>

        <h1 className={styles.descriptionTitle}>Dr. Álvaro Obregón Díaz</h1>
        <p className={styles.description}>
        <ul>
          <li>Médico y Cirujano por la Universidad de San Carlos de Guatemala.</li>
          <li>Médico Especialista en Medicina Física y Rehabilitación del Hospital Roosevelt.</li>
          <li>Especialidad en Investigación Científica por parte de la Universidad de San Carlos de Guatemala.</li>
          <li>Certificación Internacional en vendaje funcional en deportistas.</li>
          <li>Certificación Internacional en vendaje neuro muscular.</li>
          <li>Certificación Internacional de manejo de dolor miofascial a través de punción seca.</li>
          <li>Estudios en Parálisis Cerebral en el Instituto Nacional de Rehabilitación en Ciudad de México, México.</li>
          <li>Certificación internacional de colocación de toxina botulínica ecoguiada.</li>
          <li>Creador y actual Jefe de Servicio de Rehabilitación Neonatal en el Hospital Roosevelt.</li>
        </ul>
        </p>
        
        <a href="https://api.whatsapp.com/send?phone=+50256294566">
          <button className={styles.ctaCall}>Pedir cita por WhatsApp</button>
        </a>
        <Location />
      </main>

      <footer className={styles.footer}>
        © Rehabi-Med | <br />
        Dr. Álvaro Obregón Díaz
      </footer>
    </div>
  );
}
