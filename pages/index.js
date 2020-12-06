import Head from "next/head";
import Scrollbar from "../components/scrollbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clínica Médica Dermatológica | Dra. Maria Obregón</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <p className={styles.headerInfo}>
            <a className={styles.headerInfoLink} href="tel:23683623">
              +(502) 2368-3623
            </a>
            <a
              className={styles.headerInfoLink}
              target="_blank"
              href="https://www.google.com/maps/place/Cl%C3%ADnica+M%C3%A9dica+Dermatol%C3%B3gica+-+Dra.+Maria+Obreg%C3%B3n/@14.585424,-90.518847,15z/data=!4m5!3m4!1s0x0:0x9160c3c823d2ea09!8m2!3d14.585424!4d-90.518847"
            >
              10a Calle 2-45 zona 14. Edificio Clínicas Médicas Las Américas,
              Clínica 601.
            </a>
          </p>
        </div>
        <h1 className={styles.title}>Clínica Médica Dermatológica</h1>
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
        <p className={styles.description}>Médico de red de Mapfre y RPN</p>
        <a href="tel:23683623">
          <button className={styles.ctaCall}>Llamar para pedir cita</button>
        </a>

        <Scrollbar />

        <h2 className={styles.descriptionTitle}>Consulta Médica</h2>
        <iframe
          className={styles.map}
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJv79rP0ijiYURCerSI8jDYJE&key=AIzaSyB3QAIxc4PGiBS7XDDGGk4TukafRIkcM3o"
          allowfullscreen
        ></iframe>

        <div className={styles.local}>
        <div className={styles.localInfo}>
          <h3 className={styles.localTitle}>Ubicación</h3>
          <p className={styles.localDescription}>
            10a calle 2-45 zona 14 <br />
            Clínicas Médicas Las Américas
            <br />
            Clínica 601
            <br />
            Ciudad de Guatemala, 01014
            <br />
          </p>
        </div>
        
        <div className={styles.localInfo}>
          <h3 className={styles.localTitle}>Teléfono</h3>
          <p className={styles.localDescription}>
            <a href="tel:23683623">+(502) 2368-3623</a>
          </p>
        </div>
        <div className={styles.localInfo}>
          <h3 className={styles.localTitle}>Atención de Lunes a Sábado</h3>
        </div>
        </div>
      </main>

      <footer className={styles.footer}>
        © 2020 Clínica Médica Dermatológica | <br />
        Dra. Maria Obregón
      </footer>
    </div>
  );
}
