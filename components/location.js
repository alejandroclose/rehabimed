import styles from "../styles/Location.module.css";

export default function Location() {
  return (
    <>
      <h2 className={styles.descriptionTitle}>Consulta Médica</h2>
      <iframe
        className={styles.map}
        frameBorder="0"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJv79rP0ijiYURCerSI8jDYJE&key=AIzaSyB3QAIxc4PGiBS7XDDGGk4TukafRIkcM3o"
        allowFullScreen
      ></iframe>

      <div className={styles.local} id="contacto">
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
    </>
  );
}
